import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const location = useLocation().pathname;

  console.log(location);

  return (
    <header>
      <nav>
        <Link to="/" className={location === "/" ? "selected" : ""} >Campaign Coordinator</Link>
        <Link to="/games" className={location === "/games" ? "selected" : ""} >Games</Link>
        <Link to="/characters" className={location === "/characters" ? "selected" : ""} >Characters</Link>
        <Link to="/styles" className={location === "/styles" ? "selected" : ""} >Style Guide</Link>
        <Link to="/help" className={location === "/help" ? "selected" : ""} >Help</Link>  
      </nav>
    </header>
  )
}
