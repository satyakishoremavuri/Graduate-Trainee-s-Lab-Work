using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Class7
    {
        static void Main(string[] args)
        {
            int[] a = new int[5] { 10, 20, 30, 40, 50 };

            //int[] a = { 1, 2, 3, 4, 5, 6 };

            Console.WriteLine("The Array Elemnets are.....");
            for (int i = 0; i < a.Length; i++)
            {
                Console.WriteLine("a[" + i + "]=" + a[i]);
            }

        }
    }
}