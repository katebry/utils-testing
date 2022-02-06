function savingsPlanner(startPriceOfOldCar, startPriceOfNewCar, savingPerMonth, percentLossByMonth) {
    let total = 0;
    let savings = 0;
    let months = 1;

    let oldCarTotal = startPriceOfOldCar;
    let newCarTotal = startPriceOfNewCar;

    if (startPriceOfOldCar === startPriceOfNewCar) return [0, 0]
    if (startPriceOfOldCar > startPriceOfNewCar) return [0, (startPriceOfOldCar - startPriceOfNewCar)]

    for (months; (total + oldCarTotal) < newCarTotal; months++) {
        if (months % 2 === 0) percentLossByMonth += 0.5;
        oldCarTotal = percentageDecrease(percentLossByMonth, oldCarTotal)
        newCarTotal = percentageDecrease(percentLossByMonth, newCarTotal)
        total += savingPerMonth;
        savings = (total + oldCarTotal) - newCarTotal;
    }
    return [months - 1, Math.round(savings)]
}

function percentageDecrease(percentage, total) {
    const totalToSubtract = (percentage / 100) * total
    return total - totalToSubtract
}

module.exports = {savingsPlanner, percentageDecrease};
