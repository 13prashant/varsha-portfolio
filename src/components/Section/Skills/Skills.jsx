import './Skills.scss';

const skills = [
  {
    title: 'Javascript',
    image: '/img/svg/JavaScript.svg',
  },
  {
    title: 'React',
    image: '/img/svg/React.svg',
  },
  {
    title: 'HTML5',
    image: '/img/svg/HTML5.svg',
  },
  {
    title: 'CSS3',
    image: '/img/svg/CSS3.svg',
  },
  {
    title: 'Github',
    image: '/img/svg/Github.svg',
  },
  {
    title: 'NodeJs',
    image: '/img/svg/NodeExpress.svg',
  },
];

const services = [
  {
    company: 'Shreesoftic',
    role: 'Fullstack Developer',
    serviceList: [
      'Develop an intuitive user interface for the users.',
      'Work on the integration of the demand chain system.',
      'Use of HTML5, jQuery, and CSS for the development of Views/Front End for the legacy MVC application.',
      'Apply Server-side validations in MVC Models using Data Annotations.',
      'Perform code reviews of fellow developers.',
      'Used Git for version control.',
      'Upgrade and develop new Stored Procedures as per the requirement',
      'Enhance the system modules and functionality.',
      'Consumed the API and worked on ReactJS-based UI.',
      'Collaborated with QA on deployment to different environments, and bug fixes.',
    ],
  },
  {
    company: 'Creative Werk Designs',
    role: 'Frontend Developer',
    serviceList: [
      'Created, maintain, and enhanced the websites to make them more attractive and user-friendly according to the customer’s needs using front-end and back-end web technologies',
      'Worked with different kinds of e-commerce, business, media, entertainment, and portfolio websites, and gave special attention to making them responsive and cross-browser compatible.',
      'Maintained an organized workflow using a version control system tool like GitHub.',
      'Performed CMS Services like PSD/HTML to WordPress and WordPress theme customization.',
      'Communicate technical issues in an understandable manner to the team and clients',
      'Demonstrated the ability to work diligently under pressure to meet deadlines',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="s2">
      <div className="container">
        <div className="skills wrapper">
          <h1 className="heading">Skills</h1>
          <p>What I do</p>
          <div className="card">
            {skills.map(({ title, image }) => (
              <div key={title} className="skill-img">
                <div className="img-text">
                  <img src={image} alt={title} />
                  <p>JavaScript</p>
                </div>
              </div>
            ))}
          </div>

          <div className="service">
            <h1 className="heading">Work Experience</h1>
            <p>What I can do</p>
            <div className="service-containers">
              {services.map(({ company, role, serviceList }) => (
                <div key={company} className="service-container">
                  <div className="service__head">
                    <h3>{company}</h3>
                    <small className="services__item-desc">{role}</small>
                  </div>
                  <div className="service_list">
                    {serviceList.map((service, index) => (
                      <div key={index} className="service__list-icon">
                        <img src="img/svg/checkarrow.svg" alt="checkarrow" />
                        <p className="description">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
