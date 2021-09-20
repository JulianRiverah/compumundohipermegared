function imc(){
    var x =parseFloat(document.getElementById('valor1').value);
    var y =parseFloat(document.getElementById('valor2').value);
    
    if(isNaN(x) && isNaN(y)){
        alert("Debe ingresar Talla y Peso");
    } else{
        document.getElementById('el-resultado').innerHTML = (y/Math.pow(x,2)).toFixed(2);   
    }
}