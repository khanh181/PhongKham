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
            using (var db = _db.Db)
            {
                var listTinh = db.QueryCachedAsync<TinhModel>(Constants.PhongKham.Stored.GetTinhAll, commandType: CommandType.StoredProcedure).ToList();
                return View(listTinh);
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
