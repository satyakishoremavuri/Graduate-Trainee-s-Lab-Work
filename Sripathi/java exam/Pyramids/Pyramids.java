public class Pyramids{

    public static void main(String[] args){
        for(int i=0; i <=16;i++){
            for (int j = 16;j >=i;j--){
                System.out.print(" ");
            }
            for (int k=0; k<= i; k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
