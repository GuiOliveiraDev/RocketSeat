const transformDegree = (degree) => {
    
    const ifCelsius = degree.toUpperCase().includes('C') 
    const ifFahrenheit = degree.toUpperCase().includes('F')

    const newFahrenheit = Number(degree.toUpperCase().replace('F', ''))
    const newCelsius = Number(degree.toUpperCase().replace('C', ''))
    
    const toFahrenheit = (c) => c * 9 / 5 + 32
    const toCelsius = (f) => (f - 32) * 5 / 9
    
    if (!ifCelsius && !ifFahrenheit) {
        
        throw new Error('Grau não identificado')

    } else if (ifFahrenheit) {

        return toCelsius(newFahrenheit) + 'C'

    } else if (ifCelsius) {

        return toFahrenheit(newCelsius) + 'F'

    }

}

try {
    console.log(transformDegree('104F'))
    console.log(transformDegree('40C'));
} catch (error) {
    console.log(error)
}
