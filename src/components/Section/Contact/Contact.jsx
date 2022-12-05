import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="s2">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#AF2574" stroke="#AF2574"></path>
      </svg>
      <div className="container">
        <div className="contact wrapper">
          <div className="contact-details">
            <div>
              <h1 className="heading">Contact</h1>
              <p>
                Feel free to send me a message - I'm always happy to connect!
              </p>
            </div>

            <div className="connection">
              <div className="email">
                <svg
                  stroke="#AF2574"
                  fill="#E0C0D1"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p>varsha3051@gmail.com</p>
              </div>

              <div className="resume">
                <svg
                  stroke="#AF2574"
                  fill="#AF2574"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  className="sc-clIAKW fPKUNl"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                </svg>
                <p>Grab my resume</p>
              </div>
            </div>
            <div className="footer__socials">
              <h3>Let's be Friends</h3>
              <div className="social_icons">
                <div className="icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/varshapanchal/"
                  >
                    <FaLinkedinIn icon="fa-brands fa-linkedin-in" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/wiskeypanchal/"
                  >
                    <FiInstagram className="footer__socials-icon" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Varsha2629"
                  >
                    <BsGithub className="footer__socials-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src="img/svg/contactsImg.svg" alt="contact" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
