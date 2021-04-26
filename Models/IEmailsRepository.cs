using AplikacjaSpamerskaAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAPI.Models
{
    public interface IEmailsRepository
    {
        void AddEmail(Email email);
        IEnumerable<Email> GetUserEmailList(User user);
        IEnumerable<Email> GetAllUsersEmailList();
    }
}
