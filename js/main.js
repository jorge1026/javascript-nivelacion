function promedio(){

    var edad = prompt("Introduce tu edad");
if (Number(edad) == edad) {
	if (edad >= 18) {
		alert("Puedes conducir");
	}
}
else {
	alert("Introduce un numero válido"+ edad);
}
}
function notas(){
    do {
       
        var nota = prompt("Introduce tu nota");
        
        if (Number(nota) == nota) {
            if (nota > 0 && nota <= 10) {
                if (nota < 3) {
                    alert("Muy deficiente");
                }
                else if (nota < 5) {
                    alert("Insuficiete");
                }
                else if (nota < 6) {
                    alert("Suficiente");
                }
                else if (nota < 7) {
                    alert("Bien");
                }
                else if (nota < 9) {
                    alert("Notable"); 5
                }
                else if (nota >= 9) {
                    alert("Sobresaliente");
                }
            }
            else {
                alert("Nota erronea");
            }
        }
        else {
            if (nota != undefined) {
                alert("Introduce un numero valido");
            }
        }
    }while (nota != undefined);
}
function numerar(){
    var resultado = "";
    do {
        var cadena = prompt("Introduce una cadena");
        if (resultado == "") {

            resultado = resultado + cadena;
        }
        else {
            resultado = resultado + "-" + cadena;
        }
    } while (confirm("Desea seguir?"));
    alert(resultado);
}
function suma(){
    var suma = 0;
do {
    var numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
alert(suma);
}
function calcular(){
    var resto = 0;
var letra = "";
do {
    var numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
            }
        }
        alert("Numero: " + numero + ", Letra: " + letra);
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
}
function mayor(){
    var nombre1 = prompt("Nombre 1:");
    var edad1 = Number(prompt("Edad 1:"));

    var nombre2 = prompt("Nombre 2:");
    var edad2 = Number(prompt("Edad 2:"));

    var nombre3 = prompt("Nombre 3:");
    var edad3 = Number(prompt("Edad 3:"))

    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        alert("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
        alert("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
        alert("El mayor es: " + nombre3);
    }
}
function aleatrorio(){
    var num = Math.floor((Math.random() * 99) + 1);
    alert( "Estos son los numeros aleatorios"+ num);
}
function aleatoriedad(){
    var i = 0;
    var num;
    var uno = 0;
    var dos = 0;
    var tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != uno) && (num != dos) && (num != 3)) {
            alert(num + "<br>");
            i++;
            if (i == 1) {
                uno = num;
            }
            if (i == 2) {
                dos = num;
            }
            if (i == 3) {
                tres = num;
            }
        }
    } while (i < 3);
}
function peticion(){
    var texto = prompt("Introduce el texto");
    alert("TEXTO: " + texto.toUpperCase);
}
function cadenaText(){
    var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;
    var caracter;
    var i;
    for (i = 0; i < numchar; i++) {
	caracter = cadena.charAt(i); 
	if (i == numchar - 1) {
		alert(caracter);
	}
	else {
		alert(caracter + "-");
	}
    }
}
function seleccionador(){
    var cadena = prompt("Introduce un Texto que contenga paréntesis:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    var copiar = false;
        
	for (j = 0; j < numchar; j++) {
		car = cadena.charAt(j);
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            salida = salida + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    alert(salida);
}
function mezclar(){
    var cadena = prompt("Introduce un Texto:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);
        salida = car + salida;
    }
    alert(salida);
}