function savingsPlanner(startPriceOfOldCar, startPriceOfNewCar, savingPerMonth, percentLossByMonth) {
    let savings = 0;
    let months = 0;

    let oldCarTotal = startPriceOfOldCar;
    let newCarTotal = startPriceOfNewCar;

    while (startPriceOfNewCar > startPriceOfOldCar + savings) {
        savings += savingPerMonth;
        oldCarTotal = percentageDecrease(percentLossByMonth, oldCarTotal);
        newCarTotal = percentageDecrease(percentLossByMonth, newCarTotal);
        months++;
        if (months % 2 === 1) {
            percentLossByMonth += 0.5;
        }
    }
    return [months, Math.round(oldCarTotal + savings - newCarTotal)];

}

function percentageDecrease(percentage, total) {
    const totalToSubtract = (percentage / 100) * total;
    return total - totalToSubtract;
}

module.exports = {savingsPlanner, percentageDecrease};
