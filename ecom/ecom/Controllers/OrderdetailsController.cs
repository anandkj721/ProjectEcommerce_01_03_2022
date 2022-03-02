using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ecom.Models;


namespace ecom.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class OrderdetailsController : ControllerBase
    {
        OrderDetailsDataAccessLayer ObjOrderDetailsDataAccessLayer = new OrderDetailsDataAccessLayer();
        private readonly dev_apidbProduct _context;

        public OrderdetailsController(dev_apidbProduct context)
        {
            _context = context;
        }

        //for create 
        [HttpPost]
        [Route("api/OrderDetail/Create")]
        public int Create([FromBody] Orderdetail Orderdetail)
        {
            return ObjOrderDetailsDataAccessLayer.AddOrderdetail(Orderdetail);
        }


        //public OrderdetailsController(dev_apidbProduct context)
        //{
        //    _context = context;
        //}

        //// GET: api/Orderdetails
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Orderdetail>>> GetOrderdetails()
        //{
        //    return await _context.Orderdetails.ToListAsync();
        //}

        //// GET: api/Orderdetails/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Orderdetail>> GetOrderdetail(int id)
        //{
        //    var orderdetail = await _context.Orderdetails.FindAsync(id);

        //    if (orderdetail == null)
        //    {
        //        return NotFound();
        //    }

        //    return orderdetail;
        //}

        //// PUT: api/Orderdetails/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutOrderdetail(int id, Orderdetail orderdetail)
        //{
        //    if (id != orderdetail.Orderid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(orderdetail).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OrderdetailExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Orderdetails
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Orderdetail>> PostOrderdetail(Orderdetail orderdetail)
        //{
        //    _context.Orderdetails.Add(orderdetail);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetOrderdetail", new { id = orderdetail.Orderid }, orderdetail);
        //}

        //// DELETE: api/Orderdetails/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Orderdetail>> DeleteOrderdetail(int id)
        //{
        //    var orderdetail = await _context.Orderdetails.FindAsync(id);
        //    if (orderdetail == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Orderdetails.Remove(orderdetail);
        //    await _context.SaveChangesAsync();

        //    return orderdetail;
        //}

        //private bool OrderdetailExists(int id)
        //{
        //    return _context.Orderdetails.Any(e => e.Orderid == id);
        //}
    }
}
