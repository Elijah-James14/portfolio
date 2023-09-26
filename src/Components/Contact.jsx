import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <section style={{ textAlign: "center" }}>
      <p>Get in touch</p>
      <h2>Contact Me</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div>
          <AiOutlineMail size={20} color="black" />
        </div>
        <div>
          <a
            href="mailto:elijah.jamesmay14@gmail.com"
            target="_blank"
            style={{ color: "black" }}
          >
            Email Me
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
          marginBottom: 50,
        }}
      >
        <div>
          <BsTwitter size={20} color="black" />
        </div>
        <div>
          <a
            href="https://twitter.com/Iniery1"
            target="_blank"
            style={{ color: "black" }}
          >
            Message me
          </a>
        </div>
      </div>

      <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </section>
  );
};

export default Contact;
