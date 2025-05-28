import java.lang.reflect.Method;

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("SampleClass");
        Object obj = clazz.getDeclaredConstructor().newInstance();

        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("Method: " + method.getName());
            method.invoke(obj);
        }
    }
}

class SampleClass {
    public void sayHello() {
        System.out.println("Hello via Reflection!");
    }
}
