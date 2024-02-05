using Enyim.Caching;
using Enyim.Caching.Memcached;
using Enyim.Caching.Memcached.Transcoders;
using PhongKham.Configuration;

namespace PhongKham.Manager
{
    public class MemcachedManager
    {
        public static MemcachedClient GetClient(MemcachedProtocol protocol = MemcachedProtocol.Binary, bool useBinaryFormatterTranscoder = false)
        {
            IServiceCollection services = new ServiceCollection();
            var address = DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:Memcached:Servers:Address").Value;
            var port = int.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:Memcached:Servers:Port").Value);
            services.AddEnyimMemcached(options =>
            {
                options.AddServer(address, port);
                options.Protocol = protocol;
            });
            if (useBinaryFormatterTranscoder)
            {
                services.AddSingleton<ITranscoder, BinaryFormatterTranscoder>();
            }

            services.AddLogging(builder => builder.SetMinimumLevel(LogLevel.Information).AddConsole());

            IServiceProvider serviceProvider = services.BuildServiceProvider();
            var client = serviceProvider.GetService<IMemcachedClient>() as MemcachedClient;
            return client;
        }

        public static object Add(string key, object entry, DateTime utcExpiry)
        {
            try
            {
                using (MemcachedClient client = GetClient())
                {
                    utcExpiry = TimeZoneInfo.ConvertTimeFromUtc(utcExpiry, TimeZoneInfo.Local);
                    client.Store(StoreMode.Add, key, entry, utcExpiry);

                }
                return entry;
            }
            catch
            {
                //_logger.LogError(ex.StackTrace);
                throw;
            }
        }

        public static object Get(string key)
        {
            try
            {
                object result;
                using (MemcachedClient client = GetClient())
                {
                    client.TryGet(key, out result);

                }
                return result;
            }
            catch
            {
                throw;
            }
        }

        public static void Remove(string key)
        {
            try
            {
                using (MemcachedClient client = GetClient())
                {
                    client.Remove(key);
                }
            }
            catch
            {
                throw;
            }
        }

        public static void Set(string key, object entry, DateTime utcExpiry)
        {
            try
            {
                using (MemcachedClient client = GetClient())
                {
                    client.Store(StoreMode.Set, key, entry, utcExpiry);

                }
            }
            catch
            {
                throw;
            }
        }

        public static void CleanCache()
        {
            using (MemcachedClient client = GetClient())
            {
                client.FlushAll();
            }
        }
    }
}
