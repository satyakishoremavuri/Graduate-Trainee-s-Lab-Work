using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Box
    {
        int length, breadth, height;
        public Box()
        {
            length = 5;
            breadth = 10;
            height = 15;
        }
        public Box(int length)
        {
            this.length = length;
            breadth = 15;
            height = 20;
        }
        public Box(int l, int b)
        {
            length = l;
            breadth = b;
            height = 25;
        }
        public Box(int l, int b, int h)
        {
            length = l;
            breadth = b;
            height = h;
        }
        public int volume()
        {
            return length * breadth * height;
        }
    }
    internal class Class14
    {
        static void Main(string[] args)
        {
            Box box = new Box();
            Box box1 = new Box(10);
            Box box2 = new Box(20, 30);
            Box box3 = new Box(20, 30, 40);

            Console.WriteLine("Box1 Volume is :" + box.volume());
            Console.WriteLine("Box2 Volume is :" + box1.volume());
            Console.WriteLine("Box3 Volume is :" + box2.volume());
            Console.WriteLine("Box4 Volume is :" + box3.volume());
        }
    }
}