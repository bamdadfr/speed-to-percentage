/**
 * Convert the audio playback speed to percentage.
 * Normal playback speed is 1, meaning the audio is played at the normal speed.
 *
 * @param {number} speed
 *    The audio playback speed.
 * @param {number} [digits=0]
 *    The number of digits after the decimal point.
 *    Number of digits can not be less than 0 nor greater than 20.
 * @returns {string}
 *    The percentage.
 */
export default function speedToPercentage(speed, digits = 0) {
  if (typeof speed !== 'number') {
    throw new TypeError('speed is not a number');
  }

  if (typeof digits !== 'number') {
    throw new TypeError('digits is not a number');
  }

  if (digits < 0 || digits > 20) {
    throw new TypeError('digits is out of range');
  }

  return (speed * 100 - 100).toFixed(digits);
}
