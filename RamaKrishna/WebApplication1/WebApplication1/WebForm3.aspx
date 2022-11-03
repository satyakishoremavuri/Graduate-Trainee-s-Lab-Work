<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="WebApplication1.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 719px;
            height: 369px;
        }
        .auto-style7 {
            height: 23px;
            width: 125px;
        }
        .auto-style9 {
            height: 85px;
            width: 125px;
        }
        .auto-style13 {
            height: 101px;
            width: 125px;
        }
        .auto-style15 {
            height: 101px;
            width: 128px;
        }
        .auto-style16 {
            height: 85px;
            width: 128px;
        }
        .auto-style17 {
            height: 23px;
            width: 128px;
        }
        .auto-style18 {
            height: 101px;
            width: 133px;
        }
        .auto-style19 {
            height: 85px;
            width: 133px;
        }
        .auto-style20 {
            height: 23px;
            width: 133px;
        }
        .auto-style23 {
            width: 100%;
            height: 110px;
        }
        .auto-style24 {
            width: 270px;
        }
        .auto-style25 {
            width: 207px;
        }
        .auto-style26 {
            width: 100%;
            height: 123px;
        }
        .auto-style27 {
            height: 23px;
        }
        .auto-style28 {
            height: 23px;
            width: 229px;
        }
        .auto-style29 {
            height: 23px;
            width: 250px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="auto-style1">
                <tr>
                    <td class="auto-style13">&nbsp;&nbsp;select any item</td>
                    <td class="auto-style18">
                        <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged">
                            <asp:ListItem>Bananas</asp:ListItem>
                            <asp:ListItem>Apples</asp:ListItem>
                            <asp:ListItem>Grapes</asp:ListItem>
                        </asp:ListBox>
                    </td>
                    <td class="auto-style15">
                        <asp:Label ID="Label1" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style9">select any item</td>
                    <td class="auto-style19">
                        <asp:CheckBoxList ID="CheckBoxList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="CheckBoxList1_SelectedIndexChanged">
                            <asp:ListItem>Apple</asp:ListItem>
                            <asp:ListItem>Grapes</asp:ListItem>
                            <asp:ListItem>Bananas</asp:ListItem>
                            <asp:ListItem>Oranges</asp:ListItem>
                            <asp:ListItem>Pappayas</asp:ListItem>
                        </asp:CheckBoxList>
                    </td>
                    <td class="auto-style16">
                        <asp:Label ID="Label2" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style7">Gender</td>
                    <td class="auto-style20">
                        <asp:RadioButton ID="RadioButton1" runat="server" AutoPostBack="True" GroupName="gender" OnCheckedChanged="RadioButton1_CheckedChanged" Text="Male" />
&nbsp;&nbsp;
                        <asp:RadioButton ID="RadioButton2" runat="server" AutoPostBack="True" GroupName="gender" OnCheckedChanged="RadioButton2_CheckedChanged" Text="Female" />
                    </td>
                    <td class="auto-style17">
                        <asp:Label ID="Label3" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
            <table class="auto-style26">
                <tr>
                    <td class="auto-style28">select your branch</td>
                    <td class="auto-style29">
                        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                            <asp:ListItem>Computers</asp:ListItem>
                            <asp:ListItem>Mechanical</asp:ListItem>
                            <asp:ListItem>Civil</asp:ListItem>
                            <asp:ListItem>IT</asp:ListItem>
                            <asp:ListItem>Electronic</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                    <td class="auto-style27">
                        <asp:Label ID="Label5" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
        <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <table class="auto-style23">
                <tr>
                    <td class="auto-style24">select your branch</td>
                    <td class="auto-style25">
                        <asp:RadioButtonList ID="RadioButtonList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged">
                            <asp:ListItem>Computers</asp:ListItem>
                            <asp:ListItem>Electronics</asp:ListItem>
                            <asp:ListItem>Mechanical</asp:ListItem>
                            <asp:ListItem>Civil</asp:ListItem>
                            <asp:ListItem>IT</asp:ListItem>
                        </asp:RadioButtonList>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                    <td>
                        <asp:Label ID="Lable4" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </p>
    </form>
</body>
</html>
