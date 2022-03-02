using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ecom.Models
{
    public partial class dev_apidbProduct : DbContext
    {
        public dev_apidbProduct()
        {
        }

        public dev_apidbProduct(DbContextOptions<dev_apidbProduct> options)
            : base(options)
        {
        }

        public virtual DbSet<Abc> Abcs { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Orderdetail> Orderdetails { get; set; }
        public virtual DbSet<Productpage> Productpages { get; set; }
        public virtual DbSet<SequelizeMetum> SequelizeMeta { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("host=localhost;database=dev_apidbProduct;user id=postgres;password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "English_United States.1252");

            modelBuilder.Entity<Abc>(entity =>
            {
                entity.ToTable("abc");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Createdat)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("createdat")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .HasColumnName("name");

                entity.Property(e => e.Updatedat)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("updatedat")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("createdAt");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(255)
                    .HasColumnName("emailId");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("updatedAt");
            });

            modelBuilder.Entity<Orderdetail>(entity =>
            {
                entity.HasKey(e => e.Orderid)
                    .HasName("orderdetail_pkey");

                entity.ToTable("orderdetail");

                entity.Property(e => e.Orderid).HasColumnName("orderid");

                entity.Property(e => e.Createdat)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("createdat")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Customeraddress)
                    .HasMaxLength(255)
                    .HasColumnName("customeraddress");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(255)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(255)
                    .HasColumnName("lastname");

                entity.Property(e => e.Productdescription)
                    .HasMaxLength(255)
                    .HasColumnName("productdescription");

                entity.Property(e => e.Productgrandtotal).HasColumnName("productgrandtotal");

                entity.Property(e => e.Productimage)
                    .HasMaxLength(255)
                    .HasColumnName("productimage");

                entity.Property(e => e.Productname)
                    .HasMaxLength(255)
                    .HasColumnName("productname");

                entity.Property(e => e.Productprice).HasColumnName("productprice");

                entity.Property(e => e.Updatedat)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("updatedat")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<Productpage>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("createdAt");

                entity.Property(e => e.ProductDescription)
                    .HasMaxLength(255)
                    .HasColumnName("productDescription");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.ProductImage)
                    .HasMaxLength(255)
                    .HasColumnName("productImage");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(255)
                    .HasColumnName("productName");

                entity.Property(e => e.ProductPrice).HasColumnName("productPrice");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("updatedAt");
            });

            modelBuilder.Entity<SequelizeMetum>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("SequelizeMeta_pkey");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.PhoneNumber).HasColumnName("phoneNumber");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("updatedAt");

                entity.Property(e => e.UserName)
                    .HasMaxLength(255)
                    .HasColumnName("userName");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
