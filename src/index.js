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
    const codeArray = expr.match(/.{1,10}/g);
    let decodedArray = [];


    for (let i=0; i<codeArray.length; i++) {
        let code = codeArray[i];

        if(code === '**********') {
            decodedArray.push(' ');
        } else{
            let morse = code.replace(/00/g, '')
                            .replace(/10/g, '.')
                            .replace(/11/g, '-');

            decodedArray.push(MORSE_TABLE[morse]);
        }
    }
    return decodedArray.join('');
}

module.exports = {
    decode
}