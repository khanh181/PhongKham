using Microsoft.AspNetCore.Mvc;

namespace PhongKham.Controllers
{
    public class CommonController : Controller
    {
        public IActionResult Index(string type, string id)
        {
            return Json(new { Type = type , Id = id});
        }
    }
}
