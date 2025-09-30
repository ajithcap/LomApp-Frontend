// src/data/courses.js
// Expanded course objects with additional fields:
// - mode, startDate, seats, language, certificate, rating, reviews
// - prerequisites, learningOutcomes, syllabus (week -> topics)
// Keep images in public/pictures/ or use remote URLs.

const courses = [
  {
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
    reviews: [
      { user: "Anu", comment: "Great hands-on course.", rating: 5 },
      { user: "Ravi", comment: "Well-structured and practical.", rating: 4 }
    ],
    prerequisites: ["Basic HTML", "Basic JavaScript"],
    learningOutcomes: [
      "Build React components",
      "Manage component state",
      "Use hooks (useState, useEffect)",
      "Build and deploy a small React app"
    ],
    syllabus: [
      { week: 1, topics: ["Project setup", "JSX & Components"] },
      { week: 2, topics: ["Props & State", "Event handling"] },
      { week: 3, topics: ["Hooks (useState, useEffect)"] },
      { week: 4, topics: ["Routing & API calls"] },
      { week: 5, topics: ["Forms & Controlled Inputs"] },
      { week: 6, topics: ["Project work & Deployment"] }
    ],
    image: "/pictures/react.png"
  },

  {
    id: 2,
    title: "Java Fundamentals",
    description: "Master core Java concepts including OOP and Collections.",
    instructor: "Jane Smith",
    duration: "8 weeks",
    fee: "₹7,000",
    mode: "Offline",
    startDate: "2025-09-15",
    seats: 24,
    language: "English",
    certificate: true,
    rating: 4.4,
    reviews: [{ user: "Sumi", comment: "Detailed explanations and good examples.", rating: 4 }],
    prerequisites: ["Basic programming logic"],
    learningOutcomes: [
      "Understand OOP principles",
      "Use Collections API effectively",
      "Handle exceptions and I/O",
      "Write JDBC database code"
    ],
    syllabus: [
      { week: 1, topics: ["Java syntax & types", "Control statements"] },
      { week: 2, topics: ["Classes & Objects", "OOP principles"] },
      { week: 3, topics: ["Collections & Generics"] },
      { week: 4, topics: ["Exception handling & File I/O"] },
      { week: 5, topics: ["Threads & Concurrency basics"] },
      { week: 6, topics: ["JDBC & Databases"] },
      { week: 7, topics: ["Intro to Spring Boot"] },
      { week: 8, topics: ["Final project"] }
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 3,
    title: "Python for Data Science",
    description: "Get started with Python, NumPy, and Pandas for data analysis.",
    instructor: "Mike Johnson",
    duration: "10 weeks",
    fee: "₹6,500",
    mode: "Online",
    startDate: "2025-11-01",
    seats: 40,
    language: "English",
    certificate: true,
    rating: 4.7,
    reviews: [{ user: "Arjun", comment: "Excellent practical content.", rating: 5 }],
    prerequisites: ["Basic Python (recommended)"],
    learningOutcomes: [
      "Work with NumPy & Pandas",
      "Clean and visualize data",
      "Train simple ML models with scikit-learn",
      "Perform model evaluation and reporting"
    ],
    syllabus: [
      { week: 1, topics: ["Python refresher"] },
      { week: 2, topics: ["NumPy fundamentals"] },
      { week: 3, topics: ["Pandas DataFrame operations"] },
      { week: 4, topics: ["Data cleaning & reshaping"] },
      { week: 5, topics: ["Data visualization (matplotlib/seaborn)"] },
      { week: 6, topics: ["Feature engineering basics"] },
      { week: 7, topics: ["Intro to ML & scikit-learn"] },
      { week: 8, topics: ["Model evaluation"] },
      { week: 9, topics: ["Project work"] },
      { week: 10, topics: ["Final project presentation"] }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 4,
    title: "Full-Stack Web Development",
    description: "Build modern web apps using React, Node and PostgreSQL.",
    instructor: "Asha Menon",
    duration: "12 weeks",
    fee: "₹12,000",
    mode: "Online",
    startDate: "2025-10-08",
    seats: 28,
    language: "English",
    certificate: true,
    rating: 4.5,
    reviews: [{ user: "Priya", comment: "Covers full stack nicely.", rating: 5 }],
    prerequisites: ["HTML/CSS basics", "Basic JavaScript"],
    learningOutcomes: [
      "Build SPA using React",
      "Create REST APIs with Node/Express",
      "Design relational DB schemas",
      "Deploy full stack applications"
    ],
    syllabus: [
      { week: 1, topics: ["HTML/CSS & JS refresher"] },
      { week: 2, topics: ["React fundamentals"] },
      { week: 3, topics: ["React state & hooks"] },
      { week: 4, topics: ["Routing & auth"] },
      { week: 5, topics: ["Node.js & Express basics"] },
      { week: 6, topics: ["Databases & PostgreSQL"] },
      { week: 7, topics: ["Building REST APIs"] },
      { week: 8, topics: ["Connecting frontend & backend"] },
      { week: 9, topics: ["Testing & CI basics"] },
      { week: 10, topics: ["Deployment (Heroku/Vercel/Docker)"] },
      { week: 11, topics: ["Project work"] },
      { week: 12, topics: ["Final project & review"] }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles, Figma basics, and prototyping.",
    instructor: "Ravi Kumar",
    duration: "5 weeks",
    fee: "₹4,000",
    mode: "Online",
    startDate: "2025-09-25",
    seats: 20,
    language: "English",
    certificate: true,
    rating: 4.3,
    reviews: [{ user: "Megha", comment: "Good introduction to Figma.", rating: 4 }],
    prerequisites: ["None"],
    learningOutcomes: [
      "Apply design principles",
      "Create wireframes & prototypes",
      "Perform basic usability testing"
    ],
    syllabus: [
      { week: 1, topics: ["Design fundamentals & UX process"] },
      { week: 2, topics: ["User research & personas"] },
      { week: 3, topics: ["Wireframing & prototyping (Figma)"] },
      { week: 4, topics: ["Interaction design & usability tests"] },
      { week: 5, topics: ["Portfolio & project"] }
    ],
    image: "/pictures/uiux.png"
  },

  {
    id: 6,
    title: "Data Structures & Algorithms",
    description: "Core DS & Algo concepts for interviews and problem-solving.",
    instructor: "Priya Sharma",
    duration: "10 weeks",
    fee: "₹8,000",
    mode: "Online",
    startDate: "2025-10-05",
    seats: 35,
    language: "English",
    certificate: true,
    rating: 4.8,
    reviews: [{ user: "Karan", comment: "Great for interview prep.", rating: 5 }],
    prerequisites: ["Basic programming (any language)"],
    learningOutcomes: [
      "Implement common data structures",
      "Analyze time/space complexity",
      "Solve algorithmic problems efficiently"
    ],
    syllabus: [
      { week: 1, topics: ["Arrays & Strings"] },
      { week: 2, topics: ["Linked Lists"] },
      { week: 3, topics: ["Stacks & Queues"] },
      { week: 4, topics: ["Trees & Traversals"] },
      { week: 5, topics: ["Graphs basics"] },
      { week: 6, topics: ["Sorting & Searching"] },
      { week: 7, topics: ["Dynamic Programming intro"] },
      { week: 8, topics: ["Greedy algorithms"] },
      { week: 9, topics: ["Advanced graph algorithms"] },
      { week: 10, topics: ["Mock interviews & problems"] }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 7,
    title: "Node.js & Express",
    description: "Backend development with Node.js, Express and REST APIs.",
    instructor: "Vikram Patel",
    duration: "6 weeks",
    fee: "₹5,500",
    mode: "Online",
    startDate: "2025-11-10",
    seats: 30,
    language: "English",
    certificate: true,
    rating: 4.4,
    reviews: [{ user: "Sandeep", comment: "Practical and to the point.", rating: 4 }],
    prerequisites: ["Basic JavaScript"],
    learningOutcomes: [
      "Build RESTful APIs",
      "Implement authentication",
      "Structure Express applications"
    ],
    syllabus: [
      { week: 1, topics: ["Node.js fundamentals"] },
      { week: 2, topics: ["Express routing & middleware"] },
      { week: 3, topics: ["Databases & ORM"] },
      { week: 4, topics: ["Auth & security"] },
      { week: 5, topics: ["Testing & debugging"] },
      { week: 6, topics: ["Deployment & CI"] }
    ],
    image: "/pictures/nodejs.png"
  },

  {
    id: 8,
    title: "SQL & PostgreSQL",
    description: "Database design, queries, joins, and performance tuning.",
    instructor: "Sangeetha Rao",
    duration: "4 weeks",
    fee: "₹4,500",
    mode: "Online",
    startDate: "2025-09-20",
    seats: 40,
    language: "English",
    certificate: true,
    rating: 4.2,
    reviews: [{ user: "Nisha", comment: "Clear and practical SQL lessons.", rating: 4 }],
    prerequisites: ["Basic query knowledge helpful"],
    learningOutcomes: [
      "Write advanced SQL queries",
      "Design normalized schemas",
      "Use Postgres features and optimize queries"
    ],
    syllabus: [
      { week: 1, topics: ["SQL basics & SELECT"] },
      { week: 2, topics: ["Joins & subqueries"] },
      { week: 3, topics: ["Indexes & performance"] },
      { week: 4, topics: ["Postgres features & optimization"] }
    ],
    image: "/pictures/postre.png"
  },

  {
    id: 9,
    title: "Machine Learning Basics",
    description: "Intro to ML algorithms, scikit-learn and model evaluation.",
    instructor: "Anil Menon",
    duration: "8 weeks",
    fee: "₹9,000",
    mode: "Online",
    startDate: "2025-11-15",
    seats: 30,
    language: "English",
    certificate: true,
    rating: 4.5,
    reviews: [{ user: "Leena", comment: "Good balance of theory and practice.", rating: 5 }],
    prerequisites: ["Basic Python & statistics recommended"],
    learningOutcomes: [
      "Understand supervised & unsupervised learning",
      "Train and evaluate ML models",
      "Apply preprocessing & feature engineering"
    ],
    syllabus: [
      { week: 1, topics: ["ML concepts & workflow"] },
      { week: 2, topics: ["Data preprocessing"] },
      { week: 3, topics: ["Regression algorithms"] },
      { week: 4, topics: ["Classification algorithms"] },
      { week: 5, topics: ["Unsupervised learning"] },
      { week: 6, topics: ["Model evaluation & tuning"] },
      { week: 7, topics: ["Intro to pipelines"] },
      { week: 8, topics: ["Project & presentation"] }
    ],
    image: "/pictures/machine.jpg"
  },

  {
    id: 10,
    title: "DevOps Essentials",
    description: "CI/CD, Docker, and basic Kubernetes for deploying apps.",
    instructor: "Deepa Nair",
    duration: "6 weeks",
    fee: "₹7,500",
    mode: "Online",
    startDate: "2025-10-12",
    seats: 25,
    language: "English",
    certificate: true,
    rating: 4.3,
    reviews: [{ user: "Arun", comment: "Great intro to Docker and CI.", rating: 4 }],
    prerequisites: ["Basic Linux & Git"],
    learningOutcomes: [
      "Containerize apps with Docker",
      "Build CI/CD pipelines",
      "Understand Kubernetes basics"
    ],
    syllabus: [
      { week: 1, topics: ["CI/CD concepts & Git"] },
      { week: 2, topics: ["Docker basics & images"] },
      { week: 3, topics: ["Docker Compose & registries"] },
      { week: 4, topics: ["CI pipelines (GitHub Actions)"] },
      { week: 5, topics: ["Kubernetes intro"] },
      { week: 6, topics: ["Monitoring & deployment"] }
    ],
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 11,
    title: "AWS Cloud Practitioner",
    description: "Foundational AWS concepts and core services overview.",
    instructor: "Rohan Gupta",
    duration: "4 weeks",
    fee: "₹6,000",
    mode: "Online",
    startDate: "2025-09-30",
    seats: 50,
    language: "English",
    certificate: true,
    rating: 4.1,
    reviews: [{ user: "Swapna", comment: "Good overview for beginners.", rating: 4 }],
    prerequisites: ["None"],
    learningOutcomes: [
      "Understand AWS core services",
      "Design basic cloud solutions",
      "Prepare for AWS practitioner exam"
    ],
    syllabus: [
      { week: 1, topics: ["Cloud basics & AWS intro"] },
      { week: 2, topics: ["Compute & storage (EC2, S3)"] },
      { week: 3, topics: ["IAM & security"] },
      { week: 4, topics: ["Pricing & best practices"] }
    ],
    image: "/pictures/aws.png"
  },

  {
    id: 12,
    title: "Mobile App Development (React Native)",
    description: "Build cross-platform mobile apps using React Native.",
    instructor: "Nithya Iyer",
    duration: "8 weeks",
    fee: "₹8,500",
    mode: "Online",
    startDate: "2025-11-05",
    seats: 30,
    language: "English",
    certificate: true,
    rating: 4.4,
    reviews: [{ user: "Manoj", comment: "Good hands-on React Native course.", rating: 4 }],
    prerequisites: ["React basics recommended"],
    learningOutcomes: [
      "Build mobile UI with React Native",
      "Use navigation & native modules",
      "Publish apps to stores"
    ],
    syllabus: [
      { week: 1, topics: ["React Native setup & basics"] },
      { week: 2, topics: ["Core components & styling"] },
      { week: 3, topics: ["Navigation & state management"] },
      { week: 4, topics: ["Native modules & APIs"] },
      { week: 5, topics: ["Testing & debugging"] },
      { week: 6, topics: ["Performance & optimization"] },
      { week: 7, topics: ["App store prep"] },
      { week: 8, topics: ["Project & deployment"] }
    ],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 13,
    title: "Cybersecurity Basics",
    description: "Fundamentals of securing applications and networks.",
    instructor: "Kumar R.",
    duration: "6 weeks",
    fee: "₹6,500",
    mode: "Online",
    startDate: "2025-10-20",
    seats: 30,
    language: "English",
    certificate: true,
    rating: 4.2,
    reviews: [{ user: "Vikram", comment: "Good primer on OWASP topics.", rating: 4 }],
    prerequisites: ["Basic networking knowledge helpful"],
    learningOutcomes: [
      "Understand common vulnerabilities",
      "Apply secure development practices",
      "Perform basic security assessments"
    ],
    syllabus: [
      { week: 1, topics: ["Network security basics"] },
      { week: 2, topics: ["OWASP Top 10"] },
      { week: 3, topics: ["Authentication & sessions"] },
      { week: 4, topics: ["Encryption basics"] },
      { week: 5, topics: ["Secure deployment practices"] },
      { week: 6, topics: ["Basic pentesting & reporting"] }
    ],
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1350&q=80"
  },

  {
    id: 14,
    title: "Blockchain Fundamentals",
    description: "Introduction to blockchain, smart contracts and decentralization.",
    instructor: "Meera S.",
    duration: "6 weeks",
    fee: "₹7,000",
    mode: "Online",
    startDate: "2025-12-01",
    seats: 25,
    language: "English",
    certificate: true,
    rating: 4.0,
    reviews: [{ user: "Hari", comment: "Good intro to Ethereum & Solidity.", rating: 4 }],
    prerequisites: ["Basic programming knowledge"],
    learningOutcomes: [
      "Explain blockchain concepts",
      "Write basic smart contracts",
      "Deploy simple DApps"
    ],
    syllabus: [
      { week: 1, topics: ["Blockchain basics & history"] },
      { week: 2, topics: ["Ethereum & smart contracts"] },
      { week: 3, topics: ["Solidity basics"] },
      { week: 4, topics: ["Developing simple DApps"] },
      { week: 5, topics: ["Testing & deployment"] },
      { week: 6, topics: ["Project & demos"] }
    ],
    image: "/pictures/chain.jpg"
  },

  {
    id: 15,
    title: "IoT for Beginners",
    description: "Basics of sensors, microcontrollers and connecting devices.",
    instructor: "Sundar P.",
    duration: "5 weeks",
    fee: "₹5,000",
    mode: "Online",
    startDate: "2025-10-18",
    seats: 20,
    language: "English",
    certificate: true,
    rating: 4.1,
    reviews: [{ user: "Rekha", comment: "Practical and interesting.", rating: 4 }],
    prerequisites: ["Basic electronics or curiosity"],
    learningOutcomes: [
      "Work with microcontrollers & sensors",
      "Collect and send data",
      "Build a small IoT prototype"
    ],
    syllabus: [
      { week: 1, topics: ["Introduction to IoT & sensors"] },
      { week: 2, topics: ["Microcontroller basics"] },
      { week: 3, topics: ["Connectivity & protocols"] },
      { week: 4, topics: ["Data collection & processing"] },
      { week: 5, topics: ["Edge computing & project"] }
    ],
    image: "/pictures/iot.png"
  }
];

export default courses;
