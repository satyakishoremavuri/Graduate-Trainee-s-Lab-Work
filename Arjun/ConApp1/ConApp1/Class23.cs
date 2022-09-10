using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Employee1
    {
        public int EmpId { get; set; }
        public string? EmpName { get; set; }
        public float EmpSalary { get; set; }
    }
    internal class Class23
    {
        static void Main(string[] args)
        {
            //Employee1 emp1 = new Employee1();
            //emp1.EmpId = 101;
            //emp1.EmpName = "Arjun";
            //emp1.EmpSalary = 21000;

            Employee1 emp1 = new Employee1()
            {
                EmpId = 1,
                EmpName = "Arjun",
                EmpSalary = 55000
            };

            Console.WriteLine("Employee ID is   :" + emp1.EmpId);
            Console.WriteLine("Employee Name    :" + emp1.EmpName);
            Console.WriteLine("Employee Salary  :" + emp1.EmpSalary);
        }
    }
}