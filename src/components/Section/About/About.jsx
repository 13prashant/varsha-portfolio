import React from 'react';
import './About.scss';
const About = () => {
  return (
    <section id="about" className="s2">
      <div className="container">
        <div className="about wrapper">
          <h1 className="heading">Who I am</h1>
          <div className="about__content">
            <p>
              I am a detail-oriented Front-End developer with a passionate about
              what i'm doing and see every task as a challenge and an
              opportunity to get better. My diverse background in computer
              science and investing allows me to excel at logical thinking and
              creative problem-solving, allowing development to be the perfect
              field for my skill set. I love dry, responsive, accessible code
              and bring experience developing applications in Javascript, React,
              jQuery, CSS/SCSS, and HTML.
            </p>
            <img src="/img/user-photo.jpg" alt="Varsha Panchal" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
