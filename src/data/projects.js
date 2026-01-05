export const projects = [
  {
    slug: "pawmart",
    name: "PAWMART (Client)",
    image: "/projects/pawmart.jpg",
    stack: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
    description:
      "PAWMART is a client-side e-commerce style web app featuring modern UI, smooth browsing experience, and reusable components.",
    live: "https://pawmart-clientsite.netlify.app",
    github: "https://github.com/samiul1288/PAWMART-client",
    challenges: [
      "Keeping UI consistent across multiple pages and components",
      "Managing state and data flow while integrating APIs",
      "Ensuring responsiveness for mobile, tablet and desktop",
    ],
    improvements: [
      "Add authentication and user profile features",
      "Add advanced filters/search and performance optimizations",
      "Improve accessibility and UI polish for production readiness",
    ],
  },
  {
    slug: "tuition-management",
    name: "Tuition Management (Client)",
    image: "/projects/tuition.jpg",
    stack: ["React", "Tailwind CSS", "JavaScript", "CRUD Workflow"],
    description:
      "A tuition management client app concept to organize students, manage tuition/payment records and maintain a clean workflow UI.",
    live: "https://tution-management.netlify.app",
    github: "https://github.com/samiul1288/Tution-management-clent",
    challenges: [
      "Designing the data structure for students and payment tracking",
      "Handling validation and edge cases in forms",
      "Keeping the UI simple while supporting multiple flows",
    ],
    improvements: [
      "Add database + admin dashboard (role-based)",
      "Add export features (PDF/Excel) for reports",
      "Add reminders/notifications and improved search",
    ],
  },
  {
    slug: "dragon-news",
    name: "Dragon News",
    image: "/projects/project3.jpg",
    stack: ["React", "Tailwind CSS", "JavaScript", "Routing"],
    description:
      "A news-style web app UI where users can browse and explore categorized news content with a clean layout and navigation.",
    live: null, // ✅ no live link
    liveStatusText: "Working (Live link not available yet)",
    github: "https://github.com/samiul1288/Drangon-News",
    challenges: [
      "Building clean routing/navigation and maintaining UX flow",
      "Designing cards/layout for multiple content sections",
      "Keeping performance smooth while rendering content lists",
    ],
    improvements: [
      "Add search, bookmarks and user preferences",
      "Add backend/API integration for real-time news feed",
      "Add dark/light theme toggle and more animations",
    ],
  },
];
