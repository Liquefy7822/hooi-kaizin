import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useState } from 'react';

// Navbar component
const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-gray-900 text-white shadow-md">
    <h1 className="text-2xl font-bold">Nextfolio</h1>
    <div className="flex space-x-6">
      <a href="#projects" className="hover:text-gray-400">Projects</a>
    </div>
  </nav>
);

// Hero section component
const Hero = () => (
  <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
    <h2 className="text-5xl font-bold mb-6">Hello, I'm Kai Zin!</h2>
    <p className="text-lg mb-2">(Insert some of your very Sigma qualities)</p>
    <p className="text-lg mb-2">(Insert some of your skibidi interest)</p>
    <p className="text-lg">(Insert some of your dreams and goals)</p>
  </section>
);

// Projects section component with collapsible cards
const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
      year: '2023',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
      year: '2022',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
      year: '2021',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="p-10 bg-gray-800 text-white">
      <h3 className="text-4xl font-bold mb-8 text-center">Projects</h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 rounded-md overflow-hidden shadow-lg">
            <button
              onClick={() => toggleProject(index)}
              className="w-full text-left p-4 bg-gray-700 text-white font-bold flex justify-between items-center hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between w-full">
                <span>{project.title}</span>
                <span className="text-gray-400">({project.year})</span>
              </div>
            </button>
            {openProject === index && (
              <div className="p-4 bg-gray-600">
                <img src={project.image} alt={project.title} className="w-full mb-4 rounded-md" />
                <p>{project.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}

