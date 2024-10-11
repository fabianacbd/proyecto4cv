import "./Contact.css";
import { cleanPage } from "../utils/cleanPage";

import data from "../../data/data";

export const Contact = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <div class="container-contactame">
    <h1>Contactame</h1>
    <p>Para más información, puedes enviarme un correo a <a href="mailto:${data.email}" target="_blank">${data.email}</a></p>
    </div>
    <div class="container-form">
   <form action="/submit-form" method="POST">
    <fieldset>
        <legend>Contactame</legend>
        
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required/>

        <label for="name">Asunto:</label>
        <input type="text" id="aunto" name="name" required />
        
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <button type="submit">Enviar</button>
    </fieldset>
</form>
</div>
</div>
    
    `;
}