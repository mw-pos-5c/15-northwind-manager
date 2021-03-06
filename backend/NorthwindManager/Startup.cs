using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NorthwindManagerDb;
using System;

using NorthwindManager.Services;

namespace NorthwindManager
{
  public class Startup
  {
    private readonly string myAllowSpecificOrigins = "_myAllowSpecificOrigins";

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      string dataDirKey = "|DataDirectory|";
      string connectionString = Configuration.GetConnectionString("NorthwindSqlite");
      string assemblyLocation = System.Reflection.Assembly.GetEntryAssembly().Location;
      string dataDirectory = System.IO.Path.GetDirectoryName(assemblyLocation);
      if (connectionString.Contains(dataDirKey)) connectionString = connectionString.Replace(dataDirKey, dataDirectory + System.IO.Path.DirectorySeparatorChar);
      Console.WriteLine($"connectionString={connectionString}");
      services.AddDbContext<NorthwindManagerContext>(options => options.UseSqlite(connectionString));
      services.AddScoped<NorthwindService>();
      
      services.AddCors(options =>
      {
        options.AddPolicy(myAllowSpecificOrigins,
            x => x.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader()
          );
      });
      services.AddMvc(options => options.EnableEndpointRouting = false);
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors(myAllowSpecificOrigins);

      app.UseExceptionHandler(config =>
      {
        config.Run(async context =>
        {
          context.Response.StatusCode = 500;
          context.Response.ContentType = "application/json";
          var error = context.Features.Get<IExceptionHandlerFeature>();
          if (error != null)
          {
            await context.Response.WriteAsync(
              $"Exception: {error.Error?.Message} {error.Error?.InnerException?.Message}");
          }
        });
      });

      app.UseMvc();
    }
  }
}
