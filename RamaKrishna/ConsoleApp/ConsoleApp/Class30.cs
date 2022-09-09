using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Collections;

namespace ConsoleApp
{
    internal class Class30
    {
        static void Main(string[] args)
        {
            ArrayList arrayList = new ArrayList();
            arrayList.Add(10);
            arrayList.Add(20);
            arrayList.Add("Sathesh");
            arrayList.Add(true);
            arrayList.Insert(2, 100);
            arrayList.Insert(5, 30);
            arrayList.Add(40);

            //arrayList.Remove(30);
            arrayList.RemoveAt(2);

            Console.WriteLine("The ArrayList Elements are....");
            foreach (var item in arrayList)
            {
                Console.Write(item + "\t");
            }
            Console.WriteLine("\nArraList Size is {0}", arrayList.Count);

            Stack stack = new Stack();
            stack.Push(10);
            stack.Push("Sathesh");
            Console.WriteLine("\nThe Stack Elements are....");
            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.Pop());

            Stack<int> stack1 = new Stack<int>();
            stack1.Push(100);
            stack1.Push(200);
            Console.WriteLine("\nThe Stack Elements are....");
            Console.WriteLine(stack1.Pop());
            Console.WriteLine(stack1.Pop());

            Queue queue = new Queue();
            queue.Enqueue(100);
            queue.Enqueue("abc");
            Console.WriteLine("\nThe Queue Elements are....");
            Console.WriteLine(queue.Dequeue());
            Console.WriteLine(queue.Dequeue());

            Queue<string> queue1 = new Queue<string>();
            queue1.Enqueue("Sathesh");
            queue1.Enqueue("Hyderabad");
            Console.WriteLine("\nThe Queue Elements are....");
            Console.WriteLine(queue1.Dequeue());
            Console.WriteLine(queue1.Dequeue());

            Hashtable hashtable = new Hashtable();
            hashtable.Add("a", "Sathesh");
            hashtable.Add("b", "Hyderabad");

            Console.WriteLine("\nThe Hash Table Elements are...");
            foreach (DictionaryEntry de in hashtable)
            {
                Console.WriteLine(de.Key + "-->" + de.Value);
            }

            Dictionary<int, string> keyValuePairs = new Dictionary<int, string>();
            keyValuePairs.Add(1, "Success");
            keyValuePairs.Add(2, "Fail");
            Console.WriteLine("\nThe Dictionary Values are....");
            var keys = keyValuePairs.Keys;
            foreach (var item in keys)
            {
                Console.Write(item + "\t");
            }

            List<int> list = new List<int>();
            list.Add(10);
            list.Add(30);
            list.Add(50);
            list.Add(40);
            list.Add(20);

            list.Sort();

            Console.WriteLine("\nThe List Elements are.....");
            foreach (int li in list)
            {
                Console.Write(li + "\t");
            }

            Console.WriteLine("\nSum of Elements is :" + list.Sum());
            Console.WriteLine("Maximum Element is :" + list.Max());

            List<Customer> customers = new List<Customer>();
            //customers.Add(new Customer() {Id=101,Name="Sathesh", Amount=65000 });
            Customer customer = new Customer()
            {
                Id = 101,
                Name = "Sathesh",
                Amount = 6500
            };
            customers.Add(customer);

            customer = new Customer();
            customer.Id = 102;
            customer.Name = "Krishna";
            customer.Amount = 4500;
            customers.Add(customer);

            customer = new Customer()
            {
                Id = 103,
                Name = "Rama",
                Amount = 15000
            };
            customers.Add(customer);
            Console.WriteLine("\nThe Customers List is......");
            foreach (Customer cust in customers)
            {
                Console.WriteLine(cust.Id + "\t" + cust.Name + "\t" + cust.Amount);
            }
        }
    }

    class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Amount { get; set; }
    }
}
