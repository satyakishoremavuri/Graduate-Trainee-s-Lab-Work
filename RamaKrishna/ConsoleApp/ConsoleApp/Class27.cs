using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    //Exception Handling
    class MyException : Exception
    {
        string msg;
        public MyException()
        {
            msg = "Unknown Error";
        }
        public MyException(string m)
        {
            msg = m;
        }
        public override string Message => msg;
    }
    class MyClass
    {
        int a, b, c;
        public void GetData()
        {
            Console.Write("Enter a Value :");
            a = int.Parse(Console.ReadLine());
            Console.Write("Enter b Value :");
            b = int.Parse(Console.ReadLine());
        }
        public void Cal()
        {
            if (a == b)
                throw new MyException();
            else if (b > a)
                throw new MyException("Denominator is Big");
            else
                c = a / b;
        }
        public void Show()
        {
            Console.WriteLine("a Value is :" + a);
            Console.WriteLine("b Value is :" + b);
            Console.WriteLine("c Value is :" + c);
        }
    }
    internal class Class27
    {
        static void Main(string[] args)
        {
            MyClass myclass = new MyClass();
            try
            {
                try
                {
                    int[] x = new int[5];
                    x[13] = 100;
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                myclass.GetData();
                myclass.Cal();
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (OverflowException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch(MyException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                myclass.Show();
            }
            Console.WriteLine("End of Program");
        }
    }
}
