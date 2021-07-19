import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";

const dummyData = [
  {
    title: "moodue",
    link: "https://tmallz.github.io/moodue/",
    description:
      "Moodue is an app that allows users to search local events based on their mood. The user is able to choose either a Lively or Mellow mood and get results for concerts, events, movies, and other forms of entertainment in their area.",
  },
  {
    title: "Shoe Inventory",
    link: "https://fierce-oasis-62967.herokuapp.com/",
    description:
      "Shoe Inventory is a full-stack web application that allows users to buy or sell used high-end and designer shoes in their local area. It is the perfect platform to sell your gently used high-end shoe, or to find high-end shoes at a bargain price. Shoe Inventory is easy to use, just sign up, then post a picture and information about your shoe.",
  },
  {
    title: "Workday Scheduler",
    link: "https://smylebryte.github.io/workDayScheduler/",
    description:
      "The Workday Scheduler is a calendar application that allows the user to save events for each hour of the day. This app uses dynamically updated HTML and CSS powered by jQuery in order to display color coded timeblocks that indicate whether a timeblock is in the past, present or future.",
  },
  {
    title: "Progressive Budget",
    link: "https://still-tor-93116.herokuapp.com/",
    description:
      "This application allows users to add expenses and deposits to their budget with our without an internet connection. This gives users a way to access their budget information at anytime.",
  },
  {
    title: "E-Commerce Back End",
    link: "https://drive.google.com/file/d/1fR3k_3cBiRNogq8lpeWqCmm4Q142ZI3m/view",
    description:
      "This application demonstrates the back-end of an e-commerce site.",
  },
  {
    title: "Note Taker",
    link: "https://notetaker1446.herokuapp.com/",
    description:
      "This app allows small business owners to write and save notes in order to organize their thoughts and keep track of tasks that need to be completed.",
  },
];

export default function Projects2() {
  return (
    <div>
      <h2>Projects</h2>
      {dummyData.map((item, idx) => (
        <ProjectCard
          key={idx}
          title={item.title}
          link={item.link}
          description={item.description}
        />
      ))}
    </div>
  );
}
