<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script>
        function show() {
            alert("this is client side button");
        }
    </script>
    <style>
     .gis{
         color:white;
         background-color:maroon;
         font-family:Calibri;
         font-size:16pt;
         font-weight:bold;
     }
        #Button2 {
            width: 95px;
        }
    </style>
      
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="Button1" runat="server" Text="Click Me" OnClick="Button1_Click" Height="26px" CssClass="gis" />
        
        <br />
           <br />
        <input id="Button2" type="button"  value="Click Me" onclick="show() " class="gis" />

            </div>
        
    </form>
 
    <p>
&nbsp;</p>
 
</body>
</html>
