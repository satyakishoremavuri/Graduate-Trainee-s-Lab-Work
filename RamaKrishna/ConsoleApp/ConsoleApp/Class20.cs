using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Multiple Inheritanve with the help of interfaces
    interface IInter1
    {
        void One();
    }
    interface IInter2
    {
        void two();
    }
    abstract class Inter3
    {
        abstract public void Three();
    }
    class Sample5 : Inter3, IInter1, IInter2
    {
        public void One()
        {
            Console.WriteLine("This is Method One");
        }

        public override void Three()
        {
            Console.WriteLine("This is Method Three");
        }
        public void two()
        {
            Console.WriteLine("This is Method Two");
        }
    }

    internal class Class20
    {
        static void Main(string [] args)
        {
            Sample5 sample5 = new Sample5();
            sample5.One();
            sample5.two();
            sample5.Three();
        }
    }
}
