/**
 * @function speedToPercentage
 * @description calculate percentage from playback speed, normal playback speed is 1
 * @param {number} speed - playback speed
 * @param {number} digits - number of digits to appear after the decimal point
 *      value between 0 and 20
 *      truncated
 * @returns {string} percentage
 */

const speedToPercentage = (speed, digits = 0) => {

    if (typeof speed !== 'number') throw new TypeError('speed parameter should be a number')

    if (typeof digits !== 'number') throw new TypeError('digits parameter should be a number')

    if (digits < 0 || digits > 20) throw new TypeError('digits parameter should be between 0 and 20')

    return (speed * 100 - 100).toFixed(digits)

}

module.exports = speedToPercentage

module.exports.speedToPercentage = speedToPercentage
