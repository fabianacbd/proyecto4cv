
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { cleanPage } from "../utils/cleanPage";


export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = ProjectCard()
  };
