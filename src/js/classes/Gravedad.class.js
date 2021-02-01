

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

    

}

const leve = new Gravedad('Esta es la falta leve---', 'Leve');


export {
    Gravedad,
    leve
}