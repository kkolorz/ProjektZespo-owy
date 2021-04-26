using AplikacjaSpamerskaAPI.Models;
using MailKit.Net.Smtp;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace AplikacjaSpamerska.HostingServices
{
    public class EmailSenderBackgroundService : BackgroundService
    {
        private readonly IServiceProvider _service;

        public EmailSenderBackgroundService(IServiceProvider service)
        {
            _service = service;

        }

        protected async override Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {

                using (var scope = _service.CreateScope())
                {
                    // pobierz emails repo
                    var emailsRepo = scope.ServiceProvider.GetRequiredService<IEmailsRepository>();

                    var emailsList = emailsRepo.GetAllUsersEmailList();

                    // create smtp and connect
                    // email passes
                    // l: testApp4520@gmail.com p: TeStApP4520.!
                    SmtpClient client = new SmtpClient();
                    client.Connect("smtp.gmail.com", 465); // tls port - 587, ssl port - 465
                    //client.AuthenticationMechanisms.Remove("XOAUTH2");
                    try
                    {
                        client.Authenticate("testApp4520@gmail.com", "TeStApP4520.!");
                    }
                    catch(Exception ex)
                    {
                        var exx = ex;
                    }
            // pobierz aktaulny czas
            int currentHour = DateTime.Now.Hour;
            int currentMinute = DateTime.Now.Minute;

                    // pw for p2 = notasecret

                    foreach (var emailToSend in emailsList)
                    {
                        if(emailToSend.HourToSend == currentHour && emailToSend.MinuteToSend == currentMinute)
                        {

                            MimeMessage message = new MimeMessage();

                            MailboxAddress from = new MailboxAddress(emailToSend.SenderEmail, emailToSend.SenderEmail);
                            message.From.Add(from);

                            MailboxAddress to = new MailboxAddress(emailToSend.ReceiverEmail, emailToSend.ReceiverEmail);
                            message.To.Add(to);

                            BodyBuilder bodyBuilder = new BodyBuilder();
                            bodyBuilder.TextBody = emailToSend.Content;

                            bodyBuilder.Attachments.Add("image.png", emailToSend.ImageData);


                            message.Body = bodyBuilder.ToMessageBody();

                            client.Send(message);
                        }
                    }
                    client.Disconnect(true);
                    client.Dispose();
                }
                await Task.Delay(60000, stoppingToken);
            }
        }
    }
}
