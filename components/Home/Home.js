import "./Home.css";
import { cleanPage } from "../utils/cleanPage";
import data from "../../data/data";
const { avatar } = data;


export const Home = () => {
    const main = document.querySelector("main");
  cleanPage(main);
    return `
    <section id="Home">
    <img src="${avatar}" id="avatar" alt="avatar logo" style="align-items: center"/>
   `}



