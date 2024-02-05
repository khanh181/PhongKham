using Microsoft.AspNetCore.Mvc;
using PhongKham.Common;
using PhongKham.Models;
using System.Diagnostics;

namespace PhongKham.Controllers
{
    
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        /*[Route("/")]*/
        public IActionResult Index()
        {
            string cookieValue = string.Empty;

            // Kiểm tra xem cookie "TestCookie" đã được đặt hay chưa
            bool hasCookie = CookiesHelper.HasKey(HttpContext, "TestCookie");

            if (hasCookie)
            {
                // Cookie đã được đặt, lấy giá trị
                cookieValue = CookiesHelper.GetValue(HttpContext, "TestCookie");
            }
            else
            {
                // Cookie chưa được đặt, đặt giá trị
                CookiesHelper.SetValue(HttpContext, "TestCookie", "Hello, World!", 1);
                cookieValue = "Hello, World!";
            }
            return View();
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
