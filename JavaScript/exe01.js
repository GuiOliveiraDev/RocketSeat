const notas = (nota) => {

    let notaA = nota >= 90 && nota <= 100
    let notaB = nota <= 89 && nota >= 80
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0
    
    let notaNew

    if (notaA) {
        notaNew = 'A'
    } else if (notaB) {
        notaNew = 'B'
    } else if (notaC) {
        notaNew = 'C'
    } else if (notaD) {
        notaNew = 'D'
    } else if (notaF) {
        notaNew = 'F'
    } else {
        notaNew = 'Nota Inválida'
    }

    return notaNew;
}

console.log(notas(101));