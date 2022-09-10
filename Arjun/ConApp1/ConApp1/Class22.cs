using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Car
    {
        private string _color = "Blue";

        public string Color
        {
            get { return _color; }
            set { _color = value; }
        }
    }
    internal class Class22
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("Car Color is :" + car.Color);  //get
            car.Color = "Green";        //set
            Console.WriteLine("Car Color is :" + car.Color);    //get

        }
    }
}