using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    enum clrs
    {
        Red,
        Yellow,
        Green,
        Blue
    }
    class Car1
    {
        private string[] colors = new string[3];

        public string this[int x]
        {
            get { return colors[x]; }
            set { colors[x] = value; }
        }
    }
    internal class Class24
    {
        static void Main(string[] args)
        {
            Car1 car1 = new Car1();
            car1[0] = clrs.Yellow.ToString();
            car1[1] = clrs.Blue.ToString();
            car1[2] = clrs.Red.ToString();
            Console.WriteLine("Available Car Colors are....");
            for (int x = 0; x < 3; x++)
            {
                Console.WriteLine(car1[x]);
            }
        }
    }
}