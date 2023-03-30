var msg = "Lascado estamos mas olha a data: "
        const dataAtual = new Date()
        const dataFormatada = dataAtual.toLocaleDateString('pt-br')

        var dateNow = Date.now();
        console.log(dateNow);

        alert(msg+" "+dataFormatada+"e a hora: "+dateNow)
        console.log(msg);


function mostraResposta(id){
    respostas = document.getElementsByClassName('faq'); //recupera todos elementos da classe faq
    for (var i = 0; i < respostas.length; i++) { // coloca todos eles invisiveis
      respostas[i].style.display = 'none'; 
    }
    
    clicada = document.getElementById(id); //recupera o id passado por argumento
    clicada.style.display = 'inherit'; //faz ele ser exibido conforme o item pai
  }

