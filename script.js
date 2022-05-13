const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar(){
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringEncriptacion){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringEncriptacion = StringEncriptacion.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
        if(StringEncriptacion.includes(matrizCodigo[i][0])){
            StringEncriptacion = StringEncriptacion.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringEncriptacion;
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputText.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(StringDesencriptar){
    let matrizCodigoD = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    
    for(let i= 0; i < matrizCodigoD.length; i++){
        if(StringDesencriptar.includes(matrizCodigoD[i][0])){
            StringDesencriptar = StringDesencriptar.replaceAll(matrizCodigoD[i][0],matrizCodigoD[i][1])
        }
    }
    return StringDesencriptar;
}

/*const mensaje = document.querySelector(".input-text-area");   */


function copy(){
    var content = document.querySelector(".input-text-area");
    content.select();
    document.execCommand("copy");
    alert("copia exitosa!!");

}




  