using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    /*
     * Types of Constructors :-
     * 1. Default Cosnstructor
     * 2. Parameter Constructor
     * 3. Overloaded Constructor
     * 4. Copy Constructor 
     */

    class Myclass
    {
        int a, b;
        public Myclass()
        {
            a = 10;
            b = 20;
            Console.WriteLine("Default Constructor Called");
        }
        public Myclass(int x, int y)
        {
            a = x;
            b = y;
            Console.WriteLine("Parameter Constructor Called");
        }
        public Myclass(Myclass obj)
        {
            a = obj.a;
            b = obj.b;
            Console.WriteLine("Copy Constructor Called");
        }
        public void Show()
        {
            Console.WriteLine("a Value is :" + a);
            Console.WriteLine("b Value is :" + b);
        }
    }
    internal class Class13
    {
        static void Main(string[] args)
        {
            Myclass myclass = new Myclass();
            myclass.Show();

            Myclass myclass1 = new Myclass(30, 40);
            myclass1.Show();

            Myclass myclass2 = new Myclass(myclass);
            myclass2.Show();
        }
    }
}