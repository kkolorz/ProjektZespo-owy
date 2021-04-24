using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAngular.Models
{
    public class Email
    {
        public int Id { get; set; }
        public string SenderEmail { get; set; }
        public string ReceiverEmail { get; set; }
        public string Content { get; set; }
        public byte[] ImageData { get; set; }
        public DateTime DateToSend { get; set; }
        public User User { get; set; }
    }
}
