import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://identityserverui:7001",
  client_id: "4ecc4153-daf9-4eca-8b60-818a63637a81",
  client_secret: "secret",
  redirect_uri: "https://webapplication:7002/signin-oidc",
  scope: "profile openid email",
  response_type: "code",
  metadata: {
    authorization_endpoint: "https://identityserverui:7001/connect/authorize",
    token_endpoint: "https://identityserverui:7001/connect/token",
    revocation_endpoint: "https://identityserverui:7001/connect/revoke",
    introspection_endpoint: "https://identityserverui:7001/connect/introspect",
    userinfo_endpoint: "https://identityserverui:7001/connect/userinfo",
    jwks_uri: "https://identityserverui:7001/.well-known/openid-configuration/jwks",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);

reportWebVitals();
