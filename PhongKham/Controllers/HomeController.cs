using Microsoft.AspNetCore.Mvc;
using PhongKham.Common;
using PhongKham.Database;
using PhongKham.Models;
using System.Data;
using System.Diagnostics;

namespace PhongKham.Controllers
{

    public class HomeController : Controller
    {
        private readonly PKDbContext _db;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, PKDbContext pkDbContext)
        {
            _logger = logger;
            _db = pkDbContext;
        }
        /*[Route("/")]*/
        public IActionResult Index()
        {
            var id = HttpContext.Session.GetString("Id");

            // Kiểm tra xem có các giá trị của Session hay không
            if (string.IsNullOrEmpty(id) )
            {
                // Nếu bất kỳ giá trị nào trong Session thiếu, chuyển hướng đến trang đăng nhập
                return Redirect("/dang-nhap");
            }
            else
            {
                // Nếu có đủ giá trị trong Session, hiển thị view bình thường
                return View();
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