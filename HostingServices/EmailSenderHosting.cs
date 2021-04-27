using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Rebus.Workers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AplikacjaSpamerska.HostingServices
{
    public class EmailSenderHosting : IHostedService
    {
        private Timer _timer;

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(ManageSendingEmails, null, 0, 60000); // czekaj minute

            


            return Task.CompletedTask;
        }

        void ManageSendingEmails(object state)
        {
            // pobierz aktaulny czas
            int currentHour = DateTime.Now.Hour;
            int currentMinute = DateTime.Now.Minute;

            // wypisz czas
            Console.WriteLine("Obecny czas: " + currentHour + ":" + currentMinute);

        }

        void HelloWorld(object state)
        {
            Console.WriteLine("Hello World!");
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            //New Timer does not have a stop. 
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
