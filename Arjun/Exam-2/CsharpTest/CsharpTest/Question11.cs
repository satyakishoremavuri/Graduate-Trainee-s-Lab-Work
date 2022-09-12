using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpTest
{
    internal class Question11
    {
        static void Main(string[] args)
        {
            using (SqlConnection connection = new SqlConnection("Data Source=DESKTOP-6EOHVMA\\SQLEXPRESS;Initial Catalog=snadDB;Integrated Security=True"))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("SELECT * FROM emp", connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                Console.WriteLine(reader.GetValue(i));
                            }
                            Console.WriteLine();
                        }
                    }
                }
            }
        }
    }
}
    

