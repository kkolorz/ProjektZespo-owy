using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        public int HourToSend { get; set; }
        public int MinuteToSend { get; set; }

        [JsonIgnore]
        public User User { get; set; }
    }
}
