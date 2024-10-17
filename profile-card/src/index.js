import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/*Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.JPG" alt="Khushi" />;
}

function Intro() {
  return (
    <div>
      <h1>Khushi Agrawal</h1>
      <p>
        a Computer Science graduate with hands-on experience in software
        development from my internship as a Graduate Engineer Trainee at AU
        Small Finance Bank, where I worked with technologies like Nagios, Active
        Directory, and Accops. I have a strong passion for Android development
        and have completed projects in Java, along with solving over 150 Data
        Structures and Algorithms problems on platforms like LeetCode and Coding
        Ninja. I'm driven by continuous learning and growth in the development
        field.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💕" color="#123456" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Android" emoji="😊" color="yellow" />
      <Skill skill="Java" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
