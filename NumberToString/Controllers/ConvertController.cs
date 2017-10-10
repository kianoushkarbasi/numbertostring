using NumberToString.Models;
using NumberToString.Services;
using System.Web.Http;

namespace NumberToString.Controllers
{
    public class ConvertController : ApiController
    {
        public AccountHolder Get(string name, double amount)
        {
            var convertingService = new ConvertingService();
            return convertingService.ToEnglish(name, amount);
        }
        
    }

}
