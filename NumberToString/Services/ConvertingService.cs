using NumberToString.Models;
using System;

namespace NumberToString.Services
{
    public class ConvertingService
    {
        public AccountHolder ToEnglish(string name , double amount)
        {
            var accountHolder = new AccountHolder();

            accountHolder.Name = name;

            var amountInString = amount.ToString();

            var splittedAmount = amountInString.Split('.');

            accountHolder.Amount = NumberToWords(Math.Abs(int.Parse(splittedAmount[0])));

            if (splittedAmount.Length > 1)
            {
                accountHolder.Amount = string.Format("{0} DOLLARS AND {1} CENTS", accountHolder.Amount, splittedAmount[1]);
            }else
            {
                accountHolder.Amount = string.Format("{0} DOLLARS", accountHolder.Amount);
            }

            return accountHolder;

        }

        private string NumberToWords(int number)
        {
            if (number == 0)
                return "ZERO";

            if (number < 0)
                return "MINUS " + NumberToWords(Math.Abs(number));

            string words = "";

            if ((number / 1000000) > 0)
            {
                words += NumberToWords(number / 1000000) + " MILLION ";
                number %= 1000000;
            }

            if ((number / 1000) > 0)
            {
                words += NumberToWords(number / 1000) + " THOUSAND ";
                number %= 1000;
            }

            if ((number / 100) > 0)
            {
                words += NumberToWords(number / 100) + " HUNDERED ";
                number %= 100;
            }

            if (number > 0)
            {
                if (words != "")
                    words += "AND ";

                var unitsMap = new[] { "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN" };
                var tensMap = new[] { "ZERO", "TEN", "TWENTY", "thirty", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY" };

                if (number < 20)
                    words += unitsMap[number];
                else
                {
                    words += tensMap[number / 10];
                    if ((number % 10) > 0)
                        words += "-" + unitsMap[number % 10];
                }
            }

            return words;
        }

    }
}