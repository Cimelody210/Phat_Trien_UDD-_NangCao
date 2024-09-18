import java.util.Scanner;

// Lớp đại diện cho quân cờ
abstract class Piece {
    protected String color;

    public Piece(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public abstract boolean isValidMove(int startX, int startY, int endX, int endY);
}

// Lớp đại diện cho Vua
class King extends Piece {
    public King(String color) {
        super(color);
    }

    @Override
    public boolean isValidMove(int startX, int startY, int endX, int endY) {
        return Math.abs(startX - endX) <= 1 && Math.abs(startY - endY) <= 1;
    }
}

// Lớp đại diện cho Bảng Cờ
class Board {
    private Piece[][] board;

    public Board() {
        board = new Piece[8][8];
        setupBoard();
    }

    private void setupBoard() {
        board[0][4] = new King("White");
        board[7][4] = new King("Black");
    }

    public void display() {
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == null) {
                    System.out.print(". ");
                } else {
                    System.out.print(board[i][j].getColor().charAt(0) + " ");
                }
            }
            System.out.println();
        }
    }

    public boolean movePiece(int startX, int startY, int endX, int endY) {
        if (board[startX][startY] == null) {
            System.out.println("Không có quân cờ ở vị trí bắt đầu.");
            return false;
        }
        
        Piece piece = board[startX][startY];
        if (piece.isValidMove(startX, startY, endX, endY)) {
            board[endX][endY] = piece;
            board[startX][startY] = null;
            return true;
        } else {
            System.out.println("Di chuyển không hợp lệ.");
            return false;
        }
    }
}
// Lớp chính
public class CoVua {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Board board = new Board();

        while (true) {
            board.display();
            System.out.println("Nhập di chuyển (ví dụ: 0 4 1 4 để di chuyển từ (0,4) đến (1,4)) hoặc -1 để thoát:");

            String input = scanner.nextLine();
            if (input.equals("-1")) {
                break;
            }

            String[] parts = input.split(" ");
            if (parts.length == 4) {
                int startX = Integer.parseInt(parts[0]);
                int startY = Integer.parseInt(parts[1]);
                int endX = Integer.parseInt(parts[2]);
                int endY = Integer.parseInt(parts[3]);

                board.movePiece(startX, startY, endX, endY);
            } else {
                System.out.println("Vui lòng nhập đúng định dạng.");
            }
        }

        scanner.close();
    }
}
