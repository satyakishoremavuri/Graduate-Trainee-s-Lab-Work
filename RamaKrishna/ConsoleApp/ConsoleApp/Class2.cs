using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Class2
    {
        public void show()      //Instance Method
        {
            Console.WriteLine("This is Show Method");
        }
        public static void display()        //Stataic Method
        {
            Console.WriteLine("This is display method");
        }
        static void Main(string[] args)
        {
            display();

            Class2 class2 = new Class2();
            class2.show();

        }
    }
}
