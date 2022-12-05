import './Home.scss';

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="wrapper home__wrapper">
        <div className="container">
          <div className="home__title">
            <h3>Hello, my name is</h3>
            <h2>Varsha Panchal</h2>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Full-stack Developer</div>
                <div className="title-item">Web Developer</div>
                <div className="title-item">Creative</div>
                <div className="title-item">Software Developer</div>
                <div className="title-item">Javascript Expert</div>
              </div>
            </div>
            <div className="home__connect">
              <a
                href="https://wa.me/5147060363"
                rel="noreferrer"
                target="_blank"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
