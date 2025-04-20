/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_OFF = 20;

  const LONG_TERM = 7;
  const LONG_TERM_OFF = 50;

  let rentOff = 0;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    rentOff = SHORT_TERM_OFF;
  } else if (days >= LONG_TERM) {
    rentOff = LONG_TERM_OFF;
  }

  return RENT_PER_DAY * days - rentOff;
}

module.exports = calculateRentalCost;
