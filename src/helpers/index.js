/**
 * Format number to string length
 * @param {number} num - Input value.
 * @param {number} toLength - Need string length.
 * @returns string
 */
export function numFormatter(num, toLength) {
  let numStr = num.toString();

  while (numStr.length < toLength) numStr = "0" + numStr;

  return numStr;
}
