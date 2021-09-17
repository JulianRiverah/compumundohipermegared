function agregarTexto(){
    // var elementodiv = document.getElementById("contenedor");
    var elementodiv = document.querySelector('#contenedor');
    var elementoinput = document.getElementById("mi_texto");

    var texto=elementoinput.value;
    //elementodiv.innerHTML=texto;
    //elementodiv.innerHTML='<button type="button">'+texto+'</button>';
    elementodiv.innerHTML='<table><tr><th>Titulo</th></tr><tr><td>'+texto+'</td></tr></table>';

}