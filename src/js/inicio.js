import { dibujarTemasConstitucion } from "./constitucion";

const body=document.body;
let divContainer=document.querySelector('.container-fluid');

//bloques
const bloques = ['Constitución', 'Cuerpos y fuerzas de seguridad', 'Tráfico', 'Código Penal']


const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
            `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}




const dibujarInicio = () =>{

    const html=`
        <h1 class="text-white">Oposiciones Policia Local</h1>
        <h4 class="text-white p-2">Elige Bloque para estudiar</h4>
        <ul class="mt-">
       ${devolverListado(bloques)}
        </ul>`;

    divContainer.innerHTML=html;
    devolverListado(bloques);

}


const eventos = () =>{

    const ul =document.querySelector('ul');

    ul.addEventListener('click', (event)=>{
        
        let bloque=(event.target.textContent == bloques[0]) ? 1:
                   (event.target.textContent == bloques[1]) ? 2:
                   (event.target.textContent == bloques[2]) ? 3:
                   (event.target.textContent == bloques[3]) ? 4:  null;
        
        if(bloque) console.log(bloque);


        //limpiarBody();
    });

   

}

const limpiarBody = () =>{
   console.log(body);
    divContainer.textContent='';
    console.log(body);
}


const init = () =>{
    dibujarInicio();
    eventos();
}

export {
    init 
}