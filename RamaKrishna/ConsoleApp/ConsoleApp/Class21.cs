using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{ 
    //Boxing and UnBoxing
    internal class Class21
    {
        static void Main(string [] args)
        {
            int a = 100;
            Console.WriteLine("a Value is :" + a);
            object obj = a;     //Boxing
            Console.WriteLine("Object Value is :" + obj);
            int b = (int)obj;        //UnBoxing
            Console.WriteLine("b Value is :" + b);
        }
    }
}
