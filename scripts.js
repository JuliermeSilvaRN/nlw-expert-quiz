const perguntas = [
  {
    pergunta: "Quem foi o autor do Evangelho de Mateus?",
    resposta:[
      "Mateus",
      "Lucas",
      "João",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos apóstolos de Jesus era conhecido como 'o discípulo amado'?",
    resposta:[
      "Pedro",
      "Tiago",
      "João",
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi o primeiro milagre de Jesus, de acordo com o Evangelho de João?",
    resposta:[
      "Transformar água em vinho",
      "Caminhar sobre as águas",
      "Multiplicar os pães e peixes",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o fariseu que procurou Jesus durante a noite para conversar com ele?",
    resposta:[
      "Nicodemos",
      "Pilatos",
      "Cleópatra",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos apóstolos negou Jesus três vezes antes de seu julgamento?",
    resposta:[
      "Pedro",
      "João",
      "Tiago",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do local onde Jesus foi crucificado?",
    resposta:[
      "Gólgota",
      "Betânia",
      "Belém",
    ],
    correta: 0
  },
  {
    pergunta: "Quantos apóstolos Jesus tinha?",
    resposta:[
      "12",
      "10",
      "7",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o escriba que perguntou a Jesus sobre o maior mandamento?",
    resposta:[
      "Mateus",
      "Lucas",
      "Judas",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o discurso de Jesus conhecido como 'Sermão do Monte'?",
    resposta:[
      "Mateus 5-7",
      "Lucas 10-12",
      "João 13-15",
    ],
    correta: 0
  },
  {
    pergunta: "Quem era o governador da Judeia durante o julgamento de Jesus?",
    resposta:[
      "Pilatos",
      "Herodes",
      "Caifás",
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