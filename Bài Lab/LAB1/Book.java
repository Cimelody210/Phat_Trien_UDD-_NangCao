import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Lớp đại diện cho sách
class Book {
    private String title;
    private String author;
    private double price;

    // Constructor
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Getter
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Title: " + title + ", Author: " + author + ", Price: " + price;
    }
}

// Lớp đại diện cho cửa hàng sách
class BookStore {
    private List<Book> books;

    // Constructor
    public BookStore() {
        books = new ArrayList<>();
    }

    // Thêm sách vào cửa hàng
    public void addBook(Book book) {
        books.add(book);
    }

    // Hiển thị danh sách sách
    public void displayBooks() {
        for (int i = 0; i < books.size(); i++) {
            System.out.println((i + 1) + ". " + books.get(i));
        }
    }

    // Tính tổng giá trị sách
    public double totalValue() {
        double total = 0;
        for (Book book : books) {
            total += book.getPrice();
        }
        return total;
    }

    // Thanh toán
    public void checkout() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhập số tiền thanh toán: ");
        double amount = scanner.nextDouble();

        double total = totalValue();
        if (amount >= total) {
            System.out.println("Thanh toán thành công! Tổng giá: " + total);
            System.out.println("Thay đổi: " + (amount - total));
        } else {
            System.out.println("Số tiền không đủ để thanh toán. Tổng giá: " + total);
        }
    }
}

// Lớp chính
public class Book {
    public static void main(String[] args) {
        BookStore store = new BookStore();

        // Thêm sách vào cửa hàng
        store.addBook(new Book("Java Programming", "John Doe", 29.99));
        store.addBook(new Book("Effective Java", "Joshua Bloch", 35.99));
        store.addBook(new Book("Clean Code", "Robert C. Martin", 27.50));

        // Hiển thị danh sách sách
        System.out.println("Books in the store:");
        store.displayBooks();

        // Tính tổng giá trị sách
        System.out.println("Total value of books: " + store.totalValue());

        // Thanh toán
        store.checkout();
    }
}
