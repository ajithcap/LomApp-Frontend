// src/data/courses/pythonCourse.js
const pythonCourse = {
    id: 3,
    title: "Python for Beginners",
    description: "Learn Python programming from scratch, including data structures, OOP, and basic projects.",
    instructor: "Mike Johnson",
    duration: "10 weeks",
    fee: "₹6,500",
    mode: "Online",
    startDate: "2025-11-01",
    seats: 40,
    language: "English",
    certificate: true,
    rating: 4.7,
    syllabus: [
        {
            week: 1,
            contents: [
              {
                type: "video",
                title: "Introduction to Python",
                url: "https://www.youtube.com/embed/kqtD5dpn9C8"
              },
              {
                type: "text",
                title: "Setting up the Environment",
                body: "In this section, you will install Python, configure PATH, and set up your first project."
              },
              {
                type: "code",
                title: "Hello World Program",
                language: "python",
                code: `print("Hello, World!")`
              }
            ],
            quiz: [
              {
                question: "Which character is used for comments in Python?",
                options: ["#", "//", "/* */", "<!-- -->"],
                answer: "#"
              },
              {
                question: "Which keyword is used to define a function in Python?",
                options: ["func", "def", "function", "lambda"],
                answer: "def"
              }
            ],
            assessments: [
              {
                question: "Write a Python program that prints 'Hello World' and your name."
              }
            ]
          }
          ,
      {
        week: 2,
        topics: [
          "Variables and Dynamic Typing",
          "Numeric Data Types",
          "Basic Arithmetic Operations",
          "Boolean Type",
          "Type Conversion",
          "User Input",
          "Formatted Output"
        ],
        quiz: [
          {
            question: "Which function is used to get input from the user in Python?",
            options: ["input()", "scanf()", "cin", "read()"],
            answer: "input()"
          }
        ],
        assessments: [
          {
            question: "Write a program that asks user for age and prints if they are eligible to vote."
          }
        ]
      },
      {
        week: 3,
        topics: [
          "Introduction to Strings",
          "String Indexing and Slicing",
          "String Methods - Case and Alignment",
          "String Methods - Searching and Replacing",
          "Splitting and Joining Strings",
          "Escape Sequences"
        ],
        quiz: [
          {
            question: "Which method converts a string to uppercase?",
            options: [".upper()", ".capitalize()", ".title()", ".lower()"],
            answer: ".upper()"
          }
        ],
        assessments: [
          {
            question: "Write a program that reverses a string input by the user."
          }
        ]
      },
      {
        week: 4,
        topics: [
          "Boolean Logic and Operators",
          "The if Statement",
          "The if-elif-else Structure",
          "Nested if Statements",
          "Conditional Expressions (Ternary Operator)",
          "The while Loop",
          "Loop Control Statements"
        ],
        quiz: [
          {
            question: "Which keyword is used to exit a loop in Python?",
            options: ["break", "exit", "stop", "continue"],
            answer: "break"
          }
        ],
        assessments: [
          {
            question: "Write a program to find sum of all even numbers between 1 and 20."
          }
        ]
      },
      {
        week: 5,
        topics: [
          "Introduction to Lists",
          "List Indexing and Slicing",
          "Modifying Lists",
          "Removing Elements from Lists",
          "List Methods: Search and Utility",
          "The for Loop and Iteration",
          "The range() Function",
          "List Comprehensions"
        ],
        quiz: [
          {
            question: "Which method adds an element to the end of a list?",
            options: [".append()", ".insert()", ".add()", ".extend()"],
            answer: ".append()"
          }
        ],
        assessments: [
          {
            question: "Create a list of 5 numbers and print the squares of each using a loop."
          }
        ]
      },
      {
        week: 6,
        topics: [
          "Tuples",
          "Sets",
          "Set Operations",
          "Dictionaries - Fundamentals",
          "Dictionary Methods and Manipulation",
          "Iterating Over Dictionaries"
        ],
        quiz: [
          {
            question: "Which data structure is immutable?",
            options: ["Tuple", "List", "Set", "Dictionary"],
            answer: "Tuple"
          }
        ],
        assessments: [
          {
            question: "Create a dictionary of 3 students with marks, and print their names and marks."
          }
        ]
      },
      {
        week: 7,
        topics: [
          "Defining and Calling Functions",
          "Function Parameters and Arguments",
          "The return Statement",
          "Scope of Variables",
          "Default Arguments",
          "Arbitrary Arguments (*args, **kwargs)",
          "Docstrings and Type Hinting"
        ],
        quiz: [
          {
            question: "Which keyword defines a function in Python?",
            options: ["def", "function", "func", "lambda"],
            answer: "def"
          }
        ],
        assessments: [
          {
            question: "Write a function that returns the factorial of a number."
          }
        ]
      },
      {
        week: 8,
        topics: [
          "Introduction to Modules",
          "Using Built-in Modules",
          "Introduction to Packages",
          "File I/O - Reading Files",
          "File I/O - Writing Files",
          "The with Statement for Files"
        ],
        quiz: [
          {
            question: "Which statement ensures a file is automatically closed?",
            options: ["with open(...)", "try...finally", "close()", "file.close()"],
            answer: "with open(...)"
          }
        ],
        assessments: [
          {
            question: "Write a program to read a file and count number of lines and words."
          }
        ]
      },
      {
        week: 9,
        topics: [
          "Understanding Errors and Exceptions",
          "The try-except Block",
          "The else and finally Blocks",
          "Raising Exceptions",
          "Introduction to Classes and Objects",
          "The Constructor (__init__) and self",
          "Methods and Attributes"
        ],
        quiz: [
          {
            question: "Which block executes only if no exception occurs?",
            options: ["else", "finally", "except", "try"],
            answer: "else"
          }
        ],
        assessments: [
          {
            question: "Define a class 'Car' with attributes model and year, and a method to display them."
          }
        ]
      },
      {
        week: 10,
        topics: [
          "Project: Simple Command-Line Application",
          "Virtual Environments",
          "Introducing the Python Ecosystem",
          "Where to Go Next",
          "Best Practices and Pythonic Code"
        ],
        quiz: [
          {
            question: "Which tool is commonly used to create isolated Python environments?",
            options: ["venv", "virtualenv", "conda", "All of the above"],
            answer: "All of the above"
          }
        ],
        assessments: [
          {
            question: "Build a command-line To-Do List Manager that allows adding, listing, and removing tasks."
          }
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80"
  };
  
  export default pythonCourse;
  