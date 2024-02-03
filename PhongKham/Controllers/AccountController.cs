using Microsoft.AspNetCore.Mvc;

namespace PhongKham.Controllers
{
    public class AccountController : Controller
    {
        [Route("dang-nhap/{*slug}")]
        public IActionResult Index()
        {
            return View();
        }
        [Route("dang-ky/{*slug}")]
        public IActionResult DangKy()
        {
            return View();
        }
    }
}
