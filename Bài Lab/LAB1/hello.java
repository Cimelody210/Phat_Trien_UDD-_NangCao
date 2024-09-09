import java.util.Scanner;

public class hello {
    public static void main(String[] args) {
      
      @SuppressWarnings("resource")
      Scanner scanner = new Scanner(System.in);
      System.out.print("Nhap ten cua ban: ");
      String ten = scanner.nextLine();

      System.out.print("Nhap tuoi cua ban: ");
      int tuoi = scanner.nextInt();
      if (tuoi > 0 && tuoi < 100) {
        System.out.println("Hop le");
        if((tuoi >= 14)&&(tuoi <=18)){
          System.out.println("Tre trau");
        }
        else {
          System.out.println("yehfhf");

        }
      }
      else{
        System.out.println("Invalid");
      }

      

      System.out.print("Nhap gioi tinh cua ban: ");
      String gioiTinh = scanner.next();

      System.out.print("Nhap so dien thoai cua ban: ");
      String soDienThoai = scanner.next();

      System.out.println("\nThong tin ban vua nhap:");
      System.out.println("\nHo va ten: " + ten);
      System.out.println("Tuoi: " + tuoi);
      System.out.println("Gioi tinh: " + gioiTinh);
      System.out.println("So dien thoai: " + soDienThoai);
    }
    
}
