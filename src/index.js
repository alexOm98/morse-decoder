const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let str = "";
    let arr = expr.match(/.{1,10}/g);
    for (let i = 0; i < arr.length; i++) {
      arr2.push(Number(arr[i]).toString());
    }
    for (let i = 0; i < arr2.length; i++) {
      arr3.push(arr2[i].replace(/10/g, ".").replace(/11/g, "-"));
    }
    str = arr3.join(" ").replace(/NaN/g, " ");
    let words = str.split("  ");
    let symbols = words.map((char) => char.split(" "));
    for (let i = 0; i < symbols.length; i++) {
      arr4[i] = [];
      for (let j = 0; j < symbols[i].length; j++) {
        if (MORSE_TABLE[symbols[i][j]]) {
          arr4[i].push(MORSE_TABLE[symbols[i][j]]);
        }
      }
    }
    return arr4.map((arr) => arr.join("")).join(" ");
  }
  

module.exports = {
    decode
}