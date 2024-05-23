import { NavLink } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="hidden md:block text-center py-6">
    <p className="mb-1 text-light-blue">© 2023 Betano</p>
    <ul className="flex space-x-3 justify-center">
      <li><NavLink to="/privacy-policy" className="hover:text-yellow">Privacy</NavLink></li>
      <li><NavLink to="/terms" className="hover:text-yellow">Terms</NavLink></li>
      <li><NavLink to="/workers" className="hover:text-yellow">Workers</NavLink></li>
    </ul>
  </footer>
  )
}
