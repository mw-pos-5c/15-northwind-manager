using System.Collections.Generic;
using System.Linq;

using NorthwindManager.Dtos;

using NorthwindManagerDb;

namespace NorthwindManager.Services
{
    public class NorthwindService
    {
        private readonly NorthwindManagerContext db;

        public NorthwindService(NorthwindManagerContext db)
        {
            this.db = db;
        }

        public IEnumerable<EmployeeDto> GetEmployees()
        {
            return db.Employees.Select(employee => new EmployeeDto
            {
                City = employee.City,
                Country = employee.Country,
                Id = employee.EmployeeId,
                Name = $"{employee.LastName} {employee.FirstName}"
            });
        }

        public IEnumerable<CustomerDto> GetCustomers()
        {
            return db.Customers.Select(customer => new CustomerDto
            {
                City = customer.City,
                Country = customer.Country,
                Id = customer.CustomerId,
                CompanyName = customer.CompanyName,
                ContactName = customer.ContactName
            });
        }

        public IEnumerable<OrderDto> GetEmpOrders(int employeeId)
        {
            return db.Orders.Where(order => order.EmployeeId == employeeId).Select(order => new OrderDto
            {
                Id = order.OrderId,
                OrderDate = order.OrderDate,
                RequiredDate = order.RequiredDate,
                ShippedDate = order.ShippedDate,
                NrOrderDetails = order.OrderDetails.Count
            });
        }
        
        public IEnumerable<OrderDto> GetCustOrders(string customerId)
        {
            return db.Orders.Where(order => order.CustomerId == customerId).Select(order => new OrderDto
            {
                Id = order.OrderId,
                OrderDate = order.OrderDate,
                RequiredDate = order.RequiredDate,
                ShippedDate = order.ShippedDate,
                NrOrderDetails = order.OrderDetails.Count
            });
        }
        

        public IEnumerable<OrderDetailsDto> GetOrderDetails(int orderId)
        {
            return db.OrderDetails.Where(detail => detail.OrderId == orderId).Select(detail => new OrderDetailsDto
            {
                Quantity = detail.Quantity,
                OrderId = detail.OrderId,
                ProductName = detail.Product.ProductName,
                UnitPrice = detail.UnitPrice
            });
        }
    }
}
