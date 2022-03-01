using ApiDbProductContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ecom.Models
{
    public class ProductPageDataAccessLayer
    {
        dev_apidbProductContext db = new dev_apidbProductContext();

        public IEnumerable<Productpage> GetAllProduct()
        {
            try
            {
                return db.Productpages.ToList();
            }
            catch
            {
                throw;
            }
        }

        public Productpage GetProductpageData(int id)
        {
            try
            {
                Productpage productpage = db.Productpages.Find(id);
                return productpage;
            }
            catch
            {
                throw;
            }
        }

        public int AddProduct(Productpage productpage)
        {
            try
            {
                db.Productpages.Add(productpage);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateProduct(Productpage productpage)
        {
            try
            {
                
                
                db.Entry(productpage).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteProduct(int id)
        {
            try
            {
                Productpage productpage = db.Productpages.Find(id);
                db.Productpages.Remove(productpage);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //***********
        //public IEnumerable<User> GetAllUser()
        //{
        //    try
        //    {
        //        return db.Users.ToList();
        //    }
        //    catch
        //    {
        //        throw;
        //    }
        //}
    }
}
