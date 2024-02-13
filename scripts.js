const perguntas = [
    {
      pergunta: "Qual é a função utilizada para imprimir algo na tela?",
      resposta:[
        "print()",
        "display()",
        "show()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para definir uma função em Python?",
      resposta:[
        "define",
        "function",
        "def",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para calcular o resto de uma divisão em Python?",
      resposta:[
        "%",
        "/",
        "//",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dado que pode armazenar sequências ordenadas em Python?",
      resposta:[
        "lista",
        "conjunto",
        "dicionário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de uma lista em Python?",
      resposta:[
        "append()",
        "add()",
        "insert()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para iniciar um loop em Python?",
      resposta:[
        "loop",
        "for",
        "while",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função utilizada para obter o tamanho de uma lista em Python?",
      resposta:[
        "size()",
        "length()",
        "len()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em Python?",
      resposta:[
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função utilizada para converter um valor para inteiro em Python?",
      resposta:[
        "to_int()",
        "int()",
        "integer()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de iniciar um comentário de uma linha em Python?",
      resposta:[
        "//",
        "/*",
        "#",
      ],
      correta: 2
    },
  ]

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