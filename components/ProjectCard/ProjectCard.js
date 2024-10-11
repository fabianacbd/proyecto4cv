import "./ProjectCard.css"
import data from "../../data/data"
const { projects } = data;


export const ProjectCard = () =>  `
<h2>Recent Projects</h2>
  <section id="project">
    <ul id="uele">
    ${projects.map((project) => `
    <li id="proyecto">
    <img src="${project.preview}" alt="${project.title}" id="fotoproyectos"/>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link} id="ver">Ver proyecto</a>
    </li>
    `).join("")}
    </ul>
  </section>
`;
