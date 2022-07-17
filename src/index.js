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
    '**********': ' ',
};
const expr = '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010';

function decode(expr){
    let str=""; 
    let symbols=expr;
    for(let i=0;i<expr.length;i+=10){
        symbols=expr.slice(i,i+10);
          while(symbols.includes("10")||symbols.includes("11")||symbols.includes("00")){     
          symbols=symbols.replace("10",".").replace("11","-").replace("00","");}
        str+=symbols.includes("**********")?" ":MORSE_TABLE[symbols];
    }
   return str;
}


module.exports = {
    decode
}