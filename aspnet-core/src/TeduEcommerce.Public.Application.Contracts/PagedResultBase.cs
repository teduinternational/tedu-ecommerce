using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Public
{
    public abstract class PagedResultBase
    {
        public long CurrentPage { get; set; }

        public long PageCount
        {
            get
            {
                var pageCount = (double)RowCount / PageSize;
                return (int)Math.Ceiling(pageCount);
            }
            set
            {
                if (value <= 0) throw new ArgumentOutOfRangeException(nameof(value));
                PageCount = value;
            }
        }

        public long PageSize { get; set; }
        public long RowCount { get; set; }

        public long FirstRowOnPage => (CurrentPage - 1) * PageSize + 1;

        public long LastRowOnPage => Math.Min(CurrentPage * PageSize, RowCount);

        public string AdditionalData { get; set; }
    }
}
