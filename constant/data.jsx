import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { BiSolidCustomize } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import { FaDiagramProject } from "react-icons/fa6";
import { MdWorkspacesFilled } from "react-icons/md";
import { FaLink } from "react-icons/fa";

export const aboutData = [
  {
    icon: <BiSolidCustomize />,
    title: "Branding & Logo",
    description:
      "I create designs to help people to quickly identify their products and organization.",
    modification: "BL",
    id: 1,
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I create and design the user interface (UI) and user experience (UX) of websites.",
    modification: "WD",
    id: 2,
  },
  {
    icon: <FaRegLightbulb />,
    title: "Mobile Development",
    description:
      "Mobile Developer, passionate about building seamless and innovative apps that enhance everyday experiences.",
    modification: "UD",
    id: 3,
  },
  {
    icon: <SiAdobephotoshop />,
    title: "Photoshop",
    description:
      "Photoshop Expert, photoshop is an image creation, graphic design and photo editing software.",
    modification: "PS",
    id: 4,
  },
];

export const workingSkillsData = [
  {
    year: "Sept 2024 - Present",
    title: "Frontend Developer",
    company: "Xpresscore",
    logo: "/assets/logo/xpress-logo.png",
    id: 4,
  },
  {
    year: "Jan 2024 - Jul 2024",
    title: "Mobile Developer (contract)",
    company: "Spouse Tech Limited ",
    logo: "/assets/logo/spousetech-logo.jpg",
    id: 3,
  },
  {
    year: "Nov 2022 - Jul 2024",
    title: "Frontend Developer",
    company: "Shawsec",
    logo: "/assets/logo/shawsec-logo.jpg",
    id: 2,
  },
  {
    year: "Sept 2022 - Oct 2022",
    title: "Frontend Developer",
    company: "HNG Internship",
    logo: "/assets/logo/hng-logo.jpg",
    id: 1,
  },
];

export const educationData = [
  {
    year: "2019-2024",
    title: "Bsc in Computer Science",
    title2: "- University,",
    location: "Zaria City, KD",
    id: 1,
  },
  {
    year: "2017-2019",
    title: "Diploma in Computer Science",
    title2: "- University,",
    location: "Zaria City, KD",
    id: 2,
  },
];

export const blogData = [
  {
    blogPhoto: "/assets/blog/science.png",
    date: "18th-19th Centuries",
    title: "Earth Sciences - Unveiling the Planet's Story",
    category: "Science",
    description:
      "Earth sciences take us on a geological journey, unraveling the tales of rocks, oceans, and the dynamic atmosphere. Delve into the forces that shape our planet, from the mysteries of plate tectonics to the delicate balance of the Earth's climate.",
    id: 1,
  },
  {
    blogPhoto: "/assets/blog/coding.jpg",
    date: "Early 1990s",
    title: "The Canvas of Web Development",
    category: "Coding",
    description:
      "Web development is a canvas where programmers paint interactive landscapes. From the structure of HTML to the styling of CSS and the dynamic functionality of JavaScript, we explore how web developers weave together technologies to craft seamless and engaging digital experiences.",
    id: 2,
  },
  {
    blogPhoto: "/assets/blog/music.jpg",
    date: "19th Century",
    title: "The Rhythmic Tapestry of Jazz",
    category: "Music",
    description:
      "Jazz, a genre born out of the African-American experience, is a celebration of freedom and improvisation. With its syncopated rhythms and soulful melodies, jazz has the power to transport listeners to smoky lounges of the past and avant-garde spaces of the future.",
    id: 3,
  },
  {
    blogPhoto: "/assets/blog/design.jpg",
    date: "20th Century",
    title: "The Artistry of Visual Composition",
    category: "Design",
    description:
      "At its core, design is an artful dance between form and function. Whether it's a sleek user interface or the layout of a physical space, the visual elements must harmonize to enhance both beauty and usability. We delve into the principles that designers employ to strike the delicate balance between aesthetics and functionality.",
    id: 4,
  },
];

export const worksData = {
  innovations: [
    {
      title: "Chrome Extension",
      workPhoto: "/assets/images/chromeextension.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://zuri-internship-task-five.vercel.app/",
      id: "chrome-extension-1",
    },
    {
      title: "Real Estate",
      workPhoto: "/assets/images/realestate.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://poshhomez.vercel.app/",
      id: "real-estate-2",
    },
  ],
  panoramas: [
    {
      title: "Carro Cars Dealership",
      workPhoto: "/assets/images/carrocars.png",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://carrocars.vercel.app/",
      id: "carro-cars-1",
    },
    {
      title: "Dishup Food App",
      workPhoto: "/assets/images/dishupfoods.jpg",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://dishup-food.vercel.app/",
      id: "dishup-food-2",
    },
  ],
  symphonies: [
    {
      title: "Simple Movie App",
      workPhoto: "/assets/images/movieapp.jpg",
      icon: <FaLink />,
      category: "Symphonies",
      Link: "https://zuri-internship-task-two.vercel.app/",
      id: "simple-movie-app-1",
    },
  ],
};
