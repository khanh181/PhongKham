using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Newtonsoft.Json;
using PhongKham.Common;
using PhongKham.Manager;
using PhongKham.Models;
using System.Security.Claims;
using static PhongKham.Common.Constants.PhongKham;
using System.Data;
using PhongKham.Database;
using Microsoft.Extensions.Configuration;

namespace PhongKham.Controllers
{
    public class AccountController : Controller
    {
        private readonly PKDbContext _db;
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public AccountController(ILogger<HomeController> logger, PKDbContext pkDbContext, IConfiguration configuration)
        {
            _logger = logger;
            _db = pkDbContext;
            _configuration = configuration;
        }

        [Route("dang-ky/{*slug}")]
        [HttpPost]
        public IActionResult DangKy()
        {
            return View();
        }
        // *** Đăng nhập
        [Route("dang-nhap/{*slug}")]
        [ResponseCache(NoStore = true, Duration = 0, Location = ResponseCacheLocation.None)]
        public IActionResult Index()
        {
            return View();
        }
        // POST: Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(UserLogin model)
        {
            var identity = _db.Db.QueryCachedAsync<UserLogin>(Stored.NguoiDungGetIdentityBySdt, param: new { model.Sdt, model.PassWord }, commandType: CommandType.StoredProcedure).FirstOrDefault();
            var userLogin = new UserLogin
            {
                Id = identity.Id,
                Sdt = identity.Sdt,
                Ten = identity.Ten,
                DiaChi = identity.DiaChi
            };

            if (userLogin.Ten == null)
            {
                TempData["Message"] = "Mật khẩu hoặc tên tài khoản không đúng.";
                return Redirect("/dang-nhap");
            }
            else
            {
                // Tạo token JWT
                var tokenService = new TokenService(_configuration);
                var token = tokenService.GenerateJwtToken(userLogin);

                // Lưu token vào cookie
                Response.Cookies.Append("jwt", token, new CookieOptions { HttpOnly = true });

                // Chuyển hướng đến trang chủ
                return Redirect("/");
            }
        }

        public IActionResult Logout()
        {
            // Xóa cookie chứa token JWT
            Response.Cookies.Delete("jwt");

            // Chuyển hướng đến trang đăng nhập
            return Redirect("/dang-nhap");
        }

    }
}
