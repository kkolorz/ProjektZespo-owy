using AplikacjaSpamerskaAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplikacjaSpamerskaAPI.Models
{
    public class EmailsModel
    {
        public int Id { get; set; }
        public string SenderEmail { get; set; }
        public string ReceiverEmail { get; set; }
        public string Content { get; set; }
        public byte[] ImageData { get; set; }
        public DateTime DateToSend { get; set; }
        public int UserId { get; set; }
    }
}
