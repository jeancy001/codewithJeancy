import { Colors } from 'react-native/Libraries/NewAppScreen';

 const Cours = [
    {
      id: '1',
      name: 'Python',
      image:require('../../pages/cours/images/python.png'),
      background:Colors.primary,
      description:"Python is a versatile, high-level programming language known for its simplicity, readability, and ease of use, making it ideal for beginners and experts alike. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used in various fields, such as web development, data science, machine learning, automation, and more. Learning Python involves mastering its clean syntax, understanding core concepts like variables, loops, and functions, and exploring its extensive libraries for solving complex problems efficiently.",
      cours:[
        {
        summarize:"In your first Python lesson, you'll learn the basics of syntax and programming concepts. Start with understanding how to write and run simple Python scripts. Key topics include defining variables, using basic data types like strings, integers, and floats, and performing simple operations such as arithmetic and string manipulation. You'll also explore control flow with `if` statements and loops (`for` and `while`). This foundational knowledge sets the stage for more complex programming tasks and problem-solving.",
        title:"Hello, world",
        lessonOne:[
          "print('Hello, World!')\n",
          "Variable\n",
          "function",
          "Classes"
        ],
        variable:"name = 'Alice' age = 30"

        }
      ]
    },
    {
      id: '2',
      name: 'Java',
      image: require('../../pages/cours/images/java.png'),
      background:"#cd4502",
      description:"Java is a powerful, object-oriented programming language designed for flexibility and portability across platforms. Known for its write once, run anywhere capability, Java is widely used in web development, mobile applications (especially Android), enterprise systems, and cloud computing. Learning Java involves understanding its syntax, mastering object-oriented principles like inheritance and polymorphism, and working with its vast standard library. Beginners typically start with basic concepts such as variables, loops, and functions, then progress to more complex topics like multithreading and networking.",
      cours:[
        {
        summarize:"",
        lessonOne:"lesson"
        }
      ]
    },
    {
      id: '3',
      name: 'C',
      image: require('../../pages/cours/images/c.png'),
      background:"#767474",
      description:"C is a foundational, low-level programming language known for its efficiency and close interaction with hardware. It is widely used in system programming, embedded systems, and developing operating systems due to its performance and control over memory management. Learning C involves mastering its concise syntax, working with pointers, and understanding memory allocation. Beginners start with basic concepts like variables, loops, and functions, then advance to more complex topics such as data structures, file handling, and system-level programming, making C essential for understanding computer science fundamentals.",
      cours:[
        {
        summarize:"",
        lessonOne:"lesson"
        }
      ]
    },
    {
        id: '4',
        name: 'JavaScript',
        image: require('../../pages/cours/images/javaScript.png'),
        background:"#b4aa54",
        description:"JavaScript is a dynamic, high-level programming language primarily used for creating interactive web pages. It is an essential part of web development, enabling client-side scripting to enhance user interfaces and improve user experience. JavaScript is versatile, working alongside HTML and CSS, and is also used in backend development with frameworks like Node.js. Learning JavaScript involves mastering its syntax, understanding the Document Object Model (DOM), working with events, functions, and asynchronous programming, and exploring libraries and frameworks like React or Angular to build modern web applications.",
        cours:[
          {
          summarize:"",
          lessonOne:"lesson"
          }
        ]
      },
      {
        id: '5',
        name: 'Nodejs',
        image: require('../../pages/cours/images/node.png'),
        background:"#2c6449",
       description:"Node.js is a powerful, server-side runtime environment built on Chrome's V8 JavaScript engine. It enables developers to use JavaScript for backend development, allowing for a unified language across the entire web application stack. Node.js is known for its non-blocking, event-driven architecture, which makes it highly efficient for handling concurrent connections. Learning Node.js involves understanding its asynchronous programming model, working with modules, managing dependencies with npm, and building scalable applications using frameworks like Express. It's a key tool for modern web development.",
       cours:[
        {
        summarize:"",
        lessonOne:"lesson"
        }
      ]
      },
      {
        id: '6',
        name: 'React-native',
        image: require('../../pages/cours/images/react-native1.png'),
        background:Colors.primary ,
        description:"React Native is a popular open-source framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to create natively-rendered mobile apps for iOS and Android using a single codebase. React Native leverages native components, ensuring high performance and a native look and feel. Learning React Native involves mastering JavaScript, understanding React's component-based architecture, managing state and props, and working with APIs. Developers also learn to navigate, handle platform-specific code, and optimize app performance for different devices.",
        cours:[
          {
          summarize:"",
          lessonOne:"lesson"
          }
        ]
      },
      {
        id: '7',
        name: 'Reactjs',
        image: require('../../pages/cours/images/react-native.png'),
        background:Colors.primary,
        description:"React.js is a powerful JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It focuses on creating reusable UI components, allowing for efficient rendering and management of complex UIs. React uses a virtual DOM to optimize updates and improve performance. Learning React involves understanding its component-based architecture, mastering JSX (a syntax extension for JavaScript), managing state and props, handling events, and using hooks for functional components. React's ecosystem includes tools like Redux for state management and React Router for navigation.",
        cours:[
          {
          summarize:"",
          lessonOne:"lesson"
          }
        ]
      },
      {
        id: '8',
        name: 'C++',
        image: require('../../pages/cours/images/CPlus.png'),
        background:"#767474",
       description:"C++ is a versatile, high-performance programming language that extends C with object-oriented features, making it suitable for both system-level and application-level programming. It's widely used in software development, game development, real-time simulations, and systems programming due to its efficiency and control over system resources. Learning C++ involves mastering its syntax, understanding object-oriented principles like classes, inheritance, and polymorphism, and working with pointers and memory management. Developers also learn to use advanced features like templates, the Standard Template Library (STL), and multithreading, making C++ a powerful tool for complex applications.",
       cours:[
        {
        summarize:"",
        lessonOne:"lesson"
        }
      ]
      },
      {
        id: '9',
        name: 'Django',
        image: require('../../pages/cours/images/django.png'),
        background:Colors.primary,
        description:"Django is a high-level Python web framework designed for rapid development and clean, pragmatic design. It simplifies building complex, database-driven websites by providing built-in features like an ORM, admin interface, and authentication. Learning Django involves understanding Python programming, web development fundamentals, and Django-specific concepts such as models, views, templates, and URL routing. Beginners can start with tutorials and documentation, while more advanced users can explore its extensive features and third-party packages to build robust web applications.",
        cours:[
          {
          summarize:"",
          lessonOne:"lesson"
          }
        ]
      },
      {
        id: '10',
        name: '.Net',
        image: require('../../pages/cours/images/dotnet-logo.png'),
        background:"#c654d8",
        description:".NET is a versatile software framework developed by Microsoft that supports multiple languages, including C#, VB.NET, and F#. It enables developers to create a wide range of applications, from web and desktop to mobile and cloud-based solutions. Learning .NET involves mastering its languages, understanding the Common Language Runtime (CLR), and working with tools like Visual Studio. Beginners can start with basic programming concepts and gradually explore advanced topics such as ASP.NET for web development and Azure for cloud services.",
        cours:[
          {
          summarize:"",
          lessonOne:"lesson"
          }
        ]
      },
    // Add more items as needed
  ];
  export default Cours;