using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Heirarchichal Inheriatnce
    class Company
    {
        int Id;
        string name;
        public Company()
        {
            Id = 1;
            name = "BAJAJ";
        }
        public void ShowCompany()
        {
            Console.WriteLine("Company ID is  :" + Id);
            Console.WriteLine("Company Name is  :" + name);
        }
    }
    class Bike1 : Company
    {
        int cc;
        string bname;
        public Bike1()  
        {
            cc = 125;
            bname = "DISCOVER";
        }
        public void ShowBike1()
        {
            ShowCompany();
            Console.WriteLine("Bike1 CC is   :" + cc);
            Console.WriteLine("Bike1 Name is :" + bname);
        }
    }

    class Bike2 : Company
    {
        int cc;
        string bname;
        public Bike2()
        {
            cc = 150;
            bname = "PULSAR";
        }
        public void ShowBike2()
        {
            ShowCompany();
            Console.WriteLine("Bike2 CC is   :" + cc);
            Console.WriteLine("Bike2 Name is :" + bname);
        }
    }
    internal class Class17
    {
        static void Main(string[] args)
        {
            Bike1 bike1 = new Bike1();
            Bike2 bike2 = new Bike2();

            bike1.ShowBike1();
            Console.WriteLine();
            bike2.ShowBike2();
        }
    }
}
