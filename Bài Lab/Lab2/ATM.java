import java.util.Scanner;

public class ATM {
    @SuppressWarnings("unused")
    public static void main(String[] args) {
        
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);
    
        System.out.println("========================= Lab2 ============================ ");
        System.out.println("hfdhdhghbhf");
        System.out.println("32774gjjh");
        
        System.out.println("32774gjjh");
        System.out.println("32774gjjh");
        System.out.println("32774gjjh");
        View.Menu();
        
    }
    public class AccountModel{
        private int accountNumber;
        private String Fullname;
        private String password;
        private int pin;
        private float amount;

        // Contrustor
        public AccountModel(int stk, String name, String matkhau, int pin, float amount){
            this.accountNumber = stk;
            this.Fullname = name;
            this.password = matkhau;
            this.pin  = pin;
            this.amount  = amount;
        }
        @Override
        public String toString() {
            return String.format("ID: %d, Username: %s, Password: %s, Balance: %d", accountNumber, Fullname, password, pin, amount);
        }
        // Get-set cho so tai khoan
        public int getAccountNumber() {
            return accountNumber;
        }
        public void setAccountNumber(int accountNumber) {
            this.accountNumber = accountNumber;
        }
        // Get-set cho name
        public String getFullname(){
            return this.Fullname;
            
        }
        public void setFullname(String Fullname){
            this.Fullname =  Fullname;
        }

        //Pass
        public String getPassword(){
            return this.password;
        }
        public void setPassword(String pass){
            this.password = pass;
        }

        //PIN
        public int getPIN(){
            return this.pin;
        }
        public void setPIN(int pin){
            this.pin = pin;
        }
        
        //amount
        public int getAmount(){
            return (int) this.amount;

        }
        public void SetAmount(int amount){
            this.amount = amount;
        }
        //Check Login
        public boolean checkLogin(int acc1, String pass) {
            // Kiem tra login voi tai khoan nay  
            return acc1 == accountNumber && pass.equals(password);
        }

        public void checkAmount() {
            System.out.println("Số dư tài khoản là: " + amount);
        }

    }
    public class View {

        public void Menu(){
            // Gan tai khoan moi
            // AccountModel acc1 =  new AccountModel(126353, "Nguyen Tin", "modinhacon", 1945, 100000);
            AccountModel acc2 =  new AccountModel(126353, "Nguyen Trung Tin", "987654321", 1975, 100000);
            Scanner menu  = new Scanner(System.in);
            try (menu) {
                String choice = "y";
                while(choice.equalsIgnoreCase("y")){
                    System.out.println("Menu:");
                    System.out.println("1. Dang nhap");
                    System.out.println("2. Hiển thị thông tin cac tai khoan");
                    System.out.println("3. Thoát");
                    int menu_item = menu.nextInt();
                    switch (menu_item) {
                        case 1 -> {
                            // Login

                            if(Controller.login(acc2)){
                                System.out.println("Dang nhap thanh cong");
                            }
                            else{
                                System.out.println("Vui long dang nhap lai");
                            }
                        }
                        case 2 -> {
                            System.out.println("Thong tin cac tai khoan\n");
                            // Coi voi acc2
                            Controller.SeeInfo(acc2);
                        }
                    
                        default -> {
                        }
                    }
                }
                // Tạo menu hoặc các hành động khác tại đây
            } catch (Exception e) {
            }
           
            
        }

    }
    public class Controller{
        public static boolean login(AccountModel acc) {
            // Yeu cau nguoi dung nhap du lieu
            @SuppressWarnings("resource")
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter your account number:");
            
            int accNo = sc.nextInt();
            System.out.print("Enter your password:");
            String pass = sc.next();
            //Kiem tra doi chieu tai khoan va mat khau
            return acc.checkLogin(accNo, pass);
        }
        public static void SeeInfo(AccountModel acc){
            System.out.println("So tai khoan la" + acc.getAccountNumber());
            System.out.println("Ho ten cua khach hang: " + acc.getFullname());
            System.out.println("Ho ten cua khach hang: " + acc.getPIN());
            System.out.println("Ho ten cua khach hang: " + acc.getAmount());
        }
    }
    
    
}
