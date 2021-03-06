## 什么是方法

* Java方法是语句的集合，他们在一起执行一个功能

  * 方法是解决一类问题的步骤的有序组合
  * 方法包含在类或对象中
  * 方法在程序中被创建，在其他地方被引用

* 设计方法的原则

  * 方法的本意是功能块，就是实现某个功能的语句块的集合。我们设计方法的时候，最好保持方法的原子性，==即一个方法只完成一个功能，这样有利于我们后期的拓展==

    

## 方法的定义和调用

### 定义

* Java的方法类似于其他语言的函数，是一段用来完成特定功能的代码片段。
* 方法包含一个方法头和一个方法体
  * 修饰符：告诉编译器如何调用该方法，定义了方法的访问类型
  * 返回值类型：定义returnValueType
  * 方法名：方法的实际签名，方法名和参数表共同构成方法签名
  * 参数类型：参数像是一个占位符，当方法被调用时，传递值给参数，这个值被成为实参或变量。参数列表是指方法的参数类型、顺序和参数的个数。参数是可选的，方法可以不包含任何参数
    * 形参：在方法被调用时用于接收外接输入的数据
    * 实参：调用方法时实际传给方法的数据
  * 方法体：方法体包含具体的语句，定义该方法的功能

### 调用

* 调用方法：对象名.方法名(实例参数)

* Java支持两种调用方法的方式，根据方法是否返回值来选择

* 当方法返回一个值的时候，方法调用通常被当做一个值

  ```java
  int larger = max(30,40)
  ```

* 如果方法返回值是`void`，方法调用一定是一条语句

  ```java
  System.out.println("Hello,world!")
  ```

  



## 方法的重载

* 重载就是在一个类中，有相同的函数名称，但形参不同的函数
* 方法的重载规则
  * 方法名称必须相同
  * 参数列表必须不同(个数不同、或类型不同、或参数排列顺序不同)
  * 方法的返回类型可以相同也可以不同
  * 仅仅返回类型不同不足以成为方法的重载
* 实现理论
  * 方法名相同时，编译器会根据调用方法的参数个数、参数类型等逐个匹配，以选择对应的方法，如果匹配失败，则编译器报错

## 命令行传递参数

* 有时候你希望运行一个程序时再传递给它消息。这要靠传递命令行参数给`main()`函数实现

  ```java
  public class CommandLine{
    public static void main(String args[]){
      for(int i=0;i<args.length;i++){
        System.out.println(args[i])
      }
    }
  }
  ```

  

## 可变参数

* JDK1.5开始，Java支持传递同类型的可变参数给一个方法

* 在方法声明中，在指定参数类型后加一个省略号(...)

* 在一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数必须在它之前声明

  ```java
  public static void printMax(double... numbers){
    if (numbers.length == 0){
      System.out.println("No argument passed");
      return;
    }
    
    double result = numbers[0];
    
    for (int i=1;i<numbers.length;i++){
      if (numbers[i]>result){
        result = numbers[i];
      }
    }
    System.out.println("The max value is"+result);
  }
  ```

  

## 递归讲解

* A方法调用B方法，我们很容易理解
* 递归就是A方法调用A方法，自己调用自己
* 利用递归可以用简单的程序来解决一些复杂的问题。它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归策略只需少量的程序就可描述出结题过程所需要的多次重复计算，大大低减少程序的代码量。递归的能力在于用有限的语句来定义对象的无限集合
* 递归结构包括俩部分
  * 递归头：什么时候不调用自身方法。如果没有头，将陷入死循环
  * 递归体：什么时候需要调用自身方法





