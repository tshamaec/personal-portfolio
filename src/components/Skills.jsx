import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Skills</h2>
        <p>
          My skills include coding, cybersecurity protection, project
          management, and tech support, with a strong foundation in IT and
          systems analysis.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>PHP</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Python</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Java</span> <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
