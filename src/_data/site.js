// Site-wide settings. Change your name, email or the menu here.
export default {
  name: "Julius Laggah",
  role: "Lecturer · Software Engineer · Applied AI Researcher",
  description:
    "Julius Laggah: Lecturer in the Department of Information & Communication Technology at Limkokwing University. Software engineer and applied AI researcher based in Freetown, Sierra Leone.",
  email: "laggahjulius@gmail.com",
  location: "Freetown, Sierra Leone",
  github: "https://github.com/juliuslaggah",
  year: new Date().getFullYear(),

  // The menu. Each item points at a folder in src/ (e.g. /research/ -> src/research/).
  // "summary" is the short text shown on the home page card for that section.
  nav: [
    { label: "About", url: "/about/", summary: "Who I am, what drives my work, and my core skills." },
    { label: "Teaching", url: "/teaching/", summary: "What I teach at Limkokwing and how I support students." },
    { label: "Research", url: "/research/", summary: "Human-centred, explainable and trustworthy AI." },
    { label: "Experience", url: "/experience/", summary: "From microfinance ICT to research and the lecture hall." },
    { label: "Education", url: "/education/", summary: "M.Eng Software Engineering (Nankai) and B.Sc Computer Science." },
    { label: "Publications", url: "/publications/", summary: "Peer-reviewed articles and research outputs." },
    { label: "Blog", url: "/blog/", summary: "Notes, updates and reflections from across my work." },
    { label: "Contact", url: "/contact/", summary: "Collaborations, guest lectures and supervision." },
  ],
};
