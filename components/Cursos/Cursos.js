import { MisEstudios } from "../MisEstudios/MisEstudios"
import { cleanPage } from "../utils/cleanPage";


export const Cursos = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = MisEstudios()
  };