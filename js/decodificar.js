
    var btnCripitografar = document.querySelector(".btn-crip");
    var btnDescriptografar = document.querySelector(".btn-descrip");
    var div = document.getElementById("no-mensage");
    var divConvertida = document.querySelector(".texto-exibido")
    var texto = document.querySelector("textarea");
    var paragrafo = document.getElementById("meuParagrafo");


    function ocultarDiv() {
        divConvertida.style.display = "flex";
        div.style.display = "none";
        return 
      }

      function mostrarDiv() {
        divConvertida.style.display = "none";
        div.style.display = "block";
        return 
      }

      function atualizarParagrafo(texto) {
        var paragrafo = document.querySelector(".texto-exibido > p")
        paragrafo.innerText = texto;
      }


       
    btnCripitografar.addEventListener("click", criptografar) 
    btnDescriptografar.addEventListener("click", descriptografar)
    
    function criptografar() {

        if (texto.value == "") {
            mostrarDiv()
        } else if (texto.value == " ") {
            atualizarParagrafo("não é possivel codificar um espaço")
            paragrafo.style.width = "90px"

            console.log("não é possivel codificar um espaço")

        } else {
            var textoOriginal = document.querySelector('textarea').value;
            var textoCriptografado = textoOriginal
              .replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
              console.log(textoCriptografado);
    
              atualizarParagrafo(textoCriptografado)  
              ocultarDiv()
        }
      }

      function descriptografar() {
        var textoCriptografado = document.querySelector('textarea').value;
        var textoOriginal = textoCriptografado
          .replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ai/g, "a")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u");
          atualizarParagrafo(textoOriginal)  
          ocultarDiv()
      } 


    function copiarTexto() {

        var texto = paragrafo.innerText;
      
        navigator.clipboard.writeText(texto)
          .then(function() {
            alert("Texto copiado: " + texto);
          })
          .catch(function(error) {
            console.error("Erro ao copiar texto: ", error);
          });
      }





      

    