import { FlagInput } from "../classes/Flag.class";

//en este archivo crearemos todas las flags que necesitemos

 const  
        pruebaFlag1        = new FlagInput(0, '¿en que año se creo la constitucion?', '1978', '19XX'),
        pruebaFlag2        = new FlagInput(1, '¿cuantos temas tiene el temario?', '54', 'XX'),
        pruebaFlag3        = new FlagInput(2, '¿cuando se fundo la Ley Organica Proteción de la seguridad ciudadana?', '4/2015 30 marzo', 'X/XXXX XX mes '),
        pruebaFlag4        = new FlagInput(3, '¿cuando se fundo la Ley Organica de cuerpos y fuerza de segirudad?', '2/86 13 marzo', 'X/XX XX mes'),
        pruebaFlag5        = new FlagInput(4, 'la invilabilidad domiciliaria es un derecho ...', 'fundamental', 'palabra'),
        pruebaFlag6        = new FlagInput(5, '¿en que año se creo la constitucion?', '1978', '19XX'),
        pruebaFlag7        = new FlagInput(6, '¿cuantos temas tiene el temario?', '54', 'XX'),
        pruebaFlag8        = new FlagInput(7, '¿cuando se fundo la Ley Organica Proteción de la seguridad ciudadana?', '4/2015 30 marzo', 'X/XXXX XX mes '),
        pruebaFlag9        = new FlagInput(8, '¿en que año se creo la constitucion?', '1978', '19XX'),
        pruebaFlag10       = new FlagInput(9, '¿cuantos temas tiene el temario?', '54', 'XX');
       
    

const arrHtmlFlag =[pruebaFlag1, pruebaFlag2, pruebaFlag3,pruebaFlag4, pruebaFlag5,  pruebaFlag6,  pruebaFlag7,  pruebaFlag8,  pruebaFlag9,  pruebaFlag10 ];


//llama a cada elemento del array que le pasemos para dibujar sus flags
const flagHtmlFull = (arr)=>{

        let html='';
        arr.forEach(element => { html += element.crearInputFlag(); });
        return html;
}


export{
        flagHtmlFull,
        arrHtmlFlag
}