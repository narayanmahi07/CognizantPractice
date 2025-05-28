public class PatternSwitchExample {
    public static void printType(Object obj) {
        if (obj == null) {
            System.out.println("Null object");
        } else if (obj instanceof Integer) {
            System.out.println("Integer: " + obj);
        } else if (obj instanceof String) {
            System.out.println("String: " + obj);
        } else if (obj instanceof Double) {
            System.out.println("Double: " + obj);
        } else {
            System.out.println("Unknown type");
        }
    }

    public static void main(String[] args) {
        printType(42);
        printType("Hello");
        printType(3.14);
        printType(null);
    }
}

