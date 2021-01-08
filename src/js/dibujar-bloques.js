import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from './temas-list';

const body=document.body;
let divContainer=document.querySelector('.container-fluid');


const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
            `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

const dibujarTemas = (temaArr) =>{
    
    const li = devolverListado(temaArr);
    divContainer.innerHTML=li;

    console.log(divContainer);
}




const dibujarInicio = () =>{

    const html=`
        <h1 class="text-white">Oposiciones Policia Local</h1>
        <h4 class="text-white p-2">Elige Bloque para estudiar</h4>
        <ul class="mt-2">
       ${devolverListado(bloques)}
        </ul>`;

    const testSection = `
        <hr class="bg-light">
        <button class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>
    `;


    divContainer.innerHTML=html + testSection ;
   

}


const eventos = () =>{

    const ul =document.querySelector('ul');

    ul.addEventListener('click', (event)=>{
        
        limpiarElemento(event.target.parentNode);

        let bloque=(event.target.textContent == bloques[0]) ? dibujarTemas(temasConstitucion):
                   (event.target.textContent == bloques[1]) ? dibujarTemas(temasCuerposYFuerzasSeguridad):
                   (event.target.textContent == bloques[2]) ? dibujarTemas(temasTrafico):
                   (event.target.textContent == bloques[3]) ? dibujarTemas(temasCodigoPenal):  null;
        
        if(bloque) console.log(bloque);

        //console.log(bloque);
        
        
        
    });

   

}

//limpiamos elemento capturado en el que hacemos clic
const limpiarElemento = (elem) =>{
    elem.textContent='';
}


const init = () =>{
    dibujarInicio();
    eventos();
}

export {
    init 
}