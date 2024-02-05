using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PhongKham.Common;

namespace PhongKham.Controllers
{
    public class CommonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetCookie()
        {
            string cookieName = "TestCookie";
            string cookieValue;

            // Kiểm tra xem cookie "TestCookie" đã được đặt hay chưa
            bool hasCookie = CookiesHelper.HasKey(HttpContext, cookieName);

            if (hasCookie)
            {
                // Cookie đã được đặt, lấy giá trị
                cookieValue = CookiesHelper.GetValue(HttpContext, cookieName);
            }
            else
            {
                // Cookie chưa được đặt, đặt giá trị
                cookieValue = "Hello, World!";
                CookiesHelper.SetValue(HttpContext, cookieName, cookieValue, 1);
            }

            // Chuyển đổi cookie thành định dạng JSON
            var jsonCookies = new Dictionary<string, string>
            {
                { cookieName, cookieValue }
            };
            var json = JsonConvert.SerializeObject(jsonCookies);

            // Truyền JSON vào view
            return View("GetCookie",json);
        }
    }
}
