using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Public
{
    public class PagedResult<T> : PagedResultBase where T : class
    {

        public List<T> Results { get; set; }

        public PagedResult(List<T> data, long rowCount, int currentPage, int pageSize)
        {
            Results = data;
            RowCount = rowCount;
            CurrentPage = currentPage;
            PageSize = pageSize;
        }
    }
}
