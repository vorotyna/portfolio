"use client"; // Rendered client-side. Specified because using onClick handler

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { onButtonClick } from "@/app/utils/scrollOnClick";
import Title from "../Title";
import Project from "./Project";

// Component renders all the projects for the projects section of page

const Projects: React.FC = () => {
  return (
    <div
      className="flex flex-col relative mobile:pt-14 pt-10 items-center"
      id="projects"
    >
      <Title header="Featured projects" description="What I Have Built." />
      <Project
        name="Blobs.io"
        github="https://github.com/vorotyna/agar.io"
        description="A multiplayer game involving Blobs and food!"
        image="/blobs.png"
        list={[
          "p5.js || JavaScript || Socket.IO || Node.js",
          "A multiplayer game built with p5.js for a more simplified creative coding process and interactive project",
          "Features the use of Socket.IO, which allows real-time, bidirectional communication between multiple clients and server",
        ]}
      />
      <Project
        name="portfolio"
        github="https://github.com/vorotyna/portfolio"
        figma="https://www.figma.com/file/G9az26cjkxFStTtFrHo8gg/Portfolio-Website?type=design&node-id=0%3A1&t=wSmKU0nVj6nX0Em2-1"
        description="My personal portfolio showcases many of my projects and allows you to get to know me a little bit better!"
        image="/website.png"
        list={[
          "Next.js || TypeScript || tailwindCSS",
          "A responsive (mobile or desktop) single-page web application featuring the use of CSS grid",
          "Designed and prototyped in Figma, perfected in code",
        ]}
      />
      <Project
        name="readroster"
        github="https://github.com/vorotyna/read-roster"
        description="Never pay an overdue library book fee again! A full-stack application made to track and create various alert types for your checked out library books."
        image="/readroster.png"
        list={[
          "PostgreSQL || Express.js || Node.js || React",
          "Login and authentication system for users to access their book roster again",
          "Features the use of the Twilio API, Mailgun API and Cloudinary API",
        ]}
      />
      <Project
        name="sportami"
        github="https://github.com/vorotyna/sportami"
        figma="https://www.figma.com/file/67tllZEAW8npzQ1tGExyjm/Sportami-(LHL-Project)-(Copy)?type=whiteboard&t=cdjDFNWtC2Idyfa8-1"
        description="A mobile networking application that allows a user to find opponents for their next two-player sports match."
        image="/sportami.png"
        list={[
          "PostgreSQL || Express.js || Node.js || React",
          "Features a filter bar that allows you to filter through potential opponents based on your preferred criteria",
          "After a match, leave a sportsmanship rating of your opponent for others to see",
        ]}
      />
      <Project
        name="nonna on the go"
        github="https://github.com/vorotyna/granny-on-the-go"
        description="A food ordering service that allows you to order delicious homemade dishes from local Nonna Maria. Featuring a rustic-looking website design."
        image="/nonna.png"
        list={[
          "PostgreSQL || Express.js || Node.js || JavaScript || SCSS || EJS",
          "Features the use of the Twilio API to send and receive text message alerts about your order",
          "A rustic-looking frontend design built with EJS and SCSS to give the user a vintage experience",
        ]}
      />
      <button
        className="mb-[50px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] w-[50px] h-[50px] rounded-full hover:scale-110 transition-all duration-300 "
        onClick={onButtonClick}
        data-go-to="home"
      >
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          className="text-[#777CFC] fa-lg hover:fa-xl"
        />
      </button>
    </div>
  );
};

export default Projects;
