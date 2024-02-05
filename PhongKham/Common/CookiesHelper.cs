using Microsoft.AspNetCore.Http;
using System;
using System.Linq;
using System.Net;
using System.Runtime.InteropServices;
using System.Net.NetworkInformation;

namespace PhongKham.Common
{
    public static class CookiesHelper
    {
        public static void SetValue(HttpContext httpContext, string key, string value, double day)
        {
            var options = new CookieOptions
            {
                Expires = DateTime.Now.AddDays(day),
                Secure = true
            };
            httpContext.Response.Cookies.Append(key, value, options);
        }

        public static string GetValue(HttpContext httpContext, string key)
        {
            string value = string.Empty;
            if (httpContext.Request.Cookies.TryGetValue(key, out value))
            {
                return value;
            }
            return value;
        }

        public static bool HasKey(HttpContext httpContext, string key)
        {
            return httpContext.Request.Cookies.ContainsKey(key);
        }

        public static void Remove(HttpContext httpContext, string key)
        {
            if (HasKey(httpContext, key))
            {
                httpContext.Response.Cookies.Delete(key);
            }
        }

        public static bool HasCookies(HttpContext httpContext)
        {
            return HasKey(httpContext, "CHECK_COOKIES");
        }

        public static string GetIpAddress(HttpContext httpContext)
        {
            var ip = GetIpClient(httpContext);
            return ip;
        }

        public static string GetIpClient(HttpContext httpContext)
        {
            try
            {
                string ipAddress = httpContext.Connection.RemoteIpAddress.ToString();
                return ipAddress;
            }
            catch (Exception err)
            {
                return Guid.NewGuid().ToString();
            }
        }
    }
}
