import fsp from 'node:fps/promise';
try{
 fsp.writeFile('./texto.txt', 'Nuevo contenido')
}
catch(e){

console.log(e)
}