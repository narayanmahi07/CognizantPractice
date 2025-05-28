import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Apple", "Orange", "Banana", "Grape");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        list.forEach(System.out::println);
    }
}
