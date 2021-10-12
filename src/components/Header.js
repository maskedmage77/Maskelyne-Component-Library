import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const location = useLocation().pathname;

  console.log(location);

  return (
    <header>
      <nav>
        <Link to="/" className={location === "/" ? "selected" : "test"} >Campaign Coordinator</Link>
        <Link to="/games" className={location === "/games" ? "selected" : null} >Games</Link>
        <Link to="/characters" className={location === "/characters" ? "selected" : null} >Characters</Link>
        <Link to="/help" className={location === "/help" ? "selected" : null} >Help</Link>  
      </nav>
    </header>
  )
}
