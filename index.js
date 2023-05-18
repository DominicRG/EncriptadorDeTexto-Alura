//Elementos HTML
const cajaTexto = document.querySelector('.caja-texto');
const textoResultado = document.querySelector('.text-resultado');
const mensajeNoEncontrado = document.querySelector('.msj-no-encontrado');
const botonEncriptar = document.querySelector('.boton-encriptar');
const botonDesencriptar = document.querySelector('.boton-desencriptar');
const botonCopiar = document.querySelector('.boton-copiar');
const contenedorImagenMuñeco = document.querySelector('.container-imagen-muñeco');
const contenedorParrafo = document.querySelector('.container-parrafo');
const contenedorParrafoResultado = document.querySelector('.container-parrafo-resultado');
const contenedorCopiar = document.querySelector('.container-copiar');

//Funcion Encriptar
function encriptar(){
    var texto = cajaTexto.value;
    if(texto.trim() == ''){
        alert('Caja vacia');
    }else{
        //Ocultando-VistaSinResultado
        contenedorImagenMuñeco.classList.add('ocultar');
        mensajeNoEncontrado.classList.add('ocultar');
        contenedorParrafo.classList.add('ocultar');
        //Mostrando-CamposDeResultado
        contenedorParrafoResultado.classList.remove('ocultar');
        contenedorCopiar.classList.remove('ocultar');
        botonCopiar.classList.remove('ocultar');
        
        var textoEncriptado = '';
        let obj_letters = {
            a: 'ai',
            e: 'enter',
            i: 'imes',
            o: 'ober',
            u: 'ufat',
        };

        textoEncriptado = texto.replace( /a|e|i|o|u/g, function(matched){return obj_letters[matched]});
        console.log(textoEncriptado);
        textoResultado.textContent = textoEncriptado;
    }
}

//Funcion Desencriptar
function desencriptar(){
    var texto = cajaTexto.value;
    if(texto.trim() == ''){
        alert('Caja vacia');
    }else{
        //Ocultando-VistaSinResultado
        contenedorImagenMuñeco.classList.add('ocultar');
        mensajeNoEncontrado.classList.add('ocultar');
        contenedorParrafo.classList.add('ocultar');
        //Mostrando-CamposDeResultado
        contenedorParrafoResultado.classList.remove('ocultar');
        contenedorCopiar.classList.remove('ocultar');
        botonCopiar.classList.remove('ocultar');
        
        var textoDesEncriptado = '';
        let obj_letters = {
            ai: 'a',
            enter: 'e',
            imes: 'i',
            ober: 'o',
            ufat: 'u',
        };

        textoDesEncriptado = texto.replace( /ai|enter|imes|ober|ufat/g, function(matched){return obj_letters[matched]});
        console.log(textoDesEncriptado);
        textoResultado.textContent = textoDesEncriptado;
    }
}
//Funcion CopiarEncriptado
function copiarEncriptado(){
    let textCopy = textoResultado.textContent;
    if(textCopy.trim() == ''){
        alert('Caja vacia');
    }else{
        navigator.clipboard.writeText(textCopy);
        cajaTexto.select();
        cajaTexto.focus();
    }
}
//Detectar solo introduzca minusculas y sin acentos
cajaTexto.addEventListener('input', function(){
    let textInput = cajaTexto.value;
    //Convertir a minuscula y restringir uso de caracteres especiales y tildes(acentos)
    textInput = textInput.toLowerCase().replace(/[^a-zñ\s]/g, '');
    cajaTexto.value = textInput;
})

//Ocultar elementos iniciles del section2
function ocultarIni(){
    contenedorParrafoResultado.classList.add('ocultar');
    contenedorCopiar.classList.add('ocultar');
    botonCopiar.classList.add('ocultar');
}

//Aplicar el ocultar al cargar la pagina
//window.addEventListener('load', ocultarIni);
document.addEventListener('DOMContentLoaded', ocultarIni);

//Añadir funciones a los botones
botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiarEncriptado);