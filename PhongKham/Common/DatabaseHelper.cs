using Newtonsoft.Json;
using PhongKham.Configuration;
using PhongKham.Manager;
using System.Data;
using Dapper;

namespace PhongKham.Common
{
    public static class DatabaseHelper
    {
        public static IEnumerable<TResult> QueryCachedAsync<TResult>(
            this IDbConnection cnn, string sqlprocedureName
            , object param = null
            , IDbTransaction transaction = null
            , bool buffered = true
            , int? commandTimeout = null
            , CommandType? commandType = null)

        {
            var timeCached = DateTime.Now.AddDays(0.5);
            // Đọc configiration from app setting
            var isDeveloper = bool.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsDeveloper").Value);
            var isMemCached = bool.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsMemCache").Value);

            var key = $"phongkham-developer.{sqlprocedureName}.{string.Join("_", param)}";
            if (!isDeveloper)
            {
                key = $"phongkham-release.{sqlprocedureName}.{string.Join("_", param)}";
            }
            key = key.Replace(" ", string.Empty).Replace("-", string.Empty).Replace(":", string.Empty);

            if (isMemCached)
            {
                var value = MemcachedManager.Get(key);
                if (value != null)
                {
                    var storage = JsonConvert.DeserializeObject<IEnumerable<TResult>>(value.ToString());
                    return storage;
                }
            }

            var result = cnn.Query<TResult>(sqlprocedureName, param, transaction, buffered, commandTimeout, commandType);
            if (isMemCached && result != null)
            {
                var storage = JsonConvert.SerializeObject(result);
                MemcachedManager.Set(key, storage, timeCached);
            }
            return result;
        }

        // Get cache cho API đã cache
        public static IEnumerable<TResult> APICached<TResult>(this IDbConnection cnn, string apiName, object param = null)
        {
            var timeCached = DateTime.Now.AddDays(0.5);
            var isDeveloper = Boolean.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsDeveloper").Value);
            var isMemCached = Boolean.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsMemCache").Value);

            var key = $"phongkham-developer.{apiName}.{string.Join("_", param)}";
            if (!isDeveloper)
            {
                key = $"phongkham-release.{apiName}.{string.Join("_", param)}";
            }
            key = key.Replace(" ", string.Empty).Replace("-", string.Empty).Replace(":", string.Empty);

            if (isMemCached)
            {
                var value = MemcachedManager.Get(key);
                if (value != null)
                {
                    var storage = JsonConvert.DeserializeObject<IEnumerable<TResult>>(value.ToString());
                    return storage;
                }
            }
            return null;
        }

        // Save cache API
        public static void SaveCachedAPI<T>(this IDbConnection cnn, string apiName, object param, T data)
        {
            var timeCached = DateTime.Now.AddDays(0.5);
            var isDeveloper = Boolean.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsDeveloper").Value);
            var isMemCached = Boolean.Parse(DBPhongKhamConfiguration.GetConfiguration().GetSection("AppSettings:IsMemCache").Value);

            var key = $"phongkham-developer.{apiName}.{string.Join("_", param)}";
            if (!isDeveloper)
            {
                key = $"phongkham-release.{apiName}.{string.Join("_", param)}";
            }
            key = key.Replace(" ", string.Empty).Replace("-", string.Empty).Replace(":", string.Empty);

            if (isMemCached)
            {
                var storage = JsonConvert.SerializeObject(data);
                MemcachedManager.Set(key, storage, timeCached);
            }
        }
    }
}