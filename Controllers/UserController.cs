using AplikacjaSpamerska.Models;
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
    public class UserController : Controller
    {

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginModel loginModel)
        {
            if (!ModelState.IsValid)
                return ValidationProblem();

            var user = await _userManager.FindByNameAsync(loginModel.UserName);

            if(user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user, loginModel.Password, false, false);
                if(result.Succeeded)
                {
                    return Json(new JSONresponseModel { Message = "Logowanie pomyślne" });
                }
            }
            else
            {
                return Json(new JSONresponseModel { Message = "Logowanie nie udane - użytkownik o podanym nicku nie istnieje" });
            }

            return Json(new JSONresponseModel { Message = "Logowanie nie udane - błąd" });

        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]LoginModel loginModel)
        {
            if(ModelState.IsValid)
            {
                var user = new User() { UserName = loginModel.UserName };

                // check if already exist
                var tempUser = _userManager.FindByNameAsync(loginModel.UserName);


                if(tempUser!= null)
                {
                    return Json(new JSONresponseModel { Message = "Nick zajęty" });
                }

                var result = await _userManager.CreateAsync(user, loginModel.Password);


                if(result.Succeeded)
                {
                    return Json(new JSONresponseModel { Message = "Zarejestrowano pomyślnie" });
                }

                return Json(new JSONresponseModel { Message = "Nie udało się zarejestrować" });
                

            }

            return Json(new JSONresponseModel { Message = "Nie udało się zarejestrować" });
        }
    }
}
