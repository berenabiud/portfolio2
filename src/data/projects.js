import project2Image from '../assets/project2.png';
export const projects = [
//   {
//     id: 1,
//     title: "PROJECT 01",
//     description: "Deep Design Project",
//     imageUrl: "/project1.jpg", // or your placeholder
//     link: "/projects/project-01", // internal link
//     externalLink: "", // or external URL
//     tags: ["UI/UX", "Web Design"]
//   },
    {
    id: 2,
    title: "WISDOM DENTAL CLINIC",
    description: `Developed a responsive and user-friendly web application for a dental clinic to streamline patient engagement. The platform enables patients to:

    - Book appointments online with real-time availability
    - View the clinic's gallery showcasing services and facilities
    - Access location details and directions via integrated maps
    - Explore clinic information, services, and contact options`,
     imageUrl: project2Image,
    link: "/projects/wisdom-dental", // Optional: You could still have an internal case study page
    externalLink: "https://wisdom-eta.vercel.app/", // The live demo URL
    tags: ["React", "Flask", "UI/UX", "Full-stack"],
    features: [ // Optional: Add more structured data
        "Online appointment booking",
        "Service gallery",
        "Interactive maps",
        "Responsive design"
    ],
    repoLink: "https://github.com/yourusername/wisdom-dental" // Optional: Add GitHub repo
    },

//   {
//     id: 3,
//     title: "PROJECT 03",
//     description: "Mobile Application",
//     imageUrl: "/project3.jpg",
//     link: "/projects/project-03",
//     externalLink: "",
//     tags: ["iOS", "Swift"]
//   }
  // Add more projects as needed
];

export default projects