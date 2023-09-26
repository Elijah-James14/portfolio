import "../styles/heroSection.css";
import ProfilePic from "../assets/2.png";
import { AiFillGithub } from "react-icons/ai";

const HeroSection = () => {
  return (
    <>
      <section className="profile">
        <div className="pic-container">
          <img src={ProfilePic} alt="profile-pic" className="profile-pic" />
        </div>
        <div className="profile-info">
          <p>Hello, I'm</p>
          <h2>Elijah James</h2>
          <h4>Frontend Web Developer</h4>
          <a
            href="https://github.com/Elijah-James14?tab=repositories"
            target="_blank"
          >
            <AiFillGithub
              size={50}
              color="black"
              style={{ alignSelf: "center", cursor: "pointer" }}
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
