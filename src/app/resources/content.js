import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Vishakh",
  lastName: "Neelakantan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development Engineer",
  avatar: "/images/avatar.jpg",
  // location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  timeZone: "Asia/Kolkata", // ✅ Keep timezone for time display
  headerLocation: "", // ✅ Empty to hide location in header
  aboutLocation: "Noida, India", // ✅ New location for About page
  languages: ["English", "Hindi", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>
//       I occasionally write about design, technology, and share thoughts on the intersection of
//       creativity and engineering.
//     </>
//   ),
// };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Vishakh-Neelakantan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vishakh-neelakantan/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Development Engineer</>,
  subline: (
    <>
      I am Vishakh Neelakantan, an aspiring software development engineer, upcoming GET at <InlineCode>HCL</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a software developer passionate about cybersecurity, cloud computing, 
        and AI-driven solutions. Builds secure, scalable applications, focusing on backend, 
        database management, and frontend technologies like React.js.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Ministry of Electronics and Information Technology (MeitY)",
        timeframe: "June 2024 - August 2024",
        role: "Intern",
        achievements: [
          <>
            Conducted research on cloud sovereignty, exploring technical frameworks for implementing it within India.
          </>,
          <>
            Contributed to mini projects at Software Technology Parks of India (STPI), focused on emerging technologies.

          </>,
        ],
        images: [
          
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bennett University",
        timeframe: "2021 - 2025",
        description: <>BTech Computer Science Engineering with specialization in Cyber Security.</>,
      },
      {
        name: "DPSGV",
        timeframe: "2021",
        description: 
        <>PCM with Geospatial Technology</>
        // <>
        // XII<sup>th</sup> - 2021 <br />
        // X<sup>th</sup> - 2019
        // </>
      },
    ],
  },

  technicalSkills: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      "C++", "JavaScript", "React.js", "Next.js", "Node.js",
      "SQL", "Python", "AWS", "Firebase", "GitHub",
      "Git", "HTML", "CSS", "VS Code", "Notion", "Colab", "Figma", "Canva", "EC - Council CND",
    ],
  },

  

  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "C++",
  //       description: <>Proficient in C++ with strong problem-solving skills and algorithmic thinking.</>,
  //       images: [],
  //     },
  //     {
  //       title: "Python",
  //       description: <>Experienced in Python for scripting, data processing, and backend development.</>,
  //       images: [],
  //     },
  //     {
  //       title: "JavaScript",
  //       description: <>Skilled in JavaScript for frontend and backend development, including React.js and Node.js.</>,
  //       images: [],
  //     },
  //     {
  //       title: "Firebase",
  //       description: <>Hands-on experience with Firebase for authentication, database management, and hosting.</>,
  //       images: [],
  //     },
  //     {
  //       title: "MySQL",
  //       description: <>Experience in designing and managing relational databases using MySQL.</>,
  //       images: [],
  //     },
  //     {
  //       title: "Git & GitHub",
  //       description: <>Proficient in version control using Git and GitHub for collaborative development.</>,
  //       images: [],
  //     },
  //   ],
  // },
};

// export const technical = {
//   display: true, // set to false to hide this section
//     title: "Technical skills",
//     skills: [
//       {
//         title: "Figma",
//         description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
//         // optional: leave the array empty if you don't want to display images
//         images: [
//           {
//             src: "/images/projects/project-01/cover-02.jpg",
//             alt: "Project image",
//             width: 16,
//             height: 9,
//           },
//           {
//             src: "/images/projects/project-01/cover-03.jpg",
//             alt: "Project image",
//             width: 16,
//             height: 9,
//           },
//         ],
//       },
//       {
//         title: "Next.js",
//         description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
//         // optional: leave the array empty if you don't want to display images
//         images: [
//           {
//             src: "/images/projects/project-01/cover-04.jpg",
//             alt: "Project image",
//             width: 16,
//             height: 9,
//           },
//         ],
//       },
//       {
//         title: "C++",
//         description: <>Proficient in C++ with strong problem-solving skills and algorithmic thinking.</>,
//         images: [],
//       },
//       {
//         title: "Python",
//         description: <>Experienced in Python for scripting, data processing, and backend development.</>,
//         images: [],
//       },
//       {
//         title: "JavaScript",
//         description: <>Skilled in JavaScript for frontend and backend development, including React.js and Node.js.</>,
//         images: [],
//       },
//       {
//         title: "Firebase",
//         description: <>Hands-on experience with Firebase for authentication, database management, and hosting.</>,
//         images: [],
//       },
//       {
//         title: "MySQL",
//         description: <>Experience in designing and managing relational databases using MySQL.</>,
//         images: [],
//       },
//       {
//         title: "Git & GitHub",
//         description: <>Proficient in version control using Git and GitHub for collaborative development.</>,
//         images: [],
//       },
//     ],
//   // title: "Technical Skills",
//   // skills: [
//   //   {
//   //     title: "Figma",
//   //     description: "Able to prototype in Figma with Once UI at high speed.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "Next.js",
//   //     description: "Building modern apps with Next.js + Supabase.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "C++",
//   //     description: "Proficient in C++ with strong problem-solving skills.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "Python",
//   //     description: "Experienced in Python for scripting, data processing, and backend development.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "JavaScript",
//   //     description: "Skilled in JavaScript for frontend and backend development, including React.js and Node.js.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "Firebase",
//   //     description: "Hands-on experience with Firebase for authentication, database management, and hosting.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "MySQL",
//   //     description: "Experience in designing and managing relational databases using MySQL.",
//   //     images: [],
//   //   },
//   //   {
//   //     title: "Git & GitHub",
//   //     description: "Proficient in version control using Git and GitHub for collaborative development.",
//   //     images: [],
//   //   },
//   // ],
// };


// const blog = {
//   label: "Technical skills",
//   title: "Writing about design and tech...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
//   // technical: {
//   //   display: true, // set to false to hide this section
//   //   title: "Technical skills",
//   //   skills: [
//   //     {
//   //       title: "Figma",
//   //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
//   //       // optional: leave the array empty if you don't want to display images
//   //       images: [
//   //         {
//   //           src: "/images/projects/project-01/cover-02.jpg",
//   //           alt: "Project image",
//   //           width: 16,
//   //           height: 9,
//   //         },
//   //         {
//   //           src: "/images/projects/project-01/cover-03.jpg",
//   //           alt: "Project image",
//   //           width: 16,
//   //           height: 9,
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       title: "Next.js",
//   //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
//   //       // optional: leave the array empty if you don't want to display images
//   //       images: [
//   //         {
//   //           src: "/images/projects/project-01/cover-04.jpg",
//   //           alt: "Project image",
//   //           width: 16,
//   //           height: 9,
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       title: "C++",
//   //       description: <>Proficient in C++ with strong problem-solving skills and algorithmic thinking.</>,
//   //       images: [],
//   //     },
//   //     {
//   //       title: "Python",
//   //       description: <>Experienced in Python for scripting, data processing, and backend development.</>,
//   //       images: [],
//   //     },
//   //     {
//   //       title: "JavaScript",
//   //       description: <>Skilled in JavaScript for frontend and backend development, including React.js and Node.js.</>,
//   //       images: [],
//   //     },
//   //     {
//   //       title: "Firebase",
//   //       description: <>Hands-on experience with Firebase for authentication, database management, and hosting.</>,
//   //       images: [],
//   //     },
//   //     {
//   //       title: "MySQL",
//   //       description: <>Experience in designing and managing relational databases using MySQL.</>,
//   //       images: [],
//   //     },
//   //     {
//   //       title: "Git & GitHub",
//   //       description: <>Proficient in version control using Git and GitHub for collaborative development.</>,
//   //       images: [],
//   //     },
//   //   ],
//   // },
// };

const resume = {
  label: "Resume",  // New tab in navigation
  title: "My Resume",
  description: `View and download ${person.name}'s resume.`,
  link: "https://drive.google.com/your-resume-link",  // Replace with your actual Google Drive link
};


const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   label: "Gallery",
//   title: "My photo gallery",
//   description: `A photo collection by ${person.name}`,
//   // Images from https://pexels.com
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

const contact = {
  label: "Contact",
  title: "Get in Touch",
  description: `Connect with ${person.name} on different platforms.`,
  links: [
    { name: "GitHub", icon: "", link: "https://github.com/Vishakh-Neelakantan" },
    { name: "LinkedIn", icon: "", link: "https://www.linkedin.com/in/vishakh-neelakantan/" },
    // { name: "Gmail", icon: "email", link: "mailto:vishakhneelakantan@gmail.com" },
    // { name: "Outlook", icon: "outlook", link: "mailto:e21cseu0035@bennett.edu.in" },
    { name: "Linktree", icon: "link", link: "https://linktr.ee/nvishakh" }, // Replace with actual Linktree link
  ],
};


export { person, social, home, about, resume, work, contact };
