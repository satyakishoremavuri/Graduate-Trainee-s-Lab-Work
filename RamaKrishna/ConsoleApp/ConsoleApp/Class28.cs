using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Sample8
    {
        //Call by Value
        public void Swap(int x, int y)
        {
            int temp=x;
            x=y;
            y=temp;
            Console.WriteLine("After  Swapping the Values are :{0}\t{1}", x, y);
        }

        //Call by Reference
        public void Swap1(ref int x, ref int y)
        {
            int temp = x;
            x = y;
            y = temp;
        }
    }
    internal class Class28
    {
        static void Main(string[] args)
        {
            int a = 10, b = 20;
            Console.WriteLine("Before Swapping the Values are :{0}\t{1}", a, b);
            Sample8 sample8 = new Sample8();
            sample8.Swap(a, b);
            sample8.Swap1(ref a, ref b);
            Console.WriteLine("After  Swapping the Values are :{0}\t{1}", a, b);
        }
    }
}
