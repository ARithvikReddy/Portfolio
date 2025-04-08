import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import myImg2 from "../../Assets/img2.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isRotating, setIsRotating] = useState(false);

  const handleImageClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsFirstImage(!isFirstImage);
      setIsRotating(false);
    }, 300);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about software development and problem-solving, always eager to learn and build innovative solutions.
              <br />
              <br />I have experience working with
              <i>
                <b className="purple"> JavaScript, React.js, Next.js, Node.js, MongoDB, Python, and Java.</b>
              </i>
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple"> Web Development, AI/ML, and optimizing system performance.</b>
              </i>
              <br />
              <br />
              I enjoy developing modern web applications using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">{" "}advanced JavaScript frameworks like React.js and Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={isFirstImage ? myImg : myImg2}
                className={`img-fluid my-avatar-img ${isRotating ? "image-rotate" : ""}`}
                alt="avatar"
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ARithvikReddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/a-rithvik-reddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alimineti_rithvik_reddy?igsh=bXZkY25hanp4bmtz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
