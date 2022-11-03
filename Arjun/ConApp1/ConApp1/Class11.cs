using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Class11
    {
        static void Main(string[] args)
        {
            int[] a = new int[5] { 10, 20, 30, 40, 50 };
            int i = 0;
            Console.WriteLine("The Array Elements are......");
            while (i < a.Length)
            {
                Console.Write(a[i++] + "\t");
            }

            Console.WriteLine("\nThe Array Elements are......");
            for (i = 0; i < a.Length; i++)
            {
                Console.Write(a[i] + "\t");
            }

            Console.WriteLine("\nThe Array Elements are......");
            i = 0;
            do
            {
                Console.Write(a[i++] + "\t");
            } while (i < a.Length);

            Console.WriteLine("\nThe Array Elements are......");
            foreach (int ele in a)
            {
                Console.Write(ele + "\t");
            }

        }
    }
}