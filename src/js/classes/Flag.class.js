
export let respuestasArr=[];

export class FlagInput{

    
   

    //posibilidad de  aplicar Singleton

    constructor(id, pregunta, respuesta, placeHolderFormat) {

        this.id                = id;
        this.pregunta          = pregunta;
        this.respuesta         = respuesta;
        this.placeHolderFormat = placeHolderFormat;
        
    }


    crearInputFlag(){

        const html=`
            <div class="flag">
            
            <label class="text-white p-3">${this.id}. ${this.pregunta}</label>
            <input class="form-control-plaintext text-center text-white" type="text" placeholder="${this.placeHolderFormat}">
            <button type="submit" id="btn-${this.id}" class="m-2 btn btn-info">Resolver</button>
            </div>
        `;

        respuestasArr.push(this.respuesta);
       

        

        return html;
    }
    submitFlag(){}
    
    //devuelve true o false en funcion de la respuesta del usuario
    //que es el input.value, expresion ternaria
    comprobarFlag(respuestaUsuario){ return respuestaUsuario == this.respuesta && true ; }

    
    dibujarResultado(){}


}