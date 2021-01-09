
class FlagInput{

    constructor(id, pregunta, respuesta, placeHolderFormat) {

        this.id                = id;
        this.pregunta          = pregunta;
        this.respuesta         = respuesta;
        this.placeHolderFormat = placeHolderFormat
    }


    crearInputFlag(){

        const html=`
            <div class="flag">
            
            ${this.id}. ${this.pregunta}
            <input type="text" placeholder="${this.placeHolderFormat}">
            <button class="btn btn-info">Resolver</button>
            </div>
        `;


    }
    submitFlag(){}
    comprobarFlag(respuesta, solucion){

        if (respuesta === solucion) {
            return true;
        } else {
            return false;
        }

    }
    dibujarResultado(){}


}