// var numero = prompt("Digite numero");
// if(numero>0){
//     alert("Numero mayor a cero");
// }else{
//     alert("Numero menor a cero")
// }

// var n1 = parseInt(prompt("Digite numero1"));
// var n2 = parseInt(prompt("Digite numero2"));

// sum = n1 + n2;
// res = n1 - n2;
// div = n1 / n2;
// mul = n1 * n2;
// pot = n1**2;


// alert("Suma: "+ sum + "\n" + "Resta: " + res + "Division: " + div + "Multiplicacion: " + mul)

var fecha = prompt("ingrese su fecha de nacimiento","dd/mm/aaaa");

var values = fecha.split("/");
var dia = values[0];
var mes = values[1];
var ano = values[2];

// alert(ano);
// alert(mes);
// alert(dia);

// Fecha actual
var fecha_hoy = new Date();
var ahora_ano = fecha_hoy.getFullYear();
var ahora_mes = fecha_hoy.getMonth();
var ahora_dia = fecha_hoy.getDay();

var anos = ahora_ano - ano;

alert(anos);
// alert(fecha_hoy);
// alert(ahora_ano);
// alert(ahora_mes);
// alert(ahora_dia);

