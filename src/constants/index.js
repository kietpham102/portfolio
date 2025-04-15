const navLinks=[
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words=[
  {text: "Ideas",imgPath: "/images/ideas.svg"},
  {text: "Concepts",imgPath: "/images/concepts.svg"},
  {text: "Designs",imgPath: "/images/designs.svg"},
  {text: "Code",imgPath: "/images/code.svg"},
  {text: "Ideas",imgPath: "/images/ideas.svg"},
  {text: "Concepts",imgPath: "/images/concepts.svg"},
  {text: "Designs",imgPath: "/images/designs.svg"},
  {text: "Code",imgPath: "/images/code.svg"},
];

const counterItems=[
  {value: 5,suffix: "+",label: "Years of Experience"},
  {value: 10,suffix: "+",label: "Satisfied Clients"},
  {value: 20,suffix: "+",label: "Completed Projects"},
  {value: 90,suffix: "%",label: "Client Retention Rate"},
];

const logoIconsList=[
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  }
];

const abilities=[
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs=[
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons=[
  {
    name: "JavaScript / TypeScript",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0,-Math.PI/2,0],
  },
  {
    name: "ReactJS / NextJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0,-Math.PI/2,0],
  },
  {
    name: "HTML5 / CSS3 / Tailwind",
    modelPath: "/models/html5_logo.glb",
    scale: 1,
    rotation: [1,-Math.PI/1,0],
  },
  {
    name: "Ant Design / Mantine UI / MUI",
    modelPath: "/models/three.js-transformed.glb",
    scale: 1.5,
    rotation: [0,Math.PI/2,0],
  },
  {
    name: "Redux / Zustand / React Query",
    modelPath: "/models/three.js-transformed.glb",

    scale: 1,
    rotation: [0,Math.PI/4,0],
  },

  {
    name: "Agile Methodologies",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0,Math.PI/2,0],
  },

  {
    name: "Git / Bitbucket / Jira",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0,0,0],
  },
  {
    name: "Micro Frontend",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0,Math.PI/2,0],
  },
  {
    name: "Team Work",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0,Math.PI/2,0],
  },

];

const expCards=[
  {
    review: "Kiet is a dedicated and skilled developer. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/company-logo-6.png",
    logoPath: "/images/logo-2.png",
    title: "Full Stack Developer",
    date: "March 2025 - Present",
    responsibilities: [
      "Developed and maintained the frontend of the React website.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Built responsive and interactive user interfaces.",
    ],
  },
  {
    review: "Kiet brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/c2c.png",
    logoPath: "/images/c2c-1.png",
    title: "Frontend Developer",
    date: "March 2020 - February 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the company's web applications.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
      "Implemented responsive design to ensure optimal performance across various devices.",
      "Ensured cross-browser compatibility and accessibility.",
      "Conducted code reviews and provided feedback to other developers.",
      "Good problem-solving skills and ability to work under pressure.",
    ],
  },

];

const expLogos=[
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials=[
  {
    name: "Nhân Nguyễn",
    mentions: "@NhanNguyen",
    review:
      "I can’t say enough good things about Kiet. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.jpg",
  },
  {
    name: "Bảo Nhật",
    mentions: "@NhatNguyen",
    review:
      "Working with Kiet was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client2.jpg",
  },
  {
    name: "Thảo Nguyễn",
    mentions: "@ThaoNguyen",
    review:
      "Collaborating with Kiet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kiet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kiet is the ideal partner.",
    imgPath: "/images/client3.jpg",
  },
  {
    name: "Vương Nguyễn",
    mentions: "@VuongNguyen",
    review:
      "Kiet was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client4.jpg",
  },
  {
    name: "Hiền Nhi",
    mentions: "@hiennhi",
    review:
      "Kiet was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client5.jpg",
  },
];

const socialImgs=[
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/anhkiet_102/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/anhkietpham.76",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/kietpham102",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/kiet-pham-anh/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
