import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Resume</h2>
        <p>
          Information and Communication Technology (ICT) professional with a
          solid foundation in networking, programming, database management,
          cybersecurity, cloud computing, and technical support. Skilled in
          managing complex IT projects, troubleshooting technical issues, and
          delivering comprehensive solutions to enhance business operations and
          user experiences.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Trisha Mae Catibog</h4>
              <p>
                <em>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas
                </em>
              </p>
              <ul>
                <li>Ugong, Valenzuela</li>
                <li>123-456-7890</li>
                <li>trishamae@gmail.com</li>
              </ul>
            </div>
            {/* Edn Resume Item */}
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Associate in Computer Technology</h4>
              <h5>2022-2024</h5>
              <p>
                <em>La Verdad Christian College</em>
              </p>
              <p>
                An Associate in Computer Technology is a two-year program that
                provides foundational skills in IT, including programming,
                network management, and technical support, preparing graduates
                for entry-level tech roles or further study.
              </p>
            </div>
            {/* Edn Resume Item */}
            <div className="resume-item">
              <h4>Bachelor of Science in Information Systems</h4>
              <h5>2024 - Present</h5>
              <p>
                <em>La Verdad Christian College</em>
              </p>
              <p>
                A Bachelor of Science in Information Systems (BSIS) is the
                program combines courses in information technology, data
                management, business analysis, and systems development to train
                students in designing, implementing, and managing information
                systems that support business goals.
              </p>
            </div>
            {/* Edn Resume Item */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>2019-2021</h5>
              <p>
                <em>Melbourne, Australia </em>
              </p>
              <ul>
                <li>
                  Developed and maintained software applications using Python
                  and Java, contributing to projects that improved operational
                  efficiency by [%].
                </li>
                <li>
                  Collaborated with cross-functional teams to design and
                  implement new features, using version control systems like
                  Git.
                </li>
                <li>
                  Conducted code reviews and provided support for bug fixes and
                  updates.
                </li>
              </ul>
            </div>
            {/* Edn Resume Item */}
            <div className="resume-item">
              <h4>Cybersecurity Analyst</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Paris, FranceY</em>
              </p>
              <ul>
                <li>
                  Performed vulnerability assessments and implemented firewall
                  and encryption protocols, reducing security incidents by [%].
                </li>
                <li>
                  Conducted risk assessments, provided security training for
                  end-users, and monitored system activity for unusual behavior.
                </li>
                <li>
                  Managed antivirus and SIEM tools to maintain compliance with
                  company security policies.
                </li>
              </ul>
            </div>
            {/* Edn Resume Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
