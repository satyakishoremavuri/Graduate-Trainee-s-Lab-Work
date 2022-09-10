using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Single Inheriatnce

    class Sample        //Base Class
    {
        protected int a;
        protected int b;

        public void GetData()
        {
            Console.Write("Enter a Value :");
            a = int.Parse(Console.ReadLine());
            Console.Write("Enter b Value :");
            b = int.Parse(Console.ReadLine());
        }
        public void Show()
        {
            Console.WriteLine("a Value is :" + a);
            Console.WriteLine("b Value is :" + b);
        }
    }
    class Sample1 : Sample  //Derived Class
    {
        int c;
        public void cal()
        {
            c = a + b;
        }
        public new void Show()
        {
            base.Show();
            Console.WriteLine("c Value is :" + c);
        }
    }
    internal class Class15
    {
        static void Main(string[] args)
        {
            Sample1 sample = new Sample1();
            sample.GetData();
            sample.cal();
            sample.Show();
        }
    }
}