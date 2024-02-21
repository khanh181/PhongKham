using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using static System.Net.Mime.MediaTypeNames;
using PhongKham;
using PhongKham.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using PhongKham.Models;
using Microsoft.AspNetCore.Identity;
using PhongKham.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Authentication.Cookies;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddControllers();
builder.Services.AddTransient<PKDbContext, PKDbContext>();

builder.Services.AddAuthentication("CookieLoginAuth").AddCookie("CookieLoginAuth", options =>
{
    options.Cookie.Name = "CookieLoginAuth";
    options.LoginPath = "/dang-nhap";
    options.LogoutPath = "/dang-ky";
    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
});

builder.Services.AddAuthorization( options =>
{
    options.AddPolicy("AdminCanAccess", policy => policy.RequireClaim("Role", "Admin"));
});

// Configure JWT authentication
/*builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = builder.Configuration["Jwt:Authority"];
    options.Audience = builder.Configuration["Jwt:Audience"];
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});
*/
// Add services to the container.
/*builder.Services.AddDistributedMemoryCache(); // Adds a default in-memory implementation of IDistributedCache
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(1); // You can set Time here 
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});*/

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler(exceptionHandlerApp =>
    {
        exceptionHandlerApp.Run(async context =>
        {
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;

            // using static System.Net.Mime.MediaTypeNames;
            context.Response.ContentType = Text.Plain;

            await context.Response.WriteAsync("An exception was thrown.");

            var exceptionHandlerPathFeature =
                context.Features.Get<IExceptionHandlerPathFeature>();

            if (exceptionHandlerPathFeature?.Error is FileNotFoundException)
            {
                await context.Response.WriteAsync(" The file was not found.");
            }

            if (exceptionHandlerPathFeature?.Path == "/")
            {
                await context.Response.WriteAsync(" Page: Home.");
            }
        });
    });

    app.UseHsts();
}

// Ensure the app uses session state.
//app.UseSession();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

//router
RouteConfig.MapRoutes(app);

app.Run();
