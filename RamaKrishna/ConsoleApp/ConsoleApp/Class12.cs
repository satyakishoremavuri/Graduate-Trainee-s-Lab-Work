using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Method Overloading
   public class Class12
    {
        public int Sum(int x, int y)
        {
            return x + y;
        }
        public int Sum(int x, int y, int z)
        {
            return x + y + z;
        }
        public float Sum(float x, float y)
        {
            return x + y;
        }
        static void Main(string [] args)
        {
            Class12 class12 = new Class12();
            Console.WriteLine("Sum of Two Integers is :" + class12.Sum(10, 20));
            Console.WriteLine("Sum of Three Integers is :" + class12.Sum(10, 20, 30));
            Console.WriteLine("Sum of Two Floats is  :" + class12.Sum(1.2f, 2.3f));
        }
    }
}
