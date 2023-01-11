module.exports = function toReadable(number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  function convertTens(num) {
    if (num < 10) {
      return ones[num]
    } else if (num >= 10 && num < 20) {
      return teens[num - 10]
    } else if (num % 10 === 0) {
      return tens[num / 10]
    } else if (num >= 20 && num < 100) {
      return tens[Math.floor(num / 10)] + ' ' + ones[num % 10]
    }
  }

  function convertHundreds(num) {
    if (num % 100 === 0 && num !== 0) {
      return ones[num / 100] + ' hundred'
    } else if (num > 99) {
      return ones[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100)
    } else {
      return convertTens(num)
    }
  }

return convertHundreds(number)
}
