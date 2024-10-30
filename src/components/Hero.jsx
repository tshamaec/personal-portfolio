import heroImage from "../images/Hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroImage} alt="" />
      <div className="container">
        <h2>Trisha Mae</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          >
            Analyst
          </span>
          <div>
            <a href="public\Blue Simple Professional Resume.pdf" className="tris">Download CV</a>
          </div>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          />
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          />
        </p>
      </div>
    </section>
  );
};
export default Hero;
