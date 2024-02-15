using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using System.IO;
using Newtonsoft.Json;

namespace Model.Manager
{
    public class CookiesManager 
    {
        private static CookiesManager _instance;
        public static CookiesManager Instance
        {
            get { return _instance ?? (_instance = new CookiesManager()); }
        }

        // Lay danh sach cookies
       /* public CookiesViewModel GetCookiesUser(string ip)
        {
            try
            {
                // Code to get cookies goes here
                // You need to replace this with your own logic
                return new CookiesViewModel();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }*/

        //Kiểm tra số điện thoại đã được đăng ký hay chưa
        public bool SetTinhCookiesUser(string ip, int tinhId, string tinhName, string tinhAlias)
        {
            try
            {
                // Code to set cookies goes here
                // You need to replace this with your own logic
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
