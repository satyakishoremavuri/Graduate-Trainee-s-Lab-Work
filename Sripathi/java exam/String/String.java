public class String{
    public static void main(String[] args){
        java.lang.String str = "My Nmae Is Sripathi";

        String a[] = str.split(" ");

        for(int i=a.length-1;i>=0;i--){
            System.out.print(a[i]+" ");
        }
    }
}