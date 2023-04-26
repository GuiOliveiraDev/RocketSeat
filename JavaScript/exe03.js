const transformDegree = (degree) => {
    
    const ifCelsius = degree.toUpperCase().includes('C') 
    const ifFahrenheit = degree.toUpperCase().includes('F')
    
    let newDegree = Number(degree.toUpperCase().replace('C', ''))
    let formula = (c) => c * 9 / 5 + 32 
    
    //Fluxo de Erro
    if (!ifCelsius && !ifFahrenheit) { 
        throw new Error('Grau não identificado')
    } 
    
    //Fluxos alternativos C -> F ou F-> C
    if (ifCelsius) {

        return formula(newDegree) + 'F'     // C -> F

    } else if (ifFahrenheit) {

        newDegree = Number(degree.toUpperCase().replace('F', ''))
        formula = (f) => (f - 32) * 5 / 9
        
        return formula(newDegree) + 'C'   //  F -> C
    }
    

}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'));
} catch (error) {
    console.log(error)
}
