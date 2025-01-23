import noteify from "../assets/projects/noteify.png";
import storyStacks from "../assets/projects/StoryStacks.png"
import curePoint from "../assets/projects/curePoint.png";

export const PROJECTS = [
  {
    title: "CurePoint",
    image: curePoint,
    description:
      "A recipe suggesting website where recipes are giving for different dishes.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "Express.js"],
    liveLink: "https://storestacks.com",
    clientRepo: "https://github.com/subarnoturja/curepoint-client",
    serverRepo: "",
  },
  {
    title: "Noteify",
    image: noteify,
    description:
      "Noteify is a web application designed to help users create, organize, and manage notes efficiently.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    liveLink: "https://noteify-client.vercel.app/",
    clientRepo: "https://github.com/subarnoturja/noteify-client",
    serverRepo: "https://github.com/subarnoturja/noteify-server",
  },
  {
    title: "StoreStacks",
    image: storyStacks,
    description:
      "A fully functional book selling website with features like book listing, seller dashboard, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js"],
    liveLink: "https://story-stacks.vercel.app/",
    clientRepo: "https://github.com/subarnoturja/StoryStacks-client",
    serverRepo: "https://github.com/subarnoturja/StoryStacks-server",
  },
];

export const CONTACT = {
  address: "Pathantooly Road, Nazirpool, Chattrogram-4100 ",
  phoneNo: "+8801791997019 ",
  email: "subarnoturja15@gmail.com",
};
