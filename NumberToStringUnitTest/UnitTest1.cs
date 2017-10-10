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
            Assert.AreEqual("ONE", result.Amount);
        }
    }
}
