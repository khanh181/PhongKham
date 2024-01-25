using Microsoft.AspNetCore.Mvc;
using PhongKham.Models;
using System.Diagnostics;

namespace PhongKham.Controllers
{
    public class GioiThieuController : Controller
    {
        private readonly ILogger<GioiThieuController> _logger;

        public GioiThieuController(ILogger<GioiThieuController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
