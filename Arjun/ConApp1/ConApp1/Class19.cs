using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    interface IInter
    {
        void GetData();
        void PutData();
    }
    class Inter : IInter
    {
        int Id;
        string? Name;
        public void GetData()
        {
            Id = 101;
            Name = "Arjun";
        }

        public void PutData()
        {
            Console.WriteLine("Id Number is {0}", Id);
            Console.WriteLine("Name is :" + Name);
        }
    }
    internal class Class19
    {
        static void Main(string[] args)
        {
            IInter inter = new Inter();
            inter.GetData();
            inter.PutData();
        }
    }
}