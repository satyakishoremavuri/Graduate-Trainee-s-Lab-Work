using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Class Variables or Instance Variables and Static Variables
    internal class Class5
    {
        int EmpNumber = 1001;           //instance variable
        static int StudNumber = 2002;   //static variable

        public void Show()              //Instance Method
        {
            Console.WriteLine("Employee Number  :"+EmpNumber);
            Console.WriteLine("Student Number   :"+StudNumber);
            Display();
            GetData();
        }
        public void Display()           //Instance Method
        {

        }
        public static void GetData()    //Static Method
        {

        }
        static void Main(string [] args)    //Static Method
        {
            Console.WriteLine("Student Number  :" + StudNumber);
            GetData();

            Class5 class5 = new Class5();
            Console.WriteLine("Employee Number  :"+class5.EmpNumber);
            class5.Show();
        }
    }
}
