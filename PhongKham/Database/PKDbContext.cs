using Microsoft.Data.SqlClient;

namespace PhongKham.Database
{
    public class PKDbContext
    {
        public string ConnectString;

        public PKDbContext(IConfiguration configuration)
        {
            ConnectString = configuration.GetConnectionString("DefaultConnection");
        }

        public SqlConnection Db => new SqlConnection(ConnectString);
    }
}
