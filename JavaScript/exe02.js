let inOutMoney = {
    revenue: [1200, 1200, 250.43, 360.45],
    expense: [320.34, 128.45, 176.87, 1450.00, 2000],
}

const sum = (array) => {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}
const calculateBalance = (inOut) => {
    const calculateRevenue = sum(inOut.revenue)
    const calculateExpense = sum(inOut.expense)

    const balance = calculateRevenue - calculateExpense

    if (balance < 0) {
        console.log(`Saldo negativo! Saldo: R$${balance.toFixed(2)} `);
    } else {
        console.log(`Saldo Positivo! Saldo: R$${balance.toFixed(2)}`);
    }
}

console.log(calculateBalance(inOutMoney));