using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //User Defined Generic Class
    class GenericClass<T>
    {
        T a;
        public void GetData(T x)
        {
            a = x;
        }
        public void PutData()
        {
            Console.WriteLine("a Value is :" + a);
        }
    }
    internal class Class31
    {
        static void Main(string [] args)
        {
            GenericClass<int> genericClass = new GenericClass<int>();
            GenericClass<string> genericClass1 = new GenericClass<string>();

            genericClass.GetData(10);
            genericClass1.GetData("Sathesh");

            genericClass.PutData();
            genericClass1.PutData();
        }
    }
}
