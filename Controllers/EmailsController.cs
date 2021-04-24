using AplikacjaSpamerskaAngular.Models;
using AplikacjaSpamerskaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAPI.Controllers
{
    public class EmailsController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IEmailsRepository _emailListRepository;

        public EmailsController(UserManager<User> userManager, SignInManager<User> signInManager, IEmailsRepository emailListRepository)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailListRepository = emailListRepository;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddEmail([FromBody] EmailsModel emailModel)// TODO CHANGE NAME OF THIS FUCKING CLASS XDDDDD
        {
            // pobierz usera
            var user = _userManager.GetUserAsync(HttpContext.User);
            // zweryfikuj
            if (!ModelState.IsValid)
                return ValidationProblem();
            // dodaj do bazy
            Email email = new Email { SenderEmail = emailModel.SenderEmail,
                ReceiverEmail = emailModel.ReceiverEmail,
                Content = emailModel.Content,
                ImageData = emailModel.ImageData,
                DateToSend = emailModel.DateToSend
            };
            _emailListRepository.AddEmail(email);
            return Ok();
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<Email> GetEmails()// TODO CHANGE NAME OF THIS FUCKING CLASS XDDDDD
        {
            var user = _userManager.GetUserAsync(HttpContext.User);
            return _emailListRepository.GetUserEmailList(user.Result);
        }

    }
}
