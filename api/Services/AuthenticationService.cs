using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using api.Interfaces;

namespace api.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IConfiguration _configuration;

        public AuthenticationService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateToken(string idCard)
        {
            var tokenExpiration = _configuration.GetSection("AuthSettings:TokenExpirationInMinutes").Value;
            var appSecretToken = _configuration.GetSection("AuthSettings:AuthToken").Value;

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, idCard)
            };

            if (appSecretToken is null)
                throw new Exception("App Token is null");

            SymmetricSecurityKey key = new SymmetricSecurityKey(System.Text.Encoding.UTF8
                .GetBytes(appSecretToken));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(int.Parse(tokenExpiration!)),
                SigningCredentials = creds,
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
