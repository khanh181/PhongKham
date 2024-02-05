namespace PhongKham
{
    public static class RouteConfig
    {
        public static void MapRoutes(WebApplication app)
        {
           /* MapDangKyRoute(app);*/
            MapDefaultRoute(app);
            //UseCustomStatusCodePages(app);
        }

        private static void MapDefaultRoute(WebApplication app)
        {
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Router1",
                    pattern: "Common/{type}-{id}",
                    defaults: new { controller = "Common", action = "Index" }
                );
                // ... (các định tuyến khác hoặc endpoints.MapDefaultControllerRoute() nếu cần)
                endpoints.MapDefaultControllerRoute();
            });

            /*app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");*/
        }
        /*private static void MapDefaultRoute(WebApplication app)
        {
            app.MapControllerRoute(
                name: "default",
                pattern: "trang-chu/{id?}",
                defaults: new { controller = "Home", action = "Index" });
        }

        private static void MapDangKyRoute(WebApplication app)
        {
            app.MapControllerRoute(
                name: "dang-ky",
                pattern: "dang-ky/{*slug}",
                defaults: new { controller = "Account", action = "Index" });
        }*/

        private static void UseCustomStatusCodePages(WebApplication app)
        {
            app.UseStatusCodePages(context => {
                context.HttpContext.Response.ContentType = "text/plain";

                if (context.HttpContext.Response.StatusCode != 200)
                {
                    context.HttpContext.Response.Redirect("/Error");
                }
               /* if (context.HttpContext.Response.StatusCode == 500)
                {
                    context.HttpContext.Response.Redirect("/Error/500");
                }*/

                return Task.CompletedTask;
            });
        }
    }
}
