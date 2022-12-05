import { useState } from 'react';
import './Nav.scss';

const navLinks = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const activeLinksClassName = showMobileMenu ? 'navbar__links-active' : '';

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="navbar__logo">
            <img src="/img/logo192.jpg" alt="Varsha Panchal Logo" />
          </a>
          <ul className={`navbar__links ${activeLinksClassName}`}>
            {navLinks.map(({ name, href }) => (
              <li
                key={name}
                onClick={() => {
                  setShowMobileMenu(false);
                }}
                className="navbar__link"
              >
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
          <div
            className="navbar__hamburger"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
