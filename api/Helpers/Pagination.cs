using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    //generic class so we can paginate anything
    public class Pagination<T> where T : class
    {

        public Pagination(int pageIndex, int pageSize, int count, IReadOnlyList<T> data)
        {
            PageIndex = pageIndex;
            PageSize = pageSize;
            Count = count;
            Data = data;
        }

        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        
        //return data with ienumerable or ireadonlylist
        public IReadOnlyList<T> Data { get; set; }
    }
}