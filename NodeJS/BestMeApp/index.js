const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar',
    'O que eu podereia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + '\n\n\n')
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data)
    console.log(answers.values);
    process.exit()
})