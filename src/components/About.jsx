import React from "react";

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>About</h2>
        <p>
          Hi! I'm someone who enjoys the simple pleasures—like sipping on
          matcha, getting lost in good music, and binge-watching K-dramas. I
          love finding new ways to relax and dive into different stories,
          sounds, and flavors!
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="assets/img/my-profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Cybersecurity Analyst</h2>
            <p className="fst-italic py-3">
              A digital guardian responsible for protecting data and systems
              from cyber threats. Skilled in identifying vulnerabilities,
              analyzing security breaches, and implementing defense measures,
              they work to ensure data integrity, confidentiality, and
              compliance with security standards. With expertise in threat
              detection and response, a cybersecurity analyst is essential for
              securing organizations in an increasingly connected world.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Birthday:</strong> <span>4 March 2002</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong>{" "}
                    <span>www.github.com/tshamaec.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>Apalit, Pampanga</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>22</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong> <span>BSIS</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong>{" "}
                    <span>catibogtrishamae2@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              A skilled professional protecting data and systems from cyber
              threats by identifying vulnerabilities, analyzing breaches, and
              implementing security measures to ensure data integrity and
              compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
