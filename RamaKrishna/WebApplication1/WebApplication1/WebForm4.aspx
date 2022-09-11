<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm4.aspx.cs" Inherits="WebApplication1.WebForm4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" Width="591px">
                <Columns>
                    <asp:BoundField DataField="empId" HeaderText="empId" SortExpression="empId" />
                    <asp:BoundField DataField="ename" HeaderText="ename" SortExpression="ename" />
                    <asp:BoundField DataField="esalary" HeaderText="esalary" SortExpression="esalary" />
                    <asp:BoundField DataField="eaddress" HeaderText="eaddress" SortExpression="eaddress" />
                </Columns>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:snadDBConnectionString2 %>" SelectCommand="SELECT * FROM [emp]"></asp:SqlDataSource>
        </div>
    </form>
</body>
</html>
