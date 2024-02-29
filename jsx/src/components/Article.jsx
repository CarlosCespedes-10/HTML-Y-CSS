import React from 'react';
import Image3 from '../assets/Gpt.png';
import './Article.css';

function Article() {
    return (
        <div className="container">
            <div className="article">
                <h1>La empresa OpenAI, la casa de ChatGPT, estaría cotizada en más de 312 billones de pesos</h1>
                <div className="image">
                    <img src={Image3} alt="GPT" width="500" height="100"/>
                </div>
                <p>
                    A ese valor se habría llegado tras un acuerdo con inversiones, el cual exige que la empresa venda acciones existentes a inversores.
                    La 'startup' estadounidense OpenAI alcanzó un acuerdo con inversores que la llevó a valorarse en al menos 80.000 millones de dólares 
                    (más de 312 billones de pesos colombianos), según el diario The New York Times, 
                    en un año lleno de acontecimientos para el inventor del 'chatbot' ChatGPT.
                    La operación confidencial, no confirmada por OpenAI, supone que el valor de esta empresa líder en la expansiva 
                    tecnología de la inteligencia artificial (IA) 
                    casi se ha triplicado en menos de diez meses, según fuentes del diario estadounidense citadas en el informe divulgado el viernes.
                    El acuerdo exige que la empresa con sede en San Francisco (California - EE. UU.) 
                    venda acciones existentes a inversores, liderados por Thrive Capital, se indicó.
                    Ese acuerdo permite a directivos y empleados vender acciones a un precio muy favorable, tres meses después de una gran crisis 
                    que afectó a OpenAI, cuando su cofundador y jefe Sam Altman fue despedido y contratado nuevamente pocos días después por la presión de los trabajadores. 
                    OpenAI puso en línea su software de inteligencia artificial generativa ChatGPT a finales de 2022. El éxito de esta interfaz ha despertado un entusiasmo sin precedentes por esta tecnología de vanguardia, capaz de producir textos, 
                    sonidos e imágenes de asombroso realismo mediante una simple solicitud en el lenguaje cotidiano. 
                </p>
            </div>
        </div>
    );      
}  

export default Article;
