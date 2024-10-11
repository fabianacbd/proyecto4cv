import './style.css'
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { linkPage } from "./components/utils/linkPage";
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Cursos } from './components/Cursos/Cursos';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Contact } from './components/Contact/Contact';

document.querySelector("header").innerHTML = Navbar();

document.querySelector("main").innerHTML= `${Home()}
${Footer()}
`
linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#education", Cursos);
linkPage("#aboutMe", AboutMe);
linkPage("#contacto", Contact);

document.querySelector("footer").innerHTML= Footer();
