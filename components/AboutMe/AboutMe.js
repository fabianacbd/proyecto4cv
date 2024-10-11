import { SobreMi } from "../SobreMi/SobreMi"
import { cleanPage } from "../utils/cleanPage";


export const AboutMe = () => {
  const main = document.querySelector("main");
  cleanPage(main);
 main.innerHTML = SobreMi()
  };