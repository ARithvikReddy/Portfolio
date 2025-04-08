import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">A. Rithvik Reddy </span> 
            from <span className="purple">Telangana, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science 
            (Artificial Intelligence & Machine Learning) at <span className="purple">VNRVJIET</span>.
            <br />
            I have a strong passion for software development, problem-solving, 
            and working on innovative projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crypto Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess & Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring & Volunteering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Rithvik Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
