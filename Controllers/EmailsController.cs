using AplikacjaSpamerska.Models;
using AplikacjaSpamerskaAngular.Models;
using AplikacjaSpamerskaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        public async Task<IActionResult> Add([FromBody] EmailsModel emailModel)// TODO CHANGE NAME OF THIS FUCKING CLASS XDDDDD
        {
            // pobierz usera
            var user = await _userManager.GetUserAsync(HttpContext.User);
            // zweryfikuj
            if (!ModelState.IsValid)
                return Json(new JSONresponseModel { Message = "Problem z walidacją" });
            // dodaj do bazy

            DateTime xd = new DateTime();
            int index = emailModel.ImageData.IndexOf("base64,") + "base64,".Length;
            string base64String = emailModel.ImageData.Remove(0, index);
            byte[] imageData = Convert.FromBase64String(base64String);

            Email email = new Email { SenderEmail = emailModel.SenderEmail,
                ReceiverEmail = emailModel.ReceiverEmail,
                Content = emailModel.Content,
                ImageData = imageData,
                HourToSend = emailModel.HourToSend,
                MinuteToSend = emailModel.MinuteToSend,
                User = user
            };
            _emailListRepository.AddEmail(email);
            return Json(new JSONresponseModel { Message = "Email dodany" });
        }



        [Authorize]
        [Produces("application/json")]
        [HttpGet]
        public IActionResult GetEmailss()// TODO CHANGE NAME OF THIS FUCKING CLASS XDDDDD
        {
            var user = _userManager.GetUserAsync(HttpContext.User);
            var list = _emailListRepository.GetUserEmailList(user.Result).ToList();

            return Json(list);

        }

    }
}
