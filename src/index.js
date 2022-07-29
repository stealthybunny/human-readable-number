module.exports = function toReadable (number) {
    let ost = number % 100;
let nOst = String(ost);
let hundretsNum = Math.floor(number / 100);
let hundrets = '';
let dozens = '';
switch (hundretsNum) {
  case 1:
    hundrets = 'one hundret';
    break;
  case 2:
    hundrets = 'two hundret';
    break;
  case 3:
    hundrets = 'three hundret';
    break;
  case 4:
    hundrets = 'four hundret';
    break;
  case 5:
    hundrets = 'five hundret';
    break;
  case 6:
    hundrets = 'six hundret';
    break;
  case 7:
    hundrets = 'seven hundret';
    break;
  case 8:
    hundrets = 'eight hundret';
    break;
  case 9:
    hundrets = 'nine hundret';
    break;
  case 10:
    hundrets = 'one thousand';
    break;
  default:
    hundrets = '';
}
if (ost <= 20) {
  switch (ost) {
    case 1:
      dozens = 'one';
      break;
    case 2:
      dozens = 'two';
      break;
    case 3:
      dozens = 'three';
      break;
    case 4:
      dozens = 'four';
      break;
    case 5:
      dozens = 'five';
      break;
    case 6:
      dozens = 'six';
      break;
    case 7:
      dozens = 'seven';
      break;
    case 8:
      dozens = 'eight';
      break;
    case 9:
      dozens = 'nine';
      break;
    case 10:
      dozens = 'ten';
      break;
    case 11:
      dozens = 'eleven';
      break;
    case 12:
      dozens = 'twelve';
      break;
    case 13:
      dozens = 'thirteen';
      break;
    case 14:
      dozens = 'fourteen';
      break;
    case 15:
      dozens = 'fiveteen';
      break;
    case 16:
      dozens = 'sixteen';
      break;
    case 17:
      dozens = 'seventeen';
      break;
    case 18:
      dozens = 'eighteen';
      break;
    case 19:
      dozens = 'nineteen';
      break;
    case 20:
      dozens = 'twenty';
      break;
    default:
      dozens = '';
  }
}
else if (ost > 20 && ost <= 99) {
  switch (nOst[1]) {
    case '0':
      dozens = dozens + '';
      break;
    case '1':
      dozens = dozens + ' one';
      break;
    case '2':
      dozens = dozens + 'two';
      break;
    case '3':
      dozens = dozens + 'three';
      break;
    case '4':
      dozens = dozens + 'four';
      break;
    case '5':
      dozens = dozens + 'five';
      break;
    case '6':
      dozens = dozens + 'six';
      break;
    case '7':
      dozens = dozens + 'seven';
      break;
    case '8':
      dozens = dozens + 'eight';
      break;
    case '9':
      dozens = dozens + 'nine';
      break;
  }
  switch (nOst[0]) {
    case '1':
      dozens = dozens;
      break;
    case '2':
      dozens = 'twenty ' + dozens;
      break;
    case '3':
      dozens = 'thirty ' + dozens;
      break;
    case '4':
      dozens = 'fourty ' + dozens;
      break;
    case '5':
      dozens = 'fivety ' + dozens;
      break;
    case '6':
      dozens = 'sixty ' + dozens;
      break;
    case '7':
      dozens = 'seventy ' + dozens;
      break;
    case '8':
      dozens = 'eighty ' + dozens;
      break;
    case '9':
      dozens = 'ninety ' + dozens;
      break;
    default:
      dozens = dozens;

  }
}
let output = (hundrets + ' ' + dozens);
return output;
}
