using Microsoft.AspNetCore.Mvc;

namespace PhongKham.Controllers
{
    public class AccountController : Controller
    {
        [Route("dang-nhap")]
        public IActionResult Index()
        {
            return View();
        }
        [Route("dang-ky")]
        public IActionResult DangKy()
        {
            return View();
        }
    }
}
