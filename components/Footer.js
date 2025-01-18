import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="p-5 bg-gray-900 text-white text-center">
    <p>&copy; 2025 Nextfolio</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="hover:text-gray-400">X</a>
      <a href="#" className="hover:text-gray-400">GitHub</a>
      <a href="#" className="hover:text-gray-400">Instagram</a>
      <a href="#" className="hover:text-gray-400">LinkedIn</a>
      <a href="#" className="hover:text-gray-400">Email</a>
      <a href="#" className="hover:text-gray-400">RSS</a>
    </div>
  </footer>
    </>
  )
}
