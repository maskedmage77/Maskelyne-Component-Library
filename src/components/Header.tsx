import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const location = useLocation().pathname;

  return (
    <header>
      <nav>
        <Link to="/" className={location === "/" ? "selected" : ""} >Maskelyne Component Library</Link>
        <Link to="/help" className={location === "/help" ? "selected" : ""} >Help</Link>  
      </nav>
    </header>
  )
}