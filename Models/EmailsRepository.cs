using AplikacjaSpamerskaAngular.Models;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAPI.Models
{
    public class EmailsRepository : IEmailsRepository
    {
        private readonly AppDbContext _appDbContext;

        public EmailsRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void AddEmail(Email emailList)
        {
            _appDbContext.Add(emailList);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Email> GetUserEmailList(User user)
        {

            return _appDbContext.Emails.Where(email => email.User == user);
        }
    }
}
