module.exports = function toReadable (number) {
let ost = number % 100;
let nOst = String(ost);
let hundredsNum = Math.floor(number / 100);
let hundreds = '';
let dozens = '';
switch (hundredsNum) {
    case 1:
        hundreds = 'one hundred';
        break;
    case 2:
        hundreds = 'two hundred';
        break;
    case 3:
        hundreds = 'three hundred';
        break;
    case 4:
        hundreds = 'four hundred';
        break;
    case 5:
        hundreds = 'five hundred';
        break;
    case 6:
        hundreds = 'six hundred';
        break;
    case 7:
        hundreds = 'seven hundred';
        break;
    case 8:
        hundreds = 'eight hundred';
        break;
    case 9:
        hundreds = 'nine hundred';
        break;
    case 10:
        hundreds = 'one thousand';
        break;
    default:
        hundreds = '';
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
let output = (hundreds + ' ' + dozens);
let newOutput = '';
if (number <= 99) {
let l = output.length;
for (i = 1; i <= l - 1; i++) {
    newOutput = newOutput + output[i];
}
output = newOutput;
}
return output;
}
