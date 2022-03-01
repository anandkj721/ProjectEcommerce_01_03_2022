using ApiDbProductContext;
using ecom.Helpers;
using ecom.Models;
using MassTransit.Serialization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ecom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly dev_apidbProductContext _context;
        private readonly IConfiguration _config;
        public LoginController(dev_apidbProductContext userDbContext,IConfiguration config)
        {
            _context = userDbContext;
            _config = config;
        }
        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            var userdetails = _context.Users.AsQueryable();
            return Ok(userdetails);
        }
        [HttpPost("signup")]
        public IActionResult SignUp([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }
            else
            {
                userObj.Password = EncDscPassword.EncryptPassword(userObj.Password);
                _context.Users.Add(userObj);
                _context.SaveChanges();
                return Ok(new
                {
                    //StatusCode = 200,
                    Message = "Sign up Successfully"

                });
            }
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.Users.Where(a => a.UserName == userObj.UserName).FirstOrDefault();


                if (user != null && EncDscPassword.DecryptPassword(user.Password) == userObj.Password)
                {
                    var token = GenerateToken(user.UserName);
                    return Ok(new
                    {
                       // StatusCode = 200,
                        Message = "Logged In Successfully",
                        // UserType = user.UserType,
                        jwtToken = token
   
                    }) ; 
                }
                else
                {
                    return NotFound(new
                    {
                        //StatusCode = 404,
                        Message = "User Not Found"
                    });
                }
            }
        }

        private string GenerateToken(string username) 
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var Credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.Email,username),
                new Claim("companyName","Mastek")
            };
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: Credential);

            return tokenhandler.WriteToken(token);
        }
    }
}

