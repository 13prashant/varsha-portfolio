import { useEffect, useState } from 'react';
import './Footer.scss';

const Footer = () => {
  const [backToTopArrow, setbackToTopArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setbackToTopArrow(true);
      } else {
        setbackToTopArrow(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <div className="footer-text">
        <p>&copy; 2♥22 Varsha Panchal. All Rights Reserved.</p>
        <div className="arrow-up">
          {backToTopArrow && (
            <div onClick={scrollTop}>
              <img src="/img/svg/caret-circle-up.svg" alt="arrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Footer;
