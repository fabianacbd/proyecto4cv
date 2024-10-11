import "./SobreMi.css"
import data from "../../data/data"
import { Button } from "../Button/Button"

export const SobreMi = () =>  `<section id="about">
    <img src="${data.avatar}" alt="${data.name}" id="avatar2"/>
    <div id="bienvenida">
      <h2>Bienvenidos!</h2>
       <h3>Mi nombre es ${data.name}</h3>
      <p>${data.aboutMe}</p>
      <h3>Redes sociales: </h3>  
     <div id="redes">
${Button("github.png", "https://github.com/fabianacbd?tab=repositories")}
${Button("linkedin.png", "https://www.linkedin.com/in/fabiana-barbati-4aaa7a243/")}
${Button("mail.png","mailto:fabianabarbaticbd@gmail.com")}
</div>
      </div>
  </section>
`;
