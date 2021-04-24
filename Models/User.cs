using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAngular.Models
{
    public class User : IdentityUser
    {
        public ICollection<Email> EmailsList { get; set; }

    }
}
