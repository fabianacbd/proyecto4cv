import "./Navbar.css";
import data from "../../data/data";

export const Navbar = () => `
<nav>
 <a id="Home" href="#"><h1>${data.name} </h1></a>
<ul>
    <li>
        <a href="Home" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="aboutMe">About me</a>
    </li>
     <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <a href="#" id="education">Education</a>
    </li>
    <li>
        <a href="#" id="contacto">Contact</a>
    </li>
</ul>
</nav>
`;
