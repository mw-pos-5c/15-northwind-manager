using Microsoft.AspNetCore.Mvc;

using NorthwindManager.Dtos;

using NorthwindManagerDb;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

using NorthwindManager.Services;

namespace NorthwindManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NorthwindController : ControllerBase
    {
        private readonly NorthwindService service;

        public NorthwindController(NorthwindService service)
        {
            this.service = service;
        }

        [HttpGet("GetCustomers")]
        public IActionResult GetCustomers()
        {
            return Ok(service.GetCustomers());
        }

        [HttpGet("GetEmployees")]
        public IActionResult GetEmployees()
        {
            return Ok(service.GetEmployees());
        }

        [HttpGet("GetOrders")]
        public IActionResult GetOrders(string id)
        {
            if (int.TryParse(id, out int intId))
            {
                return Ok(service.GetEmpOrders(intId));
            }

            return Ok(service.GetCustOrders(id));
        }

        [HttpGet("GetOrderDetails")]
        public IActionResult GetOrderDetails(int id)
        {
            return Ok(service.GetOrderDetails(id));
        }
    }
}
