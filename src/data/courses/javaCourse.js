// src/data/courses/javaCourse.js
const javaCourse = {
    id: 2,
    title: "Java Fundamentals",
    description: "Master core Java concepts including OOP, Collections, and advanced topics.",
    instructor: "Jane Smith",
    duration: "11 weeks",
    fee: "₹7,000",
    mode: "Offline",
    startDate: "2025-09-15",
    seats: 24,
    language: "English",
    certificate: true,
    rating: 4.4,
    syllabus: [
      {
        week: 1,
        topics: [
          "Introduction to Programming and Java",
          "JVM, JRE, and JDK",
          "Setting up the Development Environment",
          "Hello World program",
          "Basic syntax, comments, identifiers"
        ],
        quiz: [
          {
            question: "Which of these is used to print output in Java?",
            options: ["System.out.println()", "print()", "echo()", "Console.write()"],
            answer: "System.out.println()"
          },
          {
            question: "Which company originally developed Java?",
            options: ["Sun Microsystems", "Oracle", "Microsoft", "IBM"],
            answer: "Sun Microsystems"
          }
        ],
        assessments: [
          { question: "Write a Java program that prints your name and age." },
          { question: "Modify the program to take name and age as input from user." }
        ]
      },
      {
        week: 2,
        topics: [
          "Primitive Data Types - Integers",
          "Primitive Data Types - Floating Points",
          "Primitive Data Types - Characters and Booleans",
          "Variables and Initialization",
          "Type Conversion and Casting"
        ],
        quiz: [
          {
            question: "Which keyword defines a constant in Java?",
            options: ["final", "const", "static", "immutable"],
            answer: "final"
          }
        ],
        assessments: [
          { question: "Declare variables of all primitive types and print their default values." }
        ]
      },
      {
        week: 3,
        topics: [
          "Arithmetic Operators",
          "Relational and Logical Operators",
          "Bitwise Operators",
          "Operator Precedence and Associativity"
        ],
        quiz: [
          {
            question: "What is the output of 5 + 3 * 2?",
            options: ["16", "11", "10", "13"],
            answer: "11"
          }
        ],
        assessments: [
          { question: "Write a program to demonstrate increment and decrement operators." }
        ]
      },
      {
        week: 4,
        topics: [
          "The if-else Construct",
          "The switch Statement",
          "while, do-while, for, and enhanced for loops",
          "Control Flow Jumps: break, continue"
        ],
        quiz: [
          {
            question: "Which loop executes at least once regardless of condition?",
            options: ["while", "do-while", "for", "enhanced for"],
            answer: "do-while"
          }
        ],
        assessments: [
          { question: "Write a program to calculate sum of first 10 natural numbers using a loop." }
        ]
      },
      {
        week: 5,
        topics: [
          "Introduction to Arrays",
          "Accessing and Manipulating Array Elements",
          "Multidimensional Arrays",
          "The String Class - Fundamentals",
          "The String Class - Comparison and Search",
          "Java Memory Model basics"
        ],
        quiz: [
          {
            question: "How do you declare a 2D array in Java?",
            options: ["int[][] arr;", "int arr[][];", "Both A and B", "None"],
            answer: "Both A and B"
          }
        ],
        assessments: [
          { question: "Write a program to store 5 student names in an array and print them." }
        ]
      },
      {
        week: 6,
        topics: [
          "Defining and Calling Methods",
          "Parameters and Arguments",
          "The return Statement",
          "Method Overloading",
          "Variable Arguments (Varargs)",
          "Scope and Life Cycle of Variables",
          "Introduction to Recursion"
        ],
        quiz: [
          {
            question: "Which allows a method to accept variable number of arguments?",
            options: ["varargs (...)", "params []", "ArrayList", "Object[]"],
            answer: "varargs (...)"
          }
        ],
        assessments: [
          { question: "Write a recursive method to compute factorial of a number." }
        ]
      },
      {
        week: 7,
        topics: [
          "OOP: Encapsulation, Inheritance, Abstraction, Polymorphism",
          "Defining a Class and Creating Objects",
          "Constructors and 'this' keyword",
          "Encapsulation and Access Modifiers",
          "Getters and Setters",
          "Static Members",
          "Garbage Collection Revisited"
        ],
        quiz: [
          {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["extends", "implements", "inherits", "super"],
            answer: "extends"
          }
        ],
        assessments: [
          { question: "Create a class 'Person' with fields name and age, add getters/setters and a constructor." }
        ]
      },
      {
        week: 8,
        topics: [
          "Abstract Classes and Methods",
          "Interfaces - Definition and Usage",
          "Interface Members",
          "Abstraction vs. Interface",
          "Packages and Importing",
          "Nested and Inner Classes"
        ],
        quiz: [
          {
            question: "Which keyword cannot be instantiated in Java?",
            options: ["abstract", "interface", "class", "final"],
            answer: "abstract"
          }
        ],
        assessments: [
          { question: "Define an abstract class 'Shape' and implement a subclass 'Circle'." }
        ]
      },
      {
        week: 9,
        topics: [
          "Introduction to Exception Handling",
          "Checked vs. Unchecked Exceptions",
          "The try-catch Block",
          "The finally Block",
          "The throws and throw Keywords",
          "Custom Exceptions",
          "Try-with-Resources"
        ],
        quiz: [
          {
            question: "Which of these is a checked exception?",
            options: ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
            answer: "IOException"
          }
        ],
        assessments: [
          { question: "Write a program to read a file and handle possible IOException." }
        ]
      },
      {
        week: 10,
        topics: [
          "Java Collections Framework",
          "Generics",
          "The List Interface and ArrayList",
          "The Set Interface and HashSet",
          "The Map Interface and HashMap",
          "Iterators",
          "Utility Classes"
        ],
        quiz: [
          {
            question: "Which collection allows duplicate elements?",
            options: ["List", "Set", "Map", "None"],
            answer: "List"
          }
        ],
        assessments: [
          { question: "Create an ArrayList of strings, add 5 items, and print them." }
        ]
      },
      {
        week: 11,
        topics: [
          "Wrapper Classes and Autoboxing/Unboxing",
          "Date and Time API (java.time)",
          "File I/O Basics",
          "Introduction to Streams (Java 8)",
          "Debugging in IDE",
          "Project: Simple Console Application",
          "Next Steps in Java"
        ],
        quiz: [
          {
            question: "Which class is used for date/time in Java 8+?",
            options: ["LocalDate", "Date", "Calendar", "Time"],
            answer: "LocalDate"
          }
        ],
        assessments: [
          { question: "Build a simple console-based calculator supporting +, -, *, /." }
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1350&q=80"
  };
  
  export default javaCourse;
  