using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data.OleDb;
using System.Data;

using System.Data.SqlClient;
using System.Configuration;

namespace WebApp1
{
    public partial class WebForm5 : System.Web.UI.Page
    {


        private void LoadData()
        {

            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();

            con.ConnectionString = "Data Source=SUSMITHASQLEXPRESS; user id=sai; password=Sai; initial catalog=Snad";
            con.ConnectionString = ConfigurationManager.AppSettings["con"];
            con.ConnectionString = ConfigurationManager.ConnectionStrings["con"].ConnectionString;
            cmd.CommandText = "select * from Table_1";
            cmd.Connection = con;
            da.SelectCommand = cmd;

            DataTable dt = new DataTable();

            da.Fill(dt);
            GridView1.DataSource = dt;
            GridView1.DataBind();
        }


    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        string st = "insert into Table_1 values('" + TextBox1.Text + "'," + TextBox2.Text + "," + TextBox1.Text + ")";
        SqlCommand cmd = new SqlCommand(st, con);
        const.open();
        cmd.ExecuteNonQuery();
        const.close();
        Response.Write("<script>alert('Record Added')</script>");
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";

    }
}
