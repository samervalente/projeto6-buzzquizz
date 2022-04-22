 let quantidadePerguntas;
 let quantidadeNiveis;
 let url;
 let tituloQuizz;

function listarTodosQuizzes(){
    let promise = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes')
    promise.then(renderizarTodosQuizzes)
}

function renderizarTodosQuizzes(resposta){
    let todosQuizzes = document.querySelector(".quizzes")
    for(let i =0; i < resposta.data.length; i++){
        todosQuizzes.innerHTML +=  `<div class="quizz" onclick="abrirQuizz()">
        <img src="${resposta.data[i].image}">
        <p class="titulo-quizz">${resposta.data[i].title}</p>
        </div>`
        document.querySelector(".quizz").style.background.url  = `${resposta.data[i].image}`
    }
}

listarTodosQuizzes()

function criarQuizz(){
    document.querySelector(".tela1").classList.add("esconder")
    document.querySelector(".tela3-1").classList.remove("esconder")
}

function prosseguir(){
   
    if(validarInformaçõesQuizz() ){
        getInfoQuizz()
       gerarQuantidadePerguntas()
       document.querySelector(".container.tela3-1").classList.add("esconder")
       document.querySelector(".container.tela3-2").classList.remove("esconder")
    }
    
}

function validarInformaçõesQuizz(){
    tituloQuizz = document.querySelector(".tituloQuizz").value
    quantidadePerguntas = Number(document.querySelector(".QuantidadePerguntas").value)
    quantidadeNiveis = Number(document.querySelector(".QuantidadeNíveis").value)
    url = document.querySelector(".infos-quizz").querySelector(".URLImagem").value

    var pattern = /^https:\/\//i;
    if(pattern.test(url) ){
        return true
    }else{
        alert("Preencha os dados corretamente")
        return false
    }
}

function getInfoQuizz(){
    console.log(tituloQuizz)
    console.log(quantidadePerguntas)
    console.log(quantidadeNiveis)
    console.log(url)
}

let numPergunta;

function gerarQuantidadePerguntas(){
    let containerPerguntas = document.querySelector(".perguntas")
        containerPerguntas.innerHTML += 
        `<div class="Pergunta1 aberta">
        <h4 class="num1">Pergunta 1</h4>
        <div class="Pergunta">
          <input minlength="20" maxlength="65" type="text" class="tituloPergunta" placeholder="Texto da pergunta">
          <input type="text" class="URLImagem" placeholder="Cor de fundo da pergunta">
        </div>
     
        <h4>Resposta correta</h4>
        <div class="Resposta-Correta">
          <input type="text" class="RespostaCorreta" placeholder="Resposta correta">
        <input type="text" class="URLImagemCorreta" placeholder="URL da imagem">
        </div>
        
        <h4>Respostas Incorretas</h4>
        <div class="Resposta-Incorreta">
  
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 1">
          <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 1">
        </div>
       
        <div class="Resposta-Incorreta">
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 2">
          <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 2">
        </div>
       
        <div class="Resposta-Incorreta">
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 3">
        <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 3">
        </div>
      </div>`

      for(let i = 1+1; i <= quantidadePerguntas; i++){
        numPergunta = i;
        containerPerguntas.innerHTML += `<div class="pergunta-element fechada">
        <h4 class="numPergunta">Pergunta${i}</h4> 
        <ion-icon name="open-outline" onclick="abrirPergunta(this)"></ion-icon> 
      </div> `
      }
    }

    function abrirPergunta(pergunta){
        pergunta.parentNode.classList.add("crescer")
        pergunta.classList.add("esconder")
        pergunta.classList.remove("pergunta-element")
        pergunta.parentNode.innerHTML += `
        <div class="Pergunta1">
        <div class="Pergunta">
          <input minlength="20" maxlength="65" type="text" class="tituloPergunta" placeholder="Texto da pergunta">
          <input type="text" class="URLImagem" placeholder="Cor de fundo da pergunta">
        </div>
     
        <h4>Resposta correta</h4>
        <div class="Resposta-Correta">
          <input type="text" class="RespostaCorreta" placeholder="Resposta correta">
        <input type="text" class="URLImagemCorreta" placeholder="URL da imagem">
        </div>
        
        <h4>Respostas Incorretas</h4>
        <div class="Resposta-Incorreta">
  
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 1">
          <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 1">
        </div>
       
        <div class="Resposta-Incorreta">
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 2">
          <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 2">
        </div>
       
        <div class="Resposta-Incorreta">
          <input type="text" class="RespostaIncorreta" placeholder="Resposta incorreta 3">
        <input type="text" class="URLImagemInCorreta" placeholder="URL da imagem 3">
        </div>
      </div>`
    }




