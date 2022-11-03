using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Multi Level Inheritance
    class BaseClass
    {
        int a;
        public BaseClass(int x)
        {
            a = x;
        }
        public void Show()
        {
            Console.WriteLine("a Value is :" + a);
        }
    }
    class DerivedClass : BaseClass
    {
        int b;
        public DerivedClass(int y) : base(10)
        {
            b = y;
        }
        public new void Show()
        {
            base.Show();
            Console.WriteLine("b Value is :" + b);
        }

    }
    class SubDerivedClass : DerivedClass
    {
        int c;
        public SubDerivedClass(int z) : base(20)
        {
            c = z;
        }
        public new void Show()
        {
            base.Show();
            Console.WriteLine("c Value is :" + c);
        }
    }
    internal class Class16
    {
        static void Main(string[] args)
        {
            SubDerivedClass obj = new SubDerivedClass(30);
            obj.Show();
        }
    }
}