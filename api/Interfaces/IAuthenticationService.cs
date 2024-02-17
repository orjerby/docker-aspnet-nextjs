namespace api.Interfaces
{
    public interface IAuthenticationService
    {
        string GenerateToken(string idCard);
    }
}
