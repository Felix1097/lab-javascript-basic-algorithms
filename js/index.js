// Iteration 1: Names and Input
const hacker1 = 'XXXXXX'
    console.log(`the driver name is ${hacker1}`)

const hacker2 = 'YYYYY'
    console.log(`the navigator's name is ${hacker2}`)





// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters  `)
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const name = 'John';

const uppercased = name.toUpperCase()
let resultado = ' '

for (let i = 0; i < name.length;  i++){
    resultado += uppercased[i] + ' '
}
console.log(resultado)




const nombre = 'john'
let resul = ''
for (let i = nombre.length - 1 ; i >= 0 ; i--){
    resul += nombre [i]
}
console.log(resul)




const driver = 'driver'
const navigator = 'navigator'

if (driver.length > navigator.length){
    console.log(`The driver's name goes first.`)
} else if (driver.length < navigator.length){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log(`What?! You both have the same name?`)
}



//Bonus time!

const texto1 = `¿Qué es Lorem Ipsum?
Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum.`


const texto2 = `¿Por qué lo usamos?
Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, a diferencia de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web que aún están en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y cosas por el estilo).`

const texto3 = `¿Dónde puedo conseguir algunas?
Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alteraciones de alguna forma, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si vas a usar un pasaje de Lorem Ipsum, debes asegurarte de que no haya nada vergonzoso escondido en medio del texto. Todos los generadores de Lorem Ipsum en Internet tienden a repetir fragmentos predefinidos según sea necesario, lo que lo convierte en el primer generador verdadero en Internet. Utiliza un diccionario de más de 200 palabras latinas, combinado con un puñado de estructuras de oraciones modelo, para generar Lorem Ipsum que parece razonable. Por lo tanto, el Lorem Ipsum generado siempre está libre de repeticiones, humor inyectado o palabras no características, etc.`


console.log(texto1.length);

let result = ''
for (let i = 0; i < texto1.length; i++){
    result += texto1[i]
}
console.log(result)

