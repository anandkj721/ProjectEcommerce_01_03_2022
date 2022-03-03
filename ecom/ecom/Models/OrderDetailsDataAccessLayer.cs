using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ecom.Models
{
    public class OrderDetailsDataAccessLayer
    {
        dev_apidbProduct db = new dev_apidbProduct();

        public IEnumerable<Orderdetail> GetAllOrderdetail()
        {
            try
            {
                return db.Orderdetails.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Orderdetail> GetOrderdetailData(string Username)
        {
            try
            {
                List<Orderdetail> orderdetail = new List<Orderdetail>();
                orderdetail = db.Orderdetails.Where(t => t.Username.Contains(Username)).ToList();

                //Orderdetail o = db.Orderdetails.Find(Username);
                return orderdetail;
            }
            catch
            {
                throw;
            }
        }

        public int AddOrderdetail(Orderdetail orderdetail)
        {
            try
            {
                db.Orderdetails.Add(orderdetail);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int Updateorderdetail(Orderdetail orderdetail)
        {
            try
            {


                db.Entry(orderdetail).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteOrderdetail(int id)
        {
            try
            {
                Orderdetail orderdetail = db.Orderdetails.Find(id);
                db.Orderdetails.Remove(orderdetail);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
