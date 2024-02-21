using Newtonsoft.Json;
using PhongKham.Common;
using PhongKham.Controllers;
using PhongKham.Database;
using PhongKham.Models;
using System.Data;
using static PhongKham.Common.Constants.PhongKham;

namespace PhongKham.Manager
{
    public class AccountManager
    {
        private static AccountManager _instance;
        private readonly PKDbContext _db;
        public static AccountManager Instance
        {
            get { return _instance; }
        }

        public AccountManager(PKDbContext pkDbContext)
        {
            _db = pkDbContext;
            _instance = this;
        }

        public UserLogin Login(UserLogin model)
        {
            try
            {
                /*// Kiểm tra sdt trống
                if (string.IsNullOrEmpty(model.Sdt) == true)
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.PhoneValidation;
                    model.ThongDiep = ErrorCode.NguoiDung.PhoneValidation.GetDescription();
                    return model;
                }
                // Lấy Sđt hợp lệ
                var sdtInvalid = Instance.GetSdtValid(model.MaQuocGia, model.Sdt);
                if (sdtInvalid.Length == 0)
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.PhoneNumberInvalid;
                    model.ThongDiep = ErrorCode.NguoiDung.PhoneNumberInvalid.GetDescription();
                    return model;
                }
                // Kiểm tra sdt đã được đăng ký chưa
                if (!Instance.VerifySdtByActive(sdtInvalid, true))
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.PhoneNumberNotRegister;
                    model.ThongDiep = ErrorCode.NguoiDung.PhoneNumberNotRegister.GetDescription();
                    return model;
                }*/
                // Kiểm tra đã nhập mật khẩu
                /*if (string.IsNullOrEmpty(model.Password) == true)
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.PasswordValidation;
                    model.ThongDiep = ErrorCode.NguoiDung.PasswordValidation.GetDescription();
                    return model;
                }
                // Kiểm tra xem mật khẩu đã đúng chưa
                if (!Instance.VerifyPasswordInvalid(sdtInvalid, Encryption.GetMd5Hash(model.MatKhau)))
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.PasswordInvalid;
                    model.ThongDiep = ErrorCode.NguoiDung.PasswordInvalid.GetDescription();
                    return model;
                }
                // Lấy thông tin về người dùng
                var nguoiDung = Instance.GetBySdt(sdtInvalid);
                if (nguoiDung == null)
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.NguoiDungNotExist;
                    model.ThongDiep = ErrorCode.NguoiDung.NguoiDungNotExist.GetDescription();
                    return model;
                }
                // Cập nhật thông tin người dùng đăng nhập
                nguoiDung.NgayCapNhat = DateTime.Now;
                nguoiDung.MaKhoa = Encryption.GetMd5Hash(Guid.NewGuid().ToString());
                if (Instance.Update(nguoiDung) <= 0)
                {
                    model.MaLoi = (int)ErrorCode.NguoiDung.NguoiDungNotRegisterSuccess;
                    model.ThongDiep = ErrorCode.NguoiDung.NguoiDungNotRegisterSuccess.GetDescription();
                    return model;
                }
                model.Sdt = sdtInvalid;*/
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // Lấy thông tin người dùng đăng nhập thành công
      
    }
}


