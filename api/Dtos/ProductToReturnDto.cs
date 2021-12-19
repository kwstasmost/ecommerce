using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class ProductToReturnDto
    {
        //shape the data we send to the client with dto 
        //for example by deleting productTypeId from here we dont set it to the client
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Pictureurl { get; set; }
        public decimal Price { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }

    }
}