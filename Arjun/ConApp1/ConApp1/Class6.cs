using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Returnable Methods
    internal class Class6
    {
        public int Sum(int x, int y)
        {
            return x + y;
        }
        public int Mul(int x, int y)
        {
            return x * y;
        }
        static void Main(string[] args)
        {
            Class6 class6 = new Class6();
            Console.WriteLine("Sum of Two Integers is :" + class6.Sum(10, 20));
            Console.WriteLine("Mul of Two Integers is :" + class6.Mul(10, 20));
        }
    }
}
