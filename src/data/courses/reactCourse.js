// src/data/courses/reactCourse.js
const reactCourse = {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React.js and build your first app.",
    instructor: "John Doe",
    duration: "6 weeks",
    fee: "₹5,000",
    mode: "Online",
    startDate: "2025-10-01",
    seats: 30,
    language: "English",
    certificate: true,
    rating: 4.6,
    syllabus: [
      {
        week: 1,
        topics: ["Project setup", "JSX & Components"],
        quiz: [
          {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "Java Syntax Extension", "JSX Format", "None"],
            answer: "JavaScript XML"
          },
          {
            question: "Which command creates a new React app using Create React App?",
            options: ["npx create-react-app myapp", "npm new react myapp", "npx react new myapp", "npm create react-app myapp"],
            answer: "npx create-react-app myapp"
          }
        ],
        assessments: [
          { question: "Create a simple React component that displays 'Hello React'." },
          { question: "Set up a new React project using Create React App and run it locally." }
        ]
      },
      {
        week: 2,
        topics: ["Props & State", "Event handling"],
        quiz: [
          {
            question: "Which hook is used to manage state in functional components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useState"
          },
          {
            question: "Props in React are:",
            options: ["Mutable", "Immutable", "Global variables", "Part of Redux"],
            answer: "Immutable"
          }
        ],
        assessments: [
          { question: "Create a component that takes 'name' as a prop and displays a greeting." },
          { question: "Build a counter app using useState that increments/decrements on button clicks." }
        ]
      },
      {
        week: 3,
        topics: ["Hooks (useState, useEffect)"],
        quiz: [
          {
            question: "Which hook is used to perform side effects in React?",
            options: ["useState", "useEffect", "useMemo", "useReducer"],
            answer: "useEffect"
          },
          {
            question: "When does useEffect with an empty dependency array [] run?",
            options: ["Every render", "Only once after initial render", "Only when state changes", "Never"],
            answer: "Only once after initial render"
          }
        ],
        assessments: [
          { question: "Build a component that fetches user data from an API using useEffect and displays it." },
          { question: "Create a timer that updates every second using useEffect and useState." }
        ]
      },
      {
        week: 4,
        topics: ["Routing & API calls"],
        quiz: [
          {
            question: "Which library is most commonly used for routing in React?",
            options: ["react-router-dom", "next/router", "redux-router", "router-js"],
            answer: "react-router-dom"
          },
          {
            question: "Which hook is used to get route parameters in React Router v6?",
            options: ["useParams", "useRoute", "useLocation", "useNavigate"],
            answer: "useParams"
          }
        ],
        assessments: [
          { question: "Set up React Router with two pages: Home and About." },
          { question: "Create a simple component that fetches and displays posts from JSONPlaceholder API." }
        ]
      },
      {
        week: 5,
        topics: ["Forms & Controlled Inputs"],
        quiz: [
          {
            question: "What makes a form element 'controlled' in React?",
            options: ["It uses local state", "It uses Redux", "Its value is controlled by React state", "It is read-only"],
            answer: "Its value is controlled by React state"
          },
          {
            question: "Which event handler is commonly used to update input state in React?",
            options: ["onChange", "onInput", "onUpdate", "onModify"],
            answer: "onChange"
          }
        ],
        assessments: [
          { question: "Build a login form with email and password fields as controlled inputs." },
          { question: "Add validation to the form that prevents submission if fields are empty." }
        ]
      },
      {
        week: 6,
        topics: ["Project work & Deployment"],
        quiz: [
          {
            question: "Which service is commonly used to deploy React apps?",
            options: ["Netlify", "Vercel", "GitHub Pages", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Which build command prepares a React app for production?",
            options: ["npm start", "npm run build", "npm deploy", "npm production"],
            answer: "npm run build"
          }
        ],
        assessments: [
          { question: "Build a small React app (e.g., Todo app or Weather app)." },
          { question: "Deploy your React project to Netlify or Vercel and share the link." }
        ]
      }
    ],
    image: "/pictures/react.png"
  };
  
  export default reactCourse;
  