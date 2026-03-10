//métado string: trim
const textoEspacado = " Essa é uma string com espaços em branco ";

const textoSemEspacos = textoEspacado.trim();

console.log(textoSemEspacos);

//métado padStart
const numero = "1234";

//preencher com zeros até atingir 8 caracteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";

//Preencher com traços para atingir 5 caracteres
const codigoPreenchico = codigo.padStart(5, "-");
console.log(codigoPreenchico);

//preenchendo o final padEnd
const codigofinal = codigo.padEnd(5, "-")
console.log(codigofinal);

//Métado split - dividir uma string 
const textoT = "Essa é uma string para testar split";

//Divide a string em um array de palavras, usando espaços como operadores
const palavras = textoT.split(",");
console.log(palavras);

// divide a string em um array de 3 elemtos, usando espaços como separadores
const partes = textoT.split(" ", 3);
console.log(partes);

// Divide a string em um array de números, usando virgulas como separadores
const numeros = "1,2,3,4,5".split(",");
console.log(numeros);

//Método join
const numerosJoin = [1, 2, 3, 4, 5];

// Junta os números com virgulas como separador
const listaNumeros = numerosJoin.join("-");
console.log(listaNumeros);

// Junta os elementos de um array de strings
const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);

//métado repeat
const testandoRepeat = "Olá";

//métado repeat a string 0 vezes
const textoRepetido = testandoRepeat.repeat(3);
console.log(textoRepetido);