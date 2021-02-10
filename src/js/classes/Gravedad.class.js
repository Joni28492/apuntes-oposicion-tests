

//esta clase se va a utiliza para las secciones 
//de los temas que tengan diferentes niveles
//la idea es mostrar la frase y 3 botones
//verde::leve      amarillo::grave       rojo::muy grave
//y si es correcta dibujarla en una tabla con su
//columna correspondiente y con codigo de colores




class Gravedad {



    constructor(texto, nivelGravedad){
        this.texto = texto;
        this.nivelGravedad = nivelGravedad;
    }

    imprimirGravedad(){
        console.log(`${this.texto} es una falta ${this.nivelGravedad}` );
    }

    static dibujarTabla(stringArr='aqui va el arr de gravedades'){

        const html=`<p>${stringArr}</p>`;
        return html;
    }

    dibujarMiniJuegoGravedad(){

    }

}




const leve1  = new Gravedad('Esta es la falta leve---', 'Leve');
const leve2  = new Gravedad('Falta_leve1','leve');
const leve3  = new Gravedad('Falta_leve2','leve');
const leve4  = new Gravedad('Falta_leve3','leve');
const leve5  = new Gravedad('Falta_leve4','leve');

const grave1 = new Gravedad ('falta grave1', 'grave');
const grave2 = new Gravedad ('falta grave2', 'grave');
const grave3 = new Gravedad ('falta grave3', 'grave');
const grave4 = new Gravedad ('falta grave4', 'grave');

const muyGrave1 = new Gravedad ('falta muy grave1', 'muy grave');
const muyGrave2 = new Gravedad ('falta muy grave2', 'muy grave');
const muyGrave3 = new Gravedad ('falta muy grave3', 'muy grave');
const muyGrave4 = new Gravedad ('falta muy grave4', 'muy grave');





const leves     = [ leve1, leve2, leve3, leve4, leve5];
const graves    = [ grave1,grave2,grave3,grave4];
const muyGraves = [muyGrave1,muyGrave2,muyGrave3, muyGrave4];
const arrGravedad =[leves, graves, muyGraves];

export {
    Gravedad,
    leves, graves, muyGraves,
    arrGravedad
    
}