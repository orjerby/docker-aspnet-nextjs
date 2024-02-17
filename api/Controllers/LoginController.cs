using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using api.Interfaces;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthenticationService _authenticationService;

        public LoginController(
            IConfiguration configuration,
            IAuthenticationService authenticationService)
        {
            _configuration = configuration;
            _authenticationService = authenticationService;
        }

        [HttpGet("Login")]
        public async Task<ActionResult<string>> Login()
        {
            await Task.Delay(2500);

            var token = _authenticationService.GenerateToken("test");

            Response.Cookies.Append(_configuration.GetSection("AuthSettings:Cookie").Value!, token, new CookieOptions
            {
                Expires = DateTimeOffset.Now.AddMinutes(5),
                HttpOnly = true,
                SameSite = SameSiteMode.Strict,
                Secure = true,
                IsEssential = true,
            });

            return Ok(new { SignedIn = true });
        }

        [Authorize]
        [HttpGet("Login2")]
        public ActionResult<string> Login2()
        {
            return Ok(new { WelcomeBack = true });
        }
    }
}
