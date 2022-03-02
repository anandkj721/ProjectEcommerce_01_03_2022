using System;
using System.Collections.Generic;

#nullable disable

namespace ecom.Models
{
    public partial class Orderdetail
    {
        public int Orderid { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Customeraddress { get; set; }
        public string Productname { get; set; }
        public string Productimage { get; set; }
        public string Productdescription { get; set; }
        public int? Productprice { get; set; }
        public int? Productgrandtotal { get; set; }
        public string Username { get; set; }
        public DateTime? Createdat { get; set; }
        public DateTime? Updatedat { get; set; }
    }
}
