

using Microsoft.AspNetCore.Authentication.Cookies;

namespace PhongKham.Common
{
    public class Cookies
    {
        // Kiểm tra xem website đã được login authen chưa(dùng ở trang developer)
        public static bool IsLoginAuthen
        {
            get
            {
                var isLogin = CookiesHelper.GetValue(Constants.LOGIN_AUTHEN_COOKIES);
                if (!string.IsNullOrEmpty(isLogin))
                {
                    return Convert.ToBoolean(isLogin);
                }
                return false;
            }
            set
            {
                CookiesHelper.SetValue(Constants.LOGIN_AUTHEN_COOKIES, string.Format("{0}", value), 365);
            }
        }
        // Lấy ra tên ngắn của tỉnh đã chọn
        public static string ProvinceAlias
        {
            get
            {
             /*   if (CookiesHelper.HasCookies())
                {
                    var provinceAlias = CookiesHelper.GetValue(Constants.PROVINCE_ALIAS_COOKIES);
                    return provinceAlias;
                }
                else
                {
                    var model = CookiesManager.Instance.GetCookiesUser(CookiesHelper.GetIpAddress());
                    if (model != null)
                    {
                        return model.TinhAlias;
                    }
                }*/
                return "ha-noi";
            }
        }
    }
}
