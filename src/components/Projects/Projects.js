import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/heart.jpg";
import editor from "../../Assets/Projects/smart.png";
import chatify from "../../Assets/Projects/todo.png";
import suicide from "../../Assets/Projects/ecommerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="To-Do List"
              description="A simple and intuitive to-do list website that helps you stay organized by allowing you to create, manage, and track your daily tasks. Add, edit, and delete tasks easily, and mark them as completed to boost your productivity."
              ghLink="https://github.com/ARithvikReddy/To-Do-list-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Attendance System"
              description="Automated Smart Attendance System leveraging facial recognition and real-time data analytics to streamline attendance tracking in academic and corporate environments. Built for scalability, security, and seamless integration into modern digital ecosystems."
              ghLink="https://github.com/ARithvikReddy/smart-attendance-system"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/ARithvikReddy/Plant-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-commerce"
              description="Discover a seamless shopping experience with our e-commerce platform – offering top-quality products, fast delivery, and unbeatable deals, all in one place!"
              ghLink="https://github.com/ARithvikReddy/Ecommerce-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Heart Disease Prediction Using ECG Images"
              description="A deep learning-powered web app for heartbeat classification using ECG images. Upload an ECG image and instantly detect arrhythmia types with our CNN-based model for accurate and efficient heart health analysis."
              ghLink="https://github.com/ARithvikReddy/Heart_Disease_Prediction_Using_ECG_Images-main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
