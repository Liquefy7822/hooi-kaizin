import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

// Navbar component
const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-black text-white">
    <h1 className="text-xl font-bold">Nextfolio</h1>
    <div className="flex space-x-4">
      <a href="#projects">Projects</a>
      <a href="#photos">Photos</a>
    </div>
  </nav>
);

// Hero section component
const Hero = () => (
  <section className="flex flex-col items-center justify-center text-center min-h-screen bg-black text-white">
    <h2 className="text-4xl font-bold">Hello, I'm Kai Zin!</h2>
    <p className="mt-4">(Insert some of your very Sigma qualities)</p>
    <p className="mt-2">(Insert some of your skibidi interest)</p>
    <p className="mt-2">(Insert some of your dreams and goals)</p>
  </section>
);

// Projects section component
const Projects = () => (
  <section id="projects" className="p-10 bg-gray-900 text-white">
    <h3 className="text-3xl font-bold mb-6">Projects</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-2xl">Project One</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.</p>
        <span className="text-gray-500">2023</span>
      </div>
      <div>
        <h4 className="text-2xl">Project Two</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.</p>
        <span className="text-gray-500">2022</span>
      </div>
      <div>
        <h4 className="text-2xl">Project Three</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.</p>
        <span className="text-gray-500">2021</span>
      </div>
    </div>
  </section>
);

// Photos section component
const Photos = () => (
  <section id="photos" className="p-10 bg-black text-white">
    <h3 className="text-3xl font-bold mb-6">Photos</h3>
    <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="w-full h-40 bg-gray-700 flex items-center justify-center text-white"
        >
          Photo {index + 1}
        </div>
      ))}
    </div>
  </section>
);


export default Home;

// Styling can be done using Tailwind CSS or any preferred framework.
