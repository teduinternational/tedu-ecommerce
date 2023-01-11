using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeduEcommerce.Manufacturers;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TeduEcommerce.Public.Manufacturers
{
    public class ManufacturersAppService : ReadOnlyAppService<
        Manufacturer,
        ManufacturerDto,
        Guid,
        PagedResultRequestDto>, IManufacturersAppService
    {
        public ManufacturersAppService(IRepository<Manufacturer, Guid> repository)
            : base(repository)
        {
        }


        public async Task<List<ManufacturerInListDto>> GetListAllAsync()
        {
            var query = await Repository.GetQueryableAsync();
            query = query.Where(x => x.IsActive == true);
            var data = await AsyncExecuter.ToListAsync(query);

            return ObjectMapper.Map<List<Manufacturer>, List<ManufacturerInListDto>>(data);

        }

        public async Task<PagedResult<ManufacturerInListDto>> GetListFilterAsync(BaseListFilterDto input)
        {
            var query = await Repository.GetQueryableAsync();
            query = query.WhereIf(!string.IsNullOrWhiteSpace(input.Keyword), x => x.Name.Contains(input.Keyword));

            var totalCount = await AsyncExecuter.LongCountAsync(query);
            var data = await AsyncExecuter
            .ToListAsync(
               query.Skip((input.CurrentPage - 1) * input.PageSize)
            .Take(input.PageSize));

            return new PagedResult<ManufacturerInListDto>(
                ObjectMapper.Map<List<Manufacturer>, List<ManufacturerInListDto>>(data),
                totalCount,
                input.CurrentPage,
                input.PageSize
            );
        }
    }
}
