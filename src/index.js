module.exports = function toReadable (number) {
  const getUnitsOrHundreds = function(num) {
    switch (num) {
      case 1 :
        return 'one';
      case 2 :
        return 'two';
      case 3 :
        return 'three';
      case 4 :
        return 'four';
      case 5 :
        return 'five';
      case 6 :
        return 'six';
      case 7 :
        return 'seven';
      case 8 :
        return 'eight';
      case 9 :
        return 'nine';
      case 0 :
        return 'zero';
    }
  }
  const getTens = function(num) {
    switch (num) {
      case 10 :
        return 'ten';
      case 11 :
        return 'eleven'
      case 12 :
        return 'twelve';
      case 13 :
        return 'thirteen'
      case 14 :
        return 'fourteen';
      case 15 :
        return 'fifteen'
      case 16 :
        return 'sixteen';
      case 17 :
        return 'seventeen'
      case 18 :
        return 'eighteen';
      case 19 :
        return 'nineteen';
      case 2 :
        return 'twenty'
      case 3 :
        return 'thirty';
      case 4 :
        return 'forty'
      case 5 :
        return 'fifty';
      case 6 :
        return 'sixty'
      case 7 :
        return 'seventy';
      case 8 :
        return 'eighty'
      case 9 :
        return 'ninety';
    }
  }

  const units = number % 10;
  const tens = Math.floor(number / 10) % 10;
  const hundreds = Math.floor(number / 100) % 10;

  if (number < 10) {
    return getUnitsOrHundreds(number)
  } else if (number < 20) {
    return getTens(number)
  } else if (number >= 20 && number < 100 && units === 0) {
    return `${getTens(tens)}`;
  } else if (number > 20 && number < 100) {
    return `${getTens(tens)} ${getUnitsOrHundreds(units)}`;
  }
  else if (units === 0 && tens === 0) {
    return `${getUnitsOrHundreds(hundreds)} hundred`;
  } else if (tens === 1) {
    return `${getUnitsOrHundreds(hundreds)} hundred ${getTens(number % 100)}`;
  } else if (units === 0) {
    return `${getUnitsOrHundreds(hundreds)} hundred ${getTens(tens)}`;
  } else if (tens === 0){
    return `${getUnitsOrHundreds(hundreds)} hundred ${getUnitsOrHundreds(units)}`
  } else {
    return `${getUnitsOrHundreds(hundreds)} hundred ${getTens(tens)} ${getUnitsOrHundreds(units)}`;
  }
}
