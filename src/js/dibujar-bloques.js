import { FlagInput } from './classes/Flag.class';
import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from './temas-list';



const body = document.body;
let divContainer = document.querySelector('#container');
let header = document.querySelector('header');
let btnTests, ul, btnHome;
header.classList='text-center mt-4 p-2 mb-1';

const pruebaFlag1= new FlagInput(1, '¿en que año se creo la constitucion?', '1978', '19XX');
const pruebaFlag2= new FlagInput(2, '¿cuantos temas tiene el temario?', '54', 'XX');
const pruebaFlag3= new FlagInput(3, '¿cuando se fundo la Ley Organica Proteción de la seguridad ciudadana?', '4/2015 30 marzo', 'X/XXXX XX mes ');
const pruebaFlag4= new FlagInput(4, '¿cuando se fundo la Ley Organica de cuerpos y fuerza de segirudad?', '2/86 13 marzo', 'X/XX XX mes');
let flagList;

const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
        `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

const dibujarTemas = (temaArr, titulo='', subtitulo='') =>{
    

    header.innerText='';
    
   
    
    header.innerHTML=`<h1 class="text-white">${titulo}</h1>
                      <h4 class="text-white p-2">${subtitulo}</h4>`;
    
    
    const li = devolverListado(temaArr);
    const btnHome = document.createElement('button');
    btnHome.classList='btn  btn-outline-primary mt-2 p-4';
    btnHome.id='btn-home';

    btnHome.innerText='Página Principal';
    divContainer.innerHTML=li;

    
    divContainer.append(btnHome);

    //console.log(divContainer);
}




const dibujarInicio = () =>{

    header.innerHTML=`<h1 class="text-white">Oposiciones Policia Local</h1>
                      <h4 class="text-white p-2">Elige Bloque para estudiar</h4>`;
    

    const html=`
        ${header}
        <ul class="">
        ${devolverListado(bloques)}
        </ul>`;

    const testSection = `
        <hr class="bg-light">
        <button id="btn-test" class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>
    `;


    //Prueba de la clase Flag
    const flagHtml1=pruebaFlag1.crearInputFlag();
    const flagHtml2=pruebaFlag2.crearInputFlag();
    const flagHtml3=pruebaFlag3.crearInputFlag();
    const flagHtml4=pruebaFlag4.crearInputFlag();
    const flagList=flagHtml1 + flagHtml2 + flagHtml3+flagHtml4;
    //console.log(flagHtml);//Funciona perfectamente

    divContainer.innerHTML=html + flagList + testSection ;
   

}


const eventos = () =>{

    ul =document.querySelector('ul');
    btnTests = document.querySelector('#btn-test');
    


    //evento del listado de bloques
    ul.addEventListener('click', (event)=>{
        
        limpiarElemento(event.target.parentNode);

        let bloque=
        (event.target.textContent == bloques[0]) 
        ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978'):
        (event.target.textContent == bloques[1]) 
        ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
        (event.target.textContent == bloques[2]) ? dibujarTemas(temasTrafico, 'Trafico', 'Trafico seguridad vial'):
        (event.target.textContent == bloques[3]) ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'):  null;
    
        if(bloque!==null) {
            //capturamos el btn Home para volver al inicio
            btnHome=document.querySelector('#btn-home');
            btnHome.addEventListener('click', init);
        };

    });

    //evento del btn-test para los test
    btnTests.addEventListener('click', ()=>{
        console.log('Click en el boton hacer test');
    });

    //prueba eventos flag
    flagList=document.querySelectorAll('.flag');
    console.log(flagList);


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