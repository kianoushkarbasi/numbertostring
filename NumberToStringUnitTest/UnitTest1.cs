using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NumberToString.Controllers;
using NumberToString.Services;

namespace NumberToStringUnitTest
{
    [TestClass]
    public class ConvertControllerShould
    {
        [TestMethod]
        public void ParseIntsCorrectly()
        {
            var expectedName = "test";

            var convertingService = new ConvertingService();
            var result = convertingService.ToEnglish(expectedName, 1);

            Assert.AreEqual(expectedName ,result.Name);
            Assert.AreEqual("ONE DOLLAR", result.Amount);


            result = convertingService.ToEnglish(expectedName, 0);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("ZERO DOLLAR" ,result.Amount);


            result = convertingService.ToEnglish(expectedName, -1);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("MINUS ONE DOLLAR", result.Amount);


        }

        [TestMethod]
        public void ParseFloatsCorrectly()
        {
            var expectedName = "test";

            var convertingService = new ConvertingService();
            var result = convertingService.ToEnglish(expectedName, 1.5);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("ONE DOLLAR AND FIVE CENTS", result.Amount);


            result = convertingService.ToEnglish(expectedName, 0.5);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("FIVE CENTS", result.Amount);

        }

        [TestMethod]
        public void ParseNEgativeNumbersCorrectly()
        {
            var expectedName = "test";

            var convertingService = new ConvertingService();
            var result = convertingService.ToEnglish(expectedName, -1.5);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("MINUS ONE DOLLAR AND FIVE CENTS", result.Amount);


            result = convertingService.ToEnglish(expectedName, -0.5);

            Assert.AreEqual(expectedName, result.Name);
            Assert.AreEqual("MINUS FIVE CENTS", result.Amount);

        }

    }
}
