/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalPrice = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return rentalPrice * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentalPrice * days - shortTermDiscount;
  }

  return rentalPrice * days;
}

module.exports = calculateRentalCost;
