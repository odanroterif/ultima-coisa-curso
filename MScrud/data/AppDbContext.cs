using Microsoft.EntityFrameworkCore;
using MScrud.models;

namespace MScrud.data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options){}
    
    public DbSet<Animals> ATcrud { get; set; }
}