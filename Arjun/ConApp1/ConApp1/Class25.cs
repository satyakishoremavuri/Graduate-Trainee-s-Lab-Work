using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Sample6
    {
        //default arguements
        public int Sum(int a, int b = 100)
        {
            return a + b;
        }

        //Nullable arguments
        public int Mul(int a, int? b = null)
        {
            if (b == null)
                return 0;
            else
                return a * (int)b;
        }
    }
    internal class Class25
    {
        static void Main(string[] args)
        {
            Sample6 sample6 = new Sample6();
            Console.WriteLine(sample6.Sum(10, 20));
            Console.WriteLine(sample6.Mul(10, 100));
        }
    }
}