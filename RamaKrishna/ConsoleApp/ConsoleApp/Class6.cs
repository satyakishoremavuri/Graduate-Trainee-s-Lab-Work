using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Class6 {
       




    



    
        static void Main(string[] args)
        {
            string str = "rAMAKRISHNA";
            if (str.Length == 0)

                Console.Write("Empty String");
            else if (str.Length == 1)

                Console.Write(char.ToUpper(str[0]));

            for (i = 0; i < str.Length; i++)
            {
                string new= str[i];
            }

              

            else

                string str1 = str.Substring(1);
                    Console.Write(char.ToUpper(str[0]) + char.ToLower(str.Substring(1)));
            
            

           
        }
    }
}
