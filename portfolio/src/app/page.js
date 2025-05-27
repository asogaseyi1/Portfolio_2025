// app/page.js
import "./globals.css";
import AOSWrapper from "./components/AOSWrapper";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Oluwaseyi Asoga Portfolio",
  description: "My personal portfolio",
};

export default function Home() {
  return (
    <AOSWrapper>
    <main className="min-h-screen px-6 sm:px-12 py-20 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left py-10">
  <Image
    src="/Images/Seyi.jpg"
    alt="Oluwaseyi Asoga"
    width={128}
    height={128}
    className="w-32 h-32 rounded-full object-cover shadow-md"
    priority
  />

  {/* Text Content */}
  <div>
    <h1 className="text-4xl sm:text-5xl font-bold">Oluwaseyi Asoga</h1>
    <p className="text-lg text-gray-600 mt-2">
      Full-Stack Developer | React • Next.js • Java • Spring Boot • Python
    </p>
    <a
      href="#contact"
      className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
    >
      Contact Me
    </a>
  </div>
</section>


      {/* About Section */}
      <section
  id="about"
  className="max-w-2xl mx-auto text-center space-y-6 p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg"
  data-aos="fade-up"
>
  <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:absolute after:content-[''] after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-teal-400 after:transition-all after:duration-500 hover:after:w-full">
  About Me
</h2>
  <p className="text-black-700 leading-relaxed text-lg">
    I&apos;m a dedicated and curious full-stack developer with a strong foundation in both frontend and backend technologies.
    I enjoy building responsive, user-focused applications that solve real-world problems, from intuitive user interfaces with
    <span className="font-semibold text-blue-600"> React</span> and
    <span className="font-semibold text-indigo-600"> Next.js</span> to robust backend systems using
    <span className="font-semibold text-green-600"> Java</span> and
    <span className="font-semibold text-yellow-600"> Spring Boot</span>.
    My passion lies in creating seamless digital experiences, and I&apos;m constantly exploring new tools and best practices
    to grow as a developer. Whether it&apos;s collaborating on a team or architecting a feature from scratch,
    I bring attention to detail, adaptability, and a commitment to quality in every project I take on.
  </p>
</section>


      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"  data-aos="fade-down">
          <ProjectCard
  title="ParkShare"
  description="Peer-to-peer parking space sharing app built with Spring Boot and React. Includes secure reservations, Stripe payments, and soon-to-be real-time updates."
  tech={["React.js", "Spring Boot", "MongoDB", "Stripe", "Google Maps API", "Docker"]}
  link="https://github.com/asogaseyi1/Parkshare-repo"
/>

<ProjectCard
  title="Smart Food Inventory"
  description="AI-powered system that detects food freshness and generates 3D models from images taken by Seedstudio reCamera using Point-E. Built with FastAPI and TensorFlow."
  tech={["FastAPI", "Point-E", "TensorFlow", "Google Cloud", "Vue.js"]}
  link="https://github.com/asogaseyi1/reCamera_Project"
/>

<ProjectCard
  title="RestroSync"
  description="a restaurant management system designed to streamline daily operations, enhance customer experience, and optimize business performance."
  tech={["PostgreSQL", "Express.js", "React.js", "Node.js", "Docker"]}
  link="https://github.com/hetu2344/comp4350-g07"
/>
        </div>
      </section>

      {/* Contact Section */}
      <section
  id="contact"
  className="text-center space-y-6 py-10 max-w-xl mx-auto"
  data-aos="fade-up"
>

  <ContactForm />

  <div className="flex justify-center gap-8 text-3xl mt-6">
    <a
      href="https://github.com/asogaseyi1"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 transition"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/oluwaseyi-asoga-60b4a1151"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 transition"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
  </div>
</section>

    </main>
    </AOSWrapper>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 bg-white space-y-4">
      <h3 className="text-xl font-bold text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className="inline-block mt-2 text-sm text-white bg-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
        >
          View Project
        </a>
      )}
    </div>
  );
}
