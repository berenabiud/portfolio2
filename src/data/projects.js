import project2Image from '../assets/project2.png';
import project1Image from '../assets/project1.png'
import project3Image from '../assets/project3.png'
export const projects = [
  {
    id: 1,
    title: "ABANYALA CULTURURE AND HERITAGE ",
    description: "A cultural heritage platform dedicated to preserving and promoting the traditions of the Abanyala people. The site showcases our mission and vision through engaging content, fostering cultural exchange, education, and community connection. It serves as a bridge between generations while embracing modern innovation to keep Abanyala heritage alive and relevant in today’s world.",
    imageUrl : project1Image,
    link: "/projects/project-01", // internal link
    externalLink: "https://abanyala.vercel.app/", // or external URL
    tags: ["React", "Flask", "UI/UX", "Full-stack"],
  },
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

  {
    id: 3,
    title: "ALEXANDRIA TRAINING INSTITUTE & TEACHERS' TRAINING COLLEGE ELDORET CAMPUS",
    description: "A modern educational platform designed to showcase Alexandria Training Institute’s commitment to academic excellence and professional development. The site highlights the institution’s mission to empower students through high-quality education and a supportive learning environment, preparing them for success in their respective fields.",
    imageUrl: project3Image,
    link: "/projects/project-03",
    externalLink: "https://abanyala.vercel.app/",
    tags: ["React", "Flask", "UI/UX", "Full-stack"],
  }
  // Add more projects as needed
];

export default projects