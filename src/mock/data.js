import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Omar ElZaria',
  subtitle: 'I am an aspiring software engineer!',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpg',
  paragraphOne: 'I am pursuing a Bachelors of Applied Sciences degree at the University of Toronto. My major is Computer Engineering with a focus on Software Engineering and Control Systems.',
  paragraphTwo: 'I enjoy being challenged and engaged with projects that require me to work outside my comfort and knowledge set, as continuing to learn new development techniques are important for my personal growth.',
  paragraphThree: 'I want to make things that make a difference.',
  resume: 'https://drive.google.com/file/d/1L-hnmzUsd3yUpLaHmO1OVgRrwCSTcMOT/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'MAPPER.jpg',
    title: 'M.A.P.P.E.R',
    info: 'I took a leadership role on a team, designed and developed a fully functioning GIS using C++. By utilizing greedy algorithms and nested multi-start, our algorithm’s performance ranked top 15 out of 150 teams. We Implemented a path-finding algorithm using a Dijsktra’s algorithm and BFS, and researched solutions to a variation of the Travelling Salesman Problem (TSP). I gained experience designing algorithms and implementing different data structures such hashtables, hash maps, vectors and adjacency matrices to generate a fast lookup for our algorithm.',
    info2: '',
    url: 'https://github.com/OmarElZaria/M.A.P.P.E.R-Project',
    repo: 'https://github.com/OmarElZaria/M.A.P.P.E.R-Project/tree/master/M.A.P.P.E.R', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'vending_machine.png',
    title: 'Vending Machine Simulator',
    info: 'Developed a simulation of the functionality of a vending machine using C. The game is displayed on a VGA display using DE1-SoC FPGA board and I gained experience with debugging, using I/O devices, and buffers.',
    info2: '',
    url: 'https://github.com/OmarElZaria/Vending-Machine-Simulator',
    repo: 'https://github.com/OmarElZaria/Vending-Machine-Simulator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ig_bot.jpeg',
    title: 'Instagram Bot',
    info: 'I implementeded a python script that uses the capabilities of selenium webdrive to automatically login to an account and track the followers and following of the account. The bot allows you to figure the list of accounts that are not following you back on instagram.',
    info2: '',
    url: 'https://github.com/OmarElZaria/igBot',
    repo: 'https://github.com/OmarElZaria/igBot/tree/master/igBot', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch with me!',
  btn: '',
  email: 'omar.elzaria@mail.utoronto.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omar-elzaria',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/OmarElZaria',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
