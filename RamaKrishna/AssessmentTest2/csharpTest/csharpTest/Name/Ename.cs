using csharpTest.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;


namespace csharpTest.Name
{
    internal class Ename
    {
        private string _connectionString;
        public Ename(IConfiguration iconfiguration)
        {
            _connectionString = iconfiguration.GetConnectionString("Default");
        }
        public List<Emodel> GetList()
        {
            var listCountryModel = new List<Emodel>();
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    SqlCommand cmd = new SqlCommand("emp_data", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        listCountryModel.Add(new Emodel
                        {
                            empId = Convert.ToInt32(rdr[0]),
                            ename = rdr[1].ToString(),
                           
                            esalary= Convert.ToInt32(rdr[2]),
                            eaddress= rdr[3].ToString(),
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return listCountryModel;
        }
    }
}
