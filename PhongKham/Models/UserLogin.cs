using Microsoft.AspNetCore.Identity;

namespace PhongKham.Models
{
    public class UserLogin 
    {
        public int Id { get; set; }
        public string Sdt { get; set; }
        public string UserName { get; set; }
        public string DiaChi { get; set; }
        public string Role { get; set; }
        public string PassWord { get; set; }
    }
}
