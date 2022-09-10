using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Class32
    {
        static void Main(string [] args)
        {
            var date=DateTime.Now;
            Console.WriteLine(date);
            Console.WriteLine(date.ToShortDateString());
            Console.WriteLine(date.ToLongDateString());
            Console.WriteLine(date.ToShortTimeString());
            Console.WriteLine(date.ToLongTimeString());
            Console.WriteLine(date.Month);
            Console.WriteLine(DateTime.UtcNow);
        }
    }
}
