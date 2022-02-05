function savingsPlanner(startPriceOfOldCar, startPriceOfNewCar, savingPerMonth, percentLossByMonth) {
    return [0, percentLossByMonth]
}

function percentageDecrease(percentage, total) {
    const totalToSubtract = (percentage / 100) * total
    return total - totalToSubtract
}

module.exports = {savingsPlanner, percentageDecrease};

