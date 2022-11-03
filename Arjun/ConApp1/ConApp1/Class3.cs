using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Class3
    {
        static void Main(string[] args)
        {
            Console.Write("Enter Employee Number :");
            //int EmpNumber = int.Parse(Console.ReadLine());
            int EmpNumber = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Employee Name :");
            string EmpName = Console.ReadLine();
            Console.Write("Enter Employee Salary :");
            decimal EmpSalary = decimal.Parse(Console.ReadLine());

            Console.WriteLine("Employee Number  :" + EmpNumber);
            Console.WriteLine("Employee Name    :{0}", EmpName);
            Console.WriteLine("Employee Salary  :" + EmpSalary);
        }
    }
}
