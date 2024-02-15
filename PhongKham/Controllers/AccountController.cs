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

namespace PhongKham.Controllers
{
    public class AccountController : Controller
    {
        private readonly PKDbContext _db;
        private readonly ILogger<HomeController> _logger;

        public AccountController(ILogger<HomeController> logger, PKDbContext pkDbContext)
        {
            _logger = logger;
            _db = pkDbContext;
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
            if (identity == null)
            {
                // Trả về một JsonResult với thông báo đăng nhập thất bại
                return Json(new { success = false, message = "Đăng nhập thất bại." });
            }
            else
            {
              /*  var userLogin = new UserLogin
                {
                    Sdt = identity.Sdt,
                    Id = identity.Id,
                    Ten = identity.Ten,
                    DiaChi = identity.DiaChi
                };*/
                HttpContext.Session.SetString("Sdt", identity.Sdt);
                HttpContext.Session.SetString("Id", identity.Id.ToString());
                HttpContext.Session.SetString("Ten", identity.Ten);
                HttpContext.Session.SetString("DiaChi", identity.DiaChi);
                return Redirect("/");
            }
        }
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("/dang-nhap"); 
        }

    }
}
