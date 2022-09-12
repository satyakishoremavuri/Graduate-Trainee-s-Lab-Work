using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication1
{
    public partial class WebForm5 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //OleDbConnection con = new OleDbConnection("provider=SQLOLEDB.1; initial catalog=snadDB ");
            // OleDbCommand cmd = new OleDbCommand("select * from emp",con);
            //OleDbDataAdapter da = new OleDbDataAdapter(cmd);
            //DataTable dt = new DataTable();

            SqlConnection con = new SqlConnection("Data Source=DESKTOP-6EOHVMA\\SQLEXPRESS;Initial Catalog=snadDB;Integrated Security=True");
            SqlCommand cmd = new SqlCommand("select * from emp",con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            da.Fill(dt);
            GridView1.DataSource = dt;
            GridView1.DataBind();


        }
    }
}