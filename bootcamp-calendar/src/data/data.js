const data = [
    {
        topics: "Introduction to JavaScript",
        workshopRepoLinks: "https://github.com/js-intro",
        recordings: "https://www.youtube.com/js-intro-recordings",
        furtherResources: "https://www.example.com/js-intro-resources",
        start: "2023-04-24T09:00:00Z",
        end: "2023-04-24T17:00:00Z",
        title: "JS Intro",
        id: 0
    },
    {
        topics: "JavaScript Basics: Variables, Operators, and Data Types",
        workshopRepoLinks: "https://github.com/js-basics",
        recordings: "https://www.youtube.com/js-basics-recordings",
        furtherResources: "https://www.example.com/js-basics-resources",
        start: "2023-04-25T09:00:00Z",
        end: "2023-04-25T17:00:00Z",
        title: "JS Basics",
        id: 1
    },
    {
        topics: "React Fundamentals: Components, Props, and State",
        workshopRepoLinks: "https://github.com/react-fundamentals",
        recordings: "https://www.youtube.com/react-fundamentals-recordings",
        furtherResources: "https://www.example.com/react-fundamentals-resources",
        start: "2023-04-26T09:00:00Z",
        end: "2023-04-26T17:00:00Z",
        title: "React Fundamentals",
        id: 2
    },
    {
        topics: "Working with APIs and Fetch in JavaScript",
        workshopRepoLinks: "https://github.com/js-apis",
        recordings: "https://www.youtube.com/js-apis-recordings",
        furtherResources: "https://www.example.com/js-apis-resources",
        start: "2023-05-01T09:00:00Z",
        end: "2023-05-01T17:00:00Z",
        title: "APIs & Fetch",
        id: 12
    },
    {
        topics: "React Hooks: useState and useEffect",
        workshopRepoLinks: "https://github.com/react-hooks",
        recordings: "https://www.youtube.com/react-hooks-recordings",
        furtherResources: "https://www.example.com/react-hooks-resources",
        start: "2023-05-02T09:00:00Z",
        end: "2023-05-02T17:00:00Z",
        title: "React Hooks",
        id: 13
    },
    {
        topics: "State Management with Redux in React",
        workshopRepoLinks: "https://github.com/react-redux",
        recordings: "https://www.youtube.com/react-redux-recordings",
        furtherResources: "https://www.example.com/react-redux-resources",
        start: "2023-05-03T09:00:00Z",
        end: "2023-05-03T17:00:00Z",
        title: "Redux in React",
        id: 14
    },
    {
        topics: "Advanced React Concepts: Context, Error Boundaries, and Portals",
        workshopRepoLinks: "https://github.com/react-advanced",
        recordings: "https://www.youtube.com/react-advanced-recordings",
        furtherResources: "https://www.example.com/react-advanced-resources",
        start: "2023-05-04T09:00:00Z",
        end: "2023-05-04T17:00:00Z",
        title: "Advanced React",
        id: 15
    },
    {
        topics: "JavaScript Promises and Async/Await",
        workshopRepoLinks: "https://github.com/js-promises",
        recordings: "https://www.youtube.com/js-promises-recordings",
        furtherResources: "https://www.example.com/js-promises-resources",
        start: "2023-05-05T09:00:00Z",
        end: "2023-05-05T17:00:00Z",
        title: "Promises & Async/Await",
        id: 16
    },
    {
        topics: "Working with Forms and Form Validation in React",
        workshopRepoLinks: "https://github.com/react-forms",
        recordings: "https://www.youtube.com/react-forms-recordings",
        furtherResources: "https://www.example.com/react-forms-resources",
        start: "2023-05-08T09:00:00Z",
        end: "2023-05-08T17:00:00Z",
        title: "Forms in React",
        id: 17
    },
    {
        topics: "React Router: Navigation and Routing in React Apps",
        workshopRepoLinks: "https://github.com/react-router",
        recordings: "https://www.youtube.com/react-router-recordings",
        furtherResources: "https://www.example.com/react-router-resources",
        start: "2023-05-09T09:00:00Z",
        end: "2023-05-09T17:00:00Z",
        title: "React Router",
        id: 18
    },
    {
        topics: "Working with CSS in React: Styled Components and CSS Modules",
        workshopRepoLinks: "https://github.com/react-css",
        recordings: "https://www.youtube.com/react-css-recordings",
        furtherResources: "https://www.example.com/react-css-resources",
        start: "2023-05-10T09:00:00Z",
        end: "2023-05-10T17:00:00Z",
        title: "CSS in React",
        id: 19
    },
    {
        topics: "Performance Optimization in React: Memo, useMemo, and useCallback",
        workshopRepoLinks: "https://github.com/react-performance",
        recordings: "https://www.youtube.com/react-performance-recordings",
        furtherResources: "https://www.example.com/react-performance-resources",
        start: "2023-05-11T09:00:00Z",
        end: "2023-05-11T17:00:00Z",
        title: "React Performance",
        id: 20
    },
    {
        topics: "State Management in React: Redux and Redux Toolkit",
        workshopRepoLinks: "https://github.com/react-redux",
        recordings: "https://www.youtube.com/react-redux-recordings",
        furtherResources: "https://www.example.com/react-redux-resources",
        start: "2023-05-12T09:00:00Z",
        end: "2023-05-12T17:00:00Z",
        title: "React Redux",
        id: 21
    },
    {
        topics: "Asynchronous Data Fetching in React: Fetch, Axios, and GraphQL",
        workshopRepoLinks: "https://github.com/react-async-data",
        recordings: "https://www.youtube.com/react-async-data-recordings",
        furtherResources: "https://www.example.com/react-async-data-resources",
        start: "2023-05-15T09:00:00Z",
        end: "2023-05-15T17:00:00Z",
        title: "Async Data Fetching",
        id: 22
    },
    {
        topics: "Server-side Rendering (SSR) with Next.js in React Apps",
        workshopRepoLinks: "https://github.com/react-nextjs",
        recordings: "https://www.youtube.com/react-nextjs-recordings",
        furtherResources: "https://www.example.com/react-nextjs-resources",
        start: "2023-05-16T09:00:00Z",
        end: "2023-05-16T17:00:00Z",
        title: "Next.js SSR",
        id: 23
    }
    
]

export default data;