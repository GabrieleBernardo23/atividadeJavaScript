let prova1 = Number(prompt(`Qual foi a sua nota na primeira prova?`))
let prova2 = Number(prompt(`E qual foi a sua nota na segunda prova?`))
let media = (prova1 + prova2) / 2

let aprovado = media >= 6 ? 'Aprovado' : 'Reprovado'

alert(`Sua média foi: ${media} e você foi ${aprovado}`)