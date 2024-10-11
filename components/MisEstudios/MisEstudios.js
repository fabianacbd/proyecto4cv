import "./MisEstudios.css";
import data from "../../data/data";
const { workExperience } = data;


 export const MisEstudios = () => `
  <section id="cards">
    <ul>
    ${workExperience.map((card) => `
    <li id="experience">
      <h3>${card.position}</h3>
      <h4>${card.company}</h4>
      <p id="textedu">${card.description}</p>
    </li>
    `).join("")}
    </ul>
  </section>
`

