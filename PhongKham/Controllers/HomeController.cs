using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PhongKham.Common;
using PhongKham.Database;
using PhongKham.Models;
using System.Data;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace PhongKham.Controllers
{

    public class HomeController : Controller
    {
        private readonly PKDbContext _db;
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, PKDbContext pkDbContext, IConfiguration configuration)
        {
            _logger = logger;
            _db = pkDbContext;
            _configuration = configuration;
        }

        /* [Authorize]*/
        public IActionResult Index()
        {
            // Đọc token từ cookie
            var token = Request.Cookies["jwt"];

            // Kiểm tra xem có token trong cookie hay không
            if (string.IsNullOrEmpty(token))
            {
                // Nếu không có token trong cookie, chuyển hướng đến trang đăng nhập
                return Redirect("/dang-nhap");
            }
            else
            {
                // Giải mã token để lấy thông tin người dùng
                // Tạo token JWT
                var tokenService = new TokenService(_configuration);
                var userLogin = tokenService.DecodeJwtToken(token);

                // Kiểm tra xem có thông tin người dùng trong token hay không
                if (userLogin == null)
                {
                    // Nếu không có thông tin người dùng trong token, chuyển hướng đến trang đăng nhập
                    return Redirect("/dang-nhap");
                }
                else
                {
                    // Nếu có thông tin người dùng trong token, hiển thị view bình thường
                    return View();
                }
            }
        }

       
        public IActionResult Privacy()
        {
            return View();
        }
        [Route("/Error/{*slug}")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier, StatusCode = HttpContext.Response.StatusCode });
        }
    }
}