function encriptar(){
    var texto =document.querySelector("#texto").value;
    var incertar = document.querySelector("#seccion-2-texto");
    var a =document.querySelector("#cuadro");




    var textoencriptado =texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    console.log(textoencriptado);

    if(textoencriptado.length != 0){
        texto = textoencriptado;
        incertar.textContent= textoencriptado;
        a =document.getElementById('cuadro').style.display= "none";
        boton =document.getElementById('copiar').style.display= "block";
        
    
    };

}

function desencriptar(){

    var texto = document.querySelector("#texto").value;
    var incertar = document.querySelector("#seccion-2-texto");
    var a =document.querySelector("#cuadro");
    var boton = document.querySelector("#copiar");
   

    var textodesencriptado= texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      console.log(textodesencriptado);

    if(textodesencriptado.length != 0){
        texto = textodesencriptado;
        incertar.textContent = textodesencriptado;
        a =document.getElementById('cuadro').style.display= "none";
        boton =document.getElementById('copiar').style.display= "block";

    };
}

function copiar(){
  var textocopiado = document.getElementById("seccion-2-texto");
  var botonn = document.getElementById('copiar');

  navigator.clipboard.writeText(textocopiado.textContent);
  botonn.textContent='copiado';

}

