import Ebook from "../assets/ebook.png";
import wordCounter from "../assets/wordCounter.png";
import Movie from "../assets/movie.png";
import "../styles/projectContainer.css";

const Projects = () => {
  return (
    <section style={{ padding: 10 }}>
      <p style={{ textAlign: "center" }}>Browse my recent</p>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="project-container">
        <div className="project">
          <img
            src={Ebook}
            alt=""
            style={{ widows: "300px", height: "300px", objectFit: "cover" }}
          />
          <h4>Project One</h4>
          <p>ShopBooks: An Ebook Store</p>
          <a href="https://github.com/Elijah-James14/shopbooks" target="_blank">
            <button
              style={{
                marginRight: 10,
                backgroundColor: "white",
                color: "black",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Github
            </button>
          </a>
          <a href="https://shopbooks.vercel.app" target="_blank">
            <button
              style={{
                backgroundColor: "#D434FE",
                color: "white",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Live Demo
            </button>
          </a>
        </div>
        <div className="project">
          <img
            src={Movie}
            alt=""
            style={{ widows: "300px", height: "300px", objectFit: "cover" }}
          />
          <h4>Project Two</h4>
          <p>Movie App: Shows a movie collection</p>
          <a href="https://github.com/Elijah-James14/movie" target="_blank">
            <button
              style={{
                marginRight: 10,
                backgroundColor: "white",
                color: "black",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Github
            </button>
          </a>
          <a href="https://movie-one-sooty.vercel.app/" target="_blank">
            <button
              style={{
                backgroundColor: "#D434FE",
                color: "white",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Live Demo
            </button>
          </a>
        </div>
        <div className="project">
          <img
            src={wordCounter}
            alt=""
            style={{ widows: "300px", height: "300px", objectFit: "cover" }}
          />
          <h4>Project Three</h4>
          <p>
            Word and Character Counter: <br />A web app that shows <br /> the
            number of words and characters <br /> in a text
          </p>
          <a
            href="https://github.com/Elijah-James14/word-counter"
            target="_blank"
          >
            <button
              style={{
                marginRight: 10,
                backgroundColor: "white",
                color: "black",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Github
            </button>
          </a>
          <a
            href="https://word-counter-rouge.vercel.app/word-counter"
            target="_blank"
          >
            <button
              style={{
                backgroundColor: "#D434FE",
                color: "white",
                padding: 5,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Live Demo
            </button>
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
