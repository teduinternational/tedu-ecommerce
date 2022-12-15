using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TeduEcommerce.IdentitySettings
{
    public class IdentitySetting : BasicAggregateRoot<string>
    {
        public IdentitySetting(string id, string name, string prefix, int currentNumber, int stepNumber)
        {
            Id = id;
            Name = name;
            Prefix = prefix;
            CurrentNumber = currentNumber;
            StepNumber = stepNumber;
        }

        public string Name { get; set; }
        public string Prefix { get; set; }
        public int CurrentNumber { get; set; }
        public int StepNumber { get; set; }
    }
}
