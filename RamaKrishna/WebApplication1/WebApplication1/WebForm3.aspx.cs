using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            Label1.Text = ListBox1.SelectedItem.Text;
        }

        protected void CheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            String fruits = " ";
            for(int i=0;i<CheckBoxList1.Items.Count;i++)
            {
                if (CheckBoxList1.Items[i].Selected)
                {
                    fruits = fruits + CheckBoxList1.Items[i].Text+",";
                }
            
           }
            fruits = fruits.Substring(0, fruits.Length - 1);
            Label2.Text = fruits;
        } 

        protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
        {
            if (RadioButton1.Checked)
                Label3.Text = RadioButton1.Text;
            
        }

        protected void RadioButton2_CheckedChanged(object sender, EventArgs e)
        {
            if (RadioButton2.Checked)
                Label3.Text = RadioButton2.Text;
        }

        protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            Lable4.Text = RadioButtonList1.SelectedItem.Text;
        }

        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            Label5.Text = DropDownList1.SelectedItem.Text;
        }
    }
}