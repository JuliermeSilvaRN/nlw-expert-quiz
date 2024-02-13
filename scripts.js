const perguntas = [
  {
    pergunta: "Qual é o primeiro livro do Velho Testamento da Bíblia?",
    resposta:[
      "Êxodo",
      "Gênesis",
      "Levítico",
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o líder que conduziu os israelitas para fora do Egito?",
    resposta:[
      "Moisés",
      "Josué",
      "Abraão",
    ],
    correta: 0
  },
  {
    pergunta: "Qual profeta passou três dias dentro de uma grande peixe?",
    resposta:[
      "Jonas",
      "Isaías",
      "Jeremias",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o livro que contém os Salmos?",
    resposta:[
      "Salmos",
      "Provérbios",
      "Eclesiastes",
    ],
    correta: 0
  },
  {
    pergunta: "Quem construiu a Arca de Noé?",
    resposta:[
      "Noé",
      "Abraão",
      "Jacó",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o livro que conta a história de José, filho de Jacó?",
    resposta:[
      "Gênesis",
      "Êxodo",
      "Levítico",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o rei mais sábio de Israel?",
    resposta:[
      "Salomão",
      "Davi",
      "Saul",
    ],
    correta: 0
  },
  {
    pergunta: "Qual profeta enfrentou os profetas de Baal no Monte Carmelo?",
    resposta:[
      "Elias",
      "Isaías",
      "Ezequiel",
    ],
    correta: 0
  },
  {
    pergunta: "Quem recebeu as Tábuas da Lei no Monte Sinai?",
    resposta:[
      "Moisés",
      "Josué",
      "Abraão",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o livro que contém a história de Rute?",
    resposta:[
      "Rute",
      "Juízes",
      "Esdras",
    ],
    correta: 0
  },
];

  // pegar elementos no html
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  // new serve para criar um conjunto
  const corretas = new Set()
  // quantidades de perguntas
  const totalDePerguntas =perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas){
    // copia todos os node filhos, colocar opção true
    const quizItem = template.content.cloneNode(true)
    // adiciona filho em um elemento no html
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.resposta){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      // chamar uma função erow function
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        // sempre retirar as corretas
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        // size fala qual tamanho
        //alert(corretas.size)
        mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // adiciona as opções de respostas na tela
      quizItem.querySelector('dl').appendChild(dt)
    }
    // remove o texto Respoas A da tela
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }