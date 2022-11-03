

class String{
    public static void main(String[] args) {
      java.lang.String s = "my name sripathi";

	      int len = s.length();
	      java.lang.String rev = "";

	      

	      for(int i = len-1;i>=0;i--){
	        rev = rev + s.charAt(i);
	       
	      }

	      System.out.println(rev);




    }
}


