namespace PhongKham.Configuration
{
    public class DBPhongKhamConfiguration
    {
        private static IConfiguration configuration;
        public static IConfiguration GetConfiguration()
        {
            if (configuration == null)
            {
                configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json", false, true).Build();
            }
            return configuration;
        }
    }
}
