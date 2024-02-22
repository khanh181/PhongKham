using Microsoft.AspNetCore.Identity;

namespace PhongKham.Models
{
    public class UserLogin 
    {
        public int Id { get; set; }
        public string Sdt { get; set; }
        public string UserName { get; set; }
        public string DiaChi { get; set; }
        public DateTime? NgaySinh { get; set; }
        public string StrNgaySinh
        {
            get
            {
                return NgaySinh.HasValue ? NgaySinh.Value.ToString("yyyy/MM/dd") : null;
            }
        }
        public string Role { get; set; }
        public string PassWord { get; set; }
    }
}
