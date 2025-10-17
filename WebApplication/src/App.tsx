import { useAuth } from "react-oidc-context";
import React from "react";

function App() {
  const auth = useAuth();

  React.useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
            auth.signinSilent();            
    })
}, [auth.events, auth.signinSilent])


  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {

    return (
      <div>
        <div>
          <img src={auth.user?.profile.picture} alt="profile-pic" />
        </div>
        Hello {auth.user?.profile.sub}{" "}
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  return <button onClick={() => void auth.signinPopup()}>Log in </button>;
}

export default App;
