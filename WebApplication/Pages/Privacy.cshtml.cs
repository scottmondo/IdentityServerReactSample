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
        Console.WriteLine("Bunny: " + User.Claims.Select(x => $"{x.Type}: {x.Value}").Aggregate((a, b) => a + ", " + b));
        var claimTwoFactorEnabled = User.Claims.FirstOrDefault(t => t.Type == "amr");

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
