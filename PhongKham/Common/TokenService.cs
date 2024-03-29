﻿using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using PhongKham.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PhongKham.Common
{
    public class TokenService
    {
        private readonly IConfiguration _configuration;

        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateJwtToken(UserLogin userLogin)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
            new Claim(JwtRegisteredClaimNames.Sub, userLogin.Id.ToString()), 
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim("Sdt", userLogin.Sdt),
            new Claim("UserName", userLogin.UserName),
            new Claim("DiaChi", userLogin.DiaChi),
            new Claim("TokenName", "authentication")
        };
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(1),
                signingCredentials: credentials
            );

            /*ClaimsPrincipal claimPrincipal = new ClaimsPrincipal(token);*/

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public UserLogin DecodeJwtToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            var userLogin = new UserLogin
            {
                Id = int.Parse(jwtToken.Claims.First(claim => claim.Type == JwtRegisteredClaimNames.Sub).Value), // Thay đổi ở đây
                Sdt = jwtToken.Claims.First(claim => claim.Type == "Sdt").Value,
                UserName = jwtToken.Claims.First(claim => claim.Type == "UserName").Value,
                DiaChi = jwtToken.Claims.First(claim => claim.Type == "DiaChi").Value
            };

            return userLogin;
        }
    }


}
