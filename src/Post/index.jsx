/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import imagePost from "../Post/Amazon-Eero-6-Pro-3-scaled.jpg"
 
function Post (){
    return (
       <article>
           <aside>
               <figure>
                   <img src={imagePost} style={{width:'85%', height:'85%'}} alt='Algun texto'/>
               </figure>
           </aside>
           <section>
               <header>
                   <h2>Probamos el eero Pro 6 con Zigbee: una red mesh potente y solvente para los que no quieren complicaciones</h2>
               <small>por <strong>Alberto Martín</strong> <time> 14 de octubre de 2021</time></small>
               </header>
               <p>eero 6 Pro ya está disponible en España. El router más potente de Amazon con Zigbee integrado quiere ser la puerta de entrada a Internet en casa con varias propuestas, sobre el papel, fabulosas: un red mesh Wi-Fi de calidad, capacidad Gigabit y un hub integrado para el hogar conectado. ¿Cumple lo que promete? Nosotros […]</p>
           </section>
       </article>
    )
}

export {Post}