(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function f(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function d(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function e(e,a,b){return a&&d(e.prototype,a),b&&d(e,b),e}c.r(b);var h=[],g=function(){function g(a,b,c,d){f(this,g),this.id=a,this.pregunta=b,this.respuesta=c,this.placeHolderFormat=d}return e(g,[{key:'crearInputFlag',value:function(){var b='\n            <div class="flag">\n            \n            <label class="text-white p-3">'.concat(this.id,'. ').concat(this.pregunta,'</label>\n            <input class="form-control-plaintext text-center text-white" type="text" placeholder="').concat(this.placeHolderFormat,'">\n            <button type="submit" id="btn-').concat(this.id,'" class="m-2 btn btn-info">Resolver</button>\n            </div>\n        ');return h.push(this.respuesta),b}},{key:'comprobarFlag',value:function(b){return b==this.respuesta&&!0}}],[{key:'limpiarRespuestas',value:function(){h.forEach(function(b){return h.pop(b)})}}]),g}(),i=new g(0,'\xBFen que a\xF1o se creo la constitucion?','1978','19XX'),j=new g(1,'\xBFcuantos temas tiene el temario?','54','XX'),k=new g(2,'\xBFcuando se fundo la Ley Organica Proteci\xF3n de la seguridad ciudadana?','4/2015 30 marzo','X/XXXX XX mes '),l=new g(3,'\xBFcuando se fundo la Ley Organica de cuerpos y fuerza de segirudad?','2/86 13 marzo','X/XX XX mes'),m=new g(4,'la invilabilidad domiciliaria es un derecho ...','fundamental','palabra'),n=new g(5,'\xBFen que a\xF1o se creo la constitucion?','1978','19XX'),o=new g(6,'\xBFcuantos temas tiene el temario?','54','XX'),p=new g(7,'\xBFcuando se fundo la Ley Organica Proteci\xF3n de la seguridad ciudadana?','4/2015 30 marzo','X/XXXX XX mes '),q=new g(8,'\xBFen que a\xF1o se creo la constitucion?','1978','19XX'),r=new g(9,'\xBFcuantos temas tiene el temario?','54','XX'),s=[i,j,k,l,m,n,o,p,q,r],t=function(c){var d='';return c.forEach(function(b){d+=b.crearInputFlag()}),d},u=['Constituci\xF3n','Cuerpos y fuerzas de seguridad','Tr\xE1fico','C\xF3digo Penal'],v=['La Constituci\xF3n Espa\xF1ola de 1978 I','La Constituci\xF3n Espa\xF1ola de 1978 II','La Constituci\xF3n Espa\xF1ola de 1978 II','Estatuto de autonomia del Principado de Asturias','Administraci\xF3n Local','Derecho Administrativo','Acto Administrativo','Procedimiento Administrativo','Personal al servicio de las corporaciones locales','Haciendas Loacles','Historia de Asturias','Geogr\xE1fia de Asturias'],w=['Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad I','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad II','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad III','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad IV','Ley Organica 4/2015 30 Marzo, Proteci\xF3n de la seguridad ciudadana','Protecci\xF3n Civil','tema 7','tema 8','tema 9','tema 10','tema 11','tema 12'],x=['tema Trafico','tema 2','tema 3','tema 4','tema 5','tema 6','tema 7'],y=['tema Codigo Penal','tema 2','Delito de homicidio, lesiones, y contra la libertad','Torturas, integridad moral e indemnidad sexual, libertad, derecho a la propia imagen y honor','Delitos contra el patrimonio','Delitos contra la salud p\xFAblica','Delitos contra la seguridad vial','Delitos contra la administraci\xF3n P\xFAblica','Delitos contra la administracion de Justicia','Policia Local como policia judicial','Proceso Civil','Proceso contencioso Administrativo'],z=document.querySelector('#container'),A=document.querySelector('header');A.classList='text-center mt-4 p-2 mb-1';var B,C,D,E,F=function(c){var d='';return c.forEach(function(b){d+='<li class=" btn list-group-item btn-outline-primary mt-2 p-3">'.concat(b,'</li>')}),d},G=function(f){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'',b=2<arguments.length&&void 0!==arguments[2]?arguments[2]:'';h.forEach(function(b){return h.pop(b)}),console.warn(h),A.innerText='',A.innerHTML='<h1 class="text-white">'.concat(a,'</h1>\n                      <h4 class="text-white p-2">').concat(b,'</h4>');var c=F(f),d=document.createElement('button');d.classList='btn  btn-outline-primary mt-2 p-4',d.id='btn-home',d.innerText='P\xE1gina Principal',z.innerHTML=c,z.append(d)},H=function(){A.innerHTML='<h1 class="text-white">Oposiciones Policia Local</h1>\n                      <h4 class="text-white p-2">Elige Bloque para estudiar</h4>';var c='\n        '.concat(A,'\n        <ul class="">\n        ').concat(F(u),'\n        </ul>');h.forEach(function(b){return h.pop(b)});var a=t(s);z.innerHTML=c+a+'\n        <hr class="bg-light">\n        <button id="btn-test" class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>\n    '},I=function(){C=document.querySelector('ul'),B=document.querySelector('#btn-test'),C.addEventListener('click',function(c){J(c.target.parentNode);var a=c.target.textContent==u[0]?G(v,'La Constituci\xF3n Espa\xF1ola','de 1978'):c.target.textContent==u[1]?G(w,'Cuerpos y Fuerzas de seguridad','Ley Organica 2/86 13 Marzo'):c.target.textContent==u[2]?G(x,'Trafico','Trafico seguridad vial'):c.target.textContent==u[3]?G(y,'C\xF3digo Penal','CP'):null;null!==a&&(D=document.querySelector('#btn-home'),D.addEventListener('click',K))}),B.addEventListener('click',function(){console.log('Click en el boton hacer test')}),E=document.querySelectorAll('.flag'),E.forEach(function(i,a){i.children[2].addEventListener('click',function(){var b=i.children[1].value,c=h[a],d=i.children[2],e=d.parentNode,f=document.createElement('div');b?b===c?(d.classList='m-2 btn btn-success',d.textContent='Correcta',d.disabled=!0,e.removeChild(i.children[1]),f.textContent=c,f.classList='alert alert-success',e.insertBefore(f,d)):(d.classList='m-2 btn btn-danger',d.textContent='Incorrecta',setTimeout(function(){d.classList='m-2 btn btn-info',d.textContent='Resolver'},2e3)):(d.classList='m-2 btn btn-warning',d.textContent='Esta vacio introduce texto',setTimeout(function(){d.classList='m-2 btn btn-info',d.textContent='Resolver'},2e3))})})},J=function(b){b.textContent=''},K=function(){H(),I(),console.log(h)};K()}]);