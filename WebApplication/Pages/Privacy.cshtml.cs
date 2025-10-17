using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication.Pages;

public class PrivacyModel : PageModel
{
    private readonly ILogger<PrivacyModel> _logger;

    public PrivacyModel(ILogger<PrivacyModel> logger)
    {
        _logger = logger;
    }

    public IActionResult OnGet()
  {
        var claimTwoFactorEnabled = User.Claims.FirstOrDefault(t => t.Type == "amr");
        System.Console.WriteLine("Bunny: " + claimTwoFactorEnabled?.Value);

        if (claimTwoFactorEnabled != null && "mfa".Equals(claimTwoFactorEnabled.Value))
        {
            // You logged in with MFA, do the admin stuff
        }
        else
        {
            return Redirect("/Error");
        }

        return Page();
  }
}
