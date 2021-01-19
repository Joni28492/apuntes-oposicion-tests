import {  respuestasArr } from './classes/Flag.class';
import { pruebaFlag1, pruebaFlag10, pruebaFlag11, pruebaFlag2, pruebaFlag3, pruebaFlag4, pruebaFlag5, pruebaFlag6, pruebaFlag7, pruebaFlag8, pruebaFlag9, pruebaFlagDatabase } from './db/flags.db';
import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from './temas-list';




let divContainer = document.querySelector('#container');
let header = document.querySelector('header');
let btnTests, ul, btnHome;
header.classList='text-center mt-4 p-2 mb-1';

let flagList;



//Esta funcion captura un array con los temarios y devulve 
//una cadena de li con esos valores
const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
        `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

//inyecta en el html los temas que le pasemos con un array 
//utilizando la funcion devolverListado() en funcion del tema
//tenemos titulo y subtitulo como parametro vacios por defecto
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

    
}



//dibujamos los bloques de los temas 
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


    //inicializamos diferentes Flags, 
    //posible refactorizacion, utilizando objetos literales para asignarle 
    //el id del valor 
  
    const flagHtml1=pruebaFlag1.crearInputFlag(),
          flagHtml2=pruebaFlag2.crearInputFlag(),
          flagHtml3=pruebaFlag3.crearInputFlag(),
          flagHtml4=pruebaFlag4.crearInputFlag(),
          flagHtml5=pruebaFlag5.crearInputFlag(),
          flagHtml6=pruebaFlag6.crearInputFlag(),
          flagHtml7=pruebaFlag7.crearInputFlag(),
          flagHtml8=pruebaFlag8.crearInputFlag(),
          flagHtml9=pruebaFlag9.crearInputFlag(),
          flagHtml10=pruebaFlag10.crearInputFlag(),
          flagHtml11=pruebaFlag11.crearInputFlag(),
          flagHtml12=pruebaFlagDatabase.crearInputFlag();
    
    const flagListAdd=flagHtml1 + flagHtml2 + flagHtml3 + flagHtml4 + flagHtml5 + flagHtml6 + flagHtml7 + flagHtml8 +
                      flagHtml9 + flagHtml10 + flagHtml11 + flagHtml12;
    
    //console.log(flagHtml);//Funciona perfectamente

    divContainer.innerHTML=html + flagListAdd  + testSection ;
   

}


const eventos = () =>{

    ul =document.querySelector('ul');
    btnTests = document.querySelector('#btn-test');
    


    //EVENTO del listado de bloques(PAGINA INICIAL)
    ul.addEventListener('click', (event)=>{
        
        limpiarElemento(event.target.parentNode);

        let bloque=
            (event.target.textContent == bloques[0]) 
            ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978'):
            (event.target.textContent == bloques[1]) 
            ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
            (event.target.textContent == bloques[2]) 
            ? dibujarTemas(temasTrafico, 'Trafico', 'Trafico seguridad vial'):
            (event.target.textContent == bloques[3]) 
            ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'):  null;
    
        if(bloque!==null) {
            //capturamos el btn Home para volver al inicio
            btnHome=document.querySelector('#btn-home');
            btnHome.addEventListener('click', init);
        };

    });

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 

    //EVENTO del btn-test para los test
    btnTests.addEventListener('click', ()=>{
        console.log('Click en el boton hacer test');
    });

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 


    // selector flags
    flagList=document.querySelectorAll('.flag');
   
    //eventos flags
    //childre[0]:: label pregunta     childre[1]:: input        childre[2]::Button 
    flagList.forEach( (element, index) => {


        element.children[2].addEventListener('click', (event)=>{
            //console.log(`boton de flag, el id del boton es ${element.children[2].id}`);
            const   input    =element.children[1].value,
                    respuesta=respuestasArr[index],
                    btn      = element.children[2],
                    parent   = btn.parentNode,
                    divAlert =document.createElement('div');
            
           if (!input) {
            
                btn.classList="m-2 btn btn-warning";
                btn.textContent="Esta vacio introduce texto";

                setTimeout(() => {
                    btn.classList="m-2 btn btn-info";
                    btn.textContent="Resolver";
                }, 2000);

           }else{
                if (input === respuesta) {
                    btn.classList="m-2 btn btn-success";
                    btn.textContent="Correcta";
                    btn.disabled=true;

                    parent.removeChild(element.children[1]);

                    divAlert.textContent=respuesta;
                    divAlert.classList="alert alert-success";
                    
                    parent.insertBefore(divAlert, btn );

                    console.warn("correcta");
                }else{
                    btn.classList="m-2 btn btn-danger";
                    btn.textContent="Incorrecta";
                    console.warn("incorrecta");

                    setTimeout(() => {
                        btn.classList="m-2 btn btn-info";
                        btn.textContent="Resolver";
                    }, 2000);
                }
           }//cierre ifelse padre

          
        });//fin de los input de las flags
        
    });//fin de foreach FlagList


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