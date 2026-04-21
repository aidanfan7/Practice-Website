export const tracks = [
  {
    id: 'web-fundamentals',
    title: 'Web Fundamentals',
    icon: '🌐',
    color: 'cyan',
    description: 'Master HTML, CSS, and the foundations of the modern web.',
    level: 'Beginner',
    duration: '4 weeks',
    lessons: 12,
    modules: [
      {
        id: 'html-basics',
        title: 'HTML Essentials',
        lessons: [
          { id: 1, title: 'Structure of an HTML Document', duration: '15 min', type: 'lesson' },
          { id: 2, title: 'Semantic Tags & Accessibility', duration: '20 min', type: 'lesson' },
          { id: 3, title: 'Forms & Input Elements', duration: '25 min', type: 'lesson' },
          { id: 4, title: 'Build a Personal Bio Page', duration: '30 min', type: 'project' },
        ]
      },
      {
        id: 'css-styling',
        title: 'CSS & Styling',
        lessons: [
          { id: 5, title: 'Selectors, Specificity & Cascade', duration: '20 min', type: 'lesson' },
          { id: 6, title: 'Flexbox & Grid Layouts', duration: '30 min', type: 'lesson' },
          { id: 7, title: 'Responsive Design & Media Queries', duration: '25 min', type: 'lesson' },
          { id: 8, title: 'CSS Animations & Transitions', duration: '20 min', type: 'lesson' },
        ]
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Mastery',
    icon: '⚡',
    color: 'yellow',
    description: 'From variables to async/await — become fluent in modern JS.',
    level: 'Beginner → Intermediate',
    duration: '6 weeks',
    lessons: 18,
    modules: [
      {
        id: 'js-core',
        title: 'JS Core Concepts',
        lessons: [
          { id: 1, title: 'Variables, Types & Operators', duration: '20 min', type: 'lesson' },
          { id: 2, title: 'Functions & Scope', duration: '25 min', type: 'lesson' },
          { id: 3, title: 'Arrays & Objects Deep Dive', duration: '30 min', type: 'lesson' },
          { id: 4, title: 'DOM Manipulation', duration: '25 min', type: 'lesson' },
        ]
      },
      {
        id: 'js-advanced',
        title: 'Advanced JavaScript',
        lessons: [
          { id: 5, title: 'Closures & Higher-Order Functions', duration: '30 min', type: 'lesson' },
          { id: 6, title: 'Promises & Async/Await', duration: '35 min', type: 'lesson' },
          { id: 7, title: 'Fetch API & REST Calls', duration: '25 min', type: 'lesson' },
          { id: 8, title: 'ES6+ Features', duration: '20 min', type: 'lesson' },
        ]
      }
    ]
  },
  {
    id: 'react',
    title: 'React Development',
    icon: '⚛️',
    color: 'purple',
    description: 'Build interactive UIs with the most popular frontend library.',
    level: 'Intermediate',
    duration: '5 weeks',
    lessons: 16,
    modules: [
      {
        id: 'react-core',
        title: 'React Foundations',
        lessons: [
          { id: 1, title: 'Components & JSX', duration: '25 min', type: 'lesson' },
          { id: 2, title: 'Props & State', duration: '30 min', type: 'lesson' },
          { id: 3, title: 'Event Handling & Forms', duration: '25 min', type: 'lesson' },
          { id: 4, title: 'useEffect & Lifecycle', duration: '30 min', type: 'lesson' },
        ]
      },
      {
        id: 'react-advanced',
        title: 'Advanced React Patterns',
        lessons: [
          { id: 5, title: 'Context API & useReducer', duration: '35 min', type: 'lesson' },
          { id: 6, title: 'Custom Hooks', duration: '30 min', type: 'lesson' },
          { id: 7, title: 'React Router v6', duration: '25 min', type: 'lesson' },
          { id: 8, title: 'Performance Optimization', duration: '30 min', type: 'lesson' },
        ]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend with Node.js',
    icon: '🔧',
    color: 'green',
    description: 'Build scalable APIs and server-side applications with Node & Express.',
    level: 'Intermediate',
    duration: '5 weeks',
    lessons: 15,
    modules: [
      {
        id: 'node-core',
        title: 'Node.js Fundamentals',
        lessons: [
          { id: 1, title: 'Node.js Runtime & Modules', duration: '20 min', type: 'lesson' },
          { id: 2, title: 'Express.js Routing', duration: '25 min', type: 'lesson' },
          { id: 3, title: 'Middleware & Error Handling', duration: '25 min', type: 'lesson' },
          { id: 4, title: 'RESTful API Design', duration: '30 min', type: 'lesson' },
        ]
      },
      {
        id: 'databases',
        title: 'Databases',
        lessons: [
          { id: 5, title: 'SQL & PostgreSQL Basics', duration: '35 min', type: 'lesson' },
          { id: 6, title: 'MongoDB & Mongoose', duration: '30 min', type: 'lesson' },
          { id: 7, title: 'Authentication & JWT', duration: '35 min', type: 'lesson' },
          { id: 8, title: 'Build a Full REST API', duration: '60 min', type: 'project' },
        ]
      }
    ]
  },
  {
    id: 'python',
    title: 'Python for Dev',
    icon: '🐍',
    color: 'orange',
    description: 'Learn Python for scripting, automation, data, and backend APIs.',
    level: 'Beginner → Intermediate',
    duration: '5 weeks',
    lessons: 14,
    modules: [
      {
        id: 'python-core',
        title: 'Python Core',
        lessons: [
          { id: 1, title: 'Syntax, Types & Control Flow', duration: '20 min', type: 'lesson' },
          { id: 2, title: 'Functions & Modules', duration: '25 min', type: 'lesson' },
          { id: 3, title: 'Lists, Dicts & Comprehensions', duration: '25 min', type: 'lesson' },
          { id: 4, title: 'OOP in Python', duration: '30 min', type: 'lesson' },
        ]
      },
      {
        id: 'python-applied',
        title: 'Applied Python',
        lessons: [
          { id: 5, title: 'File I/O & Error Handling', duration: '20 min', type: 'lesson' },
          { id: 6, title: 'Flask REST APIs', duration: '35 min', type: 'lesson' },
          { id: 7, title: 'Web Scraping with BeautifulSoup', duration: '30 min', type: 'lesson' },
          { id: 8, title: 'Automation Scripts', duration: '25 min', type: 'project' },
        ]
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    icon: '🚀',
    color: 'pink',
    description: 'Ship your apps to production with Git, CI/CD, Docker, and cloud.',
    level: 'Intermediate → Advanced',
    duration: '4 weeks',
    lessons: 12,
    modules: [
      {
        id: 'git',
        title: 'Git & Version Control',
        lessons: [
          { id: 1, title: 'Git Workflow & Branching', duration: '20 min', type: 'lesson' },
          { id: 2, title: 'Merge Conflicts & Rebasing', duration: '25 min', type: 'lesson' },
          { id: 3, title: 'GitHub & Pull Requests', duration: '20 min', type: 'lesson' },
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & CI/CD',
        lessons: [
          { id: 4, title: 'Docker Fundamentals', duration: '35 min', type: 'lesson' },
          { id: 5, title: 'CI/CD with GitHub Actions', duration: '30 min', type: 'lesson' },
          { id: 6, title: 'Deploy to Vercel & Railway', duration: '25 min', type: 'lesson' },
          { id: 7, title: 'Environment Variables & Secrets', duration: '20 min', type: 'lesson' },
        ]
      }
    ]
  }
]

export const lessonContent = {
  'react-components-jsx': {
    title: 'Components & JSX',
    track: 'React Development',
    duration: '25 min',
    content: [
      {
        type: 'text',
        body: `React is built around the concept of **components** — reusable, self-contained pieces of UI. Think of them like custom HTML elements that you define yourself.`
      },
      {
        type: 'code',
        language: 'jsx',
        label: 'Your first component',
        code: `// A simple functional component
function Greeting({ name }) {
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      <p>Welcome to HackPrep.</p>
    </div>
  );
}

// Use it like HTML
function App() {
  return <Greeting name="Rohan" />;
}`
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'What is JSX?',
        body: 'JSX (JavaScript XML) looks like HTML but is actually syntactic sugar for React.createElement() calls. Babel compiles it to plain JavaScript before the browser sees it.'
      },
      {
        type: 'text',
        body: `Every React component is just a function that returns JSX. The rules are simple:\n\n- Component names **must start with a capital letter**\n- Return a **single root element** (wrap multiple in a Fragment \`<>\`)\n- Use \`className\` instead of \`class\` (since \`class\` is a JS keyword)`
      },
      {
        type: 'code',
        language: 'jsx',
        label: 'Fragment example',
        code: `function Profile({ user }) {
  return (
    <>
      <Avatar src={user.avatar} />
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </>
  );
}`
      },
      {
        type: 'quiz',
        question: 'Which of the following component names is valid in React?',
        options: ['myComponent', 'MyComponent', 'my-component', 'mycomponent'],
        answer: 1,
        explanation: 'React component names must start with an uppercase letter. Lowercase names are reserved for built-in HTML elements.'
      }
    ]
  }
}

export const challenges = [
  {
    id: 1,
    title: 'FizzBuzz Redux',
    difficulty: 'Easy',
    track: 'JavaScript',
    tags: ['loops', 'conditionals'],
    description: 'Print numbers 1–100. For multiples of 3 print "Fizz", multiples of 5 print "Buzz", both print "FizzBuzz".',
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    solution: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}`
  },
  {
    id: 2,
    title: 'Reverse a String',
    difficulty: 'Easy',
    track: 'JavaScript',
    tags: ['strings', 'arrays'],
    description: 'Write a function that reverses a string without using the built-in reverse() method.',
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    solution: `function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}`
  },
  {
    id: 3,
    title: 'Flatten Nested Array',
    difficulty: 'Medium',
    track: 'JavaScript',
    tags: ['recursion', 'arrays'],
    description: 'Write a function to flatten an arbitrarily nested array into a single-level array.',
    starterCode: `function flatten(arr) {
  // Your code here
}

// flatten([1, [2, [3, [4]]]]) => [1, 2, 3, 4]`,
    solution: `function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
  []);
}`
  },
  {
    id: 4,
    title: 'Debounce Function',
    difficulty: 'Hard',
    track: 'JavaScript',
    tags: ['closures', 'timers'],
    description: 'Implement a debounce utility that delays invoking a function until after a wait time has elapsed.',
    starterCode: `function debounce(func, wait) {
  // Your code here
}`,
    solution: `function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}`
  },
  {
    id: 5,
    title: 'CSS Flexbox Layout',
    difficulty: 'Easy',
    track: 'Web Fundamentals',
    tags: ['css', 'flexbox'],
    description: 'Create a navigation bar with a logo on the left and three links on the right using only Flexbox.',
    starterCode: `/* Style the .navbar to have logo left, links right */
.navbar {
  /* your styles */
}

.navbar .logo { }
.navbar .nav-links { }`,
    solution: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #111;
}

.navbar .nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}`
  },
  {
    id: 6,
    title: 'Build a REST Endpoint',
    difficulty: 'Medium',
    track: 'Backend with Node.js',
    tags: ['express', 'REST', 'middleware'],
    description: 'Create an Express endpoint GET /users/:id that returns a user from an in-memory array or 404 if not found.',
    starterCode: `const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Rohan Sharma' },
  { id: 2, name: 'Aidan Fan' },
];

// Add your route here`,
    solution: `app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});`
  }
]
