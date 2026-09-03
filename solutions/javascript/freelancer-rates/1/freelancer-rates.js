// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  
 return Math.floor(budget/dayRate(ratePerHour))
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const HOURS_PER_DAY = 8;
  const DAYS_IN_MONTH = 22;

  const fullMonths = Math.floor(numDays / DAYS_IN_MONTH);
  const remainingDays = numDays % DAYS_IN_MONTH;

  // Price for full months with discount applied
  const totalBillableDaysInMonths = fullMonths * DAYS_IN_MONTH;
  const standardMonthsPrice = totalBillableDaysInMonths * HOURS_PER_DAY * ratePerHour;
  const wholeMonthsPrice = standardMonthsPrice * (1 - discount);

  // Price for the remaining days (no discount)
  const remainingDaysPrice = remainingDays * HOURS_PER_DAY * ratePerHour;

  // Combine them and round up per spec
  return Math.ceil(wholeMonthsPrice + remainingDaysPrice);
}
