using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //abstract method and abstract class

    abstract class Employee
    {
        public int Bonus(int basic)
        {
            if (basic == 4500)
                return 400;
            else if (basic <= 10000)
                return 800;
            else
                return 1200;
        }
        abstract public int cal_bonus();
    }
    class Designer : Employee
    {
        int basic = 8500;
        public override int cal_bonus()
        {
            return Bonus(basic);
        }
    }
    class Analyst : Employee
    {
        int basic = 12500;
        public override int cal_bonus()
        {
            return Bonus(basic);
        }
    }
    internal class Class18
    {
        static void Main(string[] args)
        {
            Employee employee;

            employee = new Designer();
            Console.WriteLine("Designer Bobus is :" + employee.cal_bonus());

            employee = new Analyst();
            Console.WriteLine("Analyst Binus is :" + employee.cal_bonus());
        }
    }
}