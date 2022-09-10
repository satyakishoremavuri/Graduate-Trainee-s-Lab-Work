using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //LocalVariables
    internal class Class4
    {
        public void Show()
        {
            float EmpSalary = 5000;
            Console.WriteLine("Employee Salary   :" + EmpSalary);
        }
        static void Main(string[] args)
        {
            int EmpNumber = 101;
            string EmpName = "Arjun";

            Console.WriteLine("Employee Number   :" + EmpNumber);
            Console.WriteLine("Employee Name     :" + EmpName);
            //Console.WriteLine("Employee Salary   :" + EmpSalary);

            Class4 class4 = new Class4();
            class4.Show();
        }
    }
}