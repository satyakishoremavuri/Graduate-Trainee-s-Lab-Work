public class Fibonacci{

    public static void main(String[] args){

        int s,a=1,b=1;

        s=0;

    

        while(s<=25){
            s = a+ b;
            System.out.print(s+"");
            a=b;
            b=s;
        }


    }

    
}