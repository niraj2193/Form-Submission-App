using Microsoft.EntityFrameworkCore;
using UserFormApi.Common_Data;
using UserFormApi.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure the PostgreSQL connection string
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
  //  options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Use InMemory database instead of PostgreSQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase("UserDetails"));

// Add Swagger for API documentation (optional)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS to allow requests from React (running on port 3000)
builder.Services.AddCors(options =>
{
    options.AddPolicy("React_Frontend",
        builder => builder.WithOrigins("http://localhost:3000")  // React's default port
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

// Enable CORS
app.UseCors("React_Frontend");

app.MapControllers();

app.Run();

