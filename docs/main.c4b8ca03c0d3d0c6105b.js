(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';c.r(b);var d=document.body,e=document.querySelector('.container-fluid'),f=['Constituci\xF3n','Cuerpos y fuerzas de seguridad','Tr\xE1fico','C\xF3digo Penal'],g=['La Constituci\xF3n Espa\xF1ola de 1978 I','La Constituci\xF3n Espa\xF1ola de 1978 II','La Constituci\xF3n Espa\xF1ola de 1978 II','Estatuto de autonomia del Principado de Asturias','Administraci\xF3n Local','Derecho Administrativo','Acto Administrativo','Procedimiento Administrativo','Personal al servicio de las corporaciones locales','Haciendas Loacles','Historia de Asturias','Geogr\xE1fia de Asturias'],h=['Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad I','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad II','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad III','Ley Organica 2/86 13 Marzo, Cuerpos y Fuerzas de Seguridad IV','Ley Organica 4/2015 30 Marzo, Proteci\xF3n de la seguridad ciudadana','Protecci\xF3n Civil','tema 7','tema 8','tema 9','tema 10','tema 11','tema 12'],i=['tema Trafico','tema 2','tema 3','tema 4','tema 5','tema 6','tema 7'],j=['tema Codigo Penal','tema 2','Delito de homicidio, lesiones, y contra la libertad','Torturas, integridad moral e indemnidad sexual, libertad, derecho a la propia imagen y honor','Delitos contra el patrimonio','Delitos contra la salud p\xFAblica','Delitos contra la seguridad vial','Delitos contra la administraci\xF3n P\xFAblica','Delitos contra la administracion de Justicia','Policia Local como policia judicial','Proceso Civil','Proceso contencioso Administrativo'],k=function(c){var d='';return c.forEach(function(b){d+='<li class=" btn list-group-item btn-outline-primary mt-2 p-3">'.concat(b,'</li>')}),d},l=function(c){var a=k(c);e.innerHTML=a,console.log(e)},m=function(){var b='\n        <h1 class="text-white">Oposiciones Policia Local</h1>\n        <h4 class="text-white p-2">Elige Bloque para estudiar</h4>\n        <ul class="mt-2">\n       '.concat(k(f),'\n        </ul>');e.innerHTML=b,k(f)},n=function(){var b=document.querySelector('ul');b.addEventListener('click',function(c){o(c.target.parentNode);var a=c.target.textContent==f[0]?l(g):c.target.textContent==f[1]?l(h):c.target.textContent==f[2]?l(i):c.target.textContent==f[3]?l(j):null;a&&console.log(a)})},o=function(b){b.textContent=''};(function(){m(),n()})()}]);