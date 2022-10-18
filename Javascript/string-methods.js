// Methods

const String = 'Ashvin Vanol';

console.log(String.at(2)); //h

// ===================================

console.log(String.big()); //<big>Ashvin Vanol</big>

// ===================================

console.log(String.blink()); //<blink>Ashvin Vanol</blink>

// ===================================

String.charAt()
console.log(String.charAt(2)); // h

// ===================================

String.charCodeAt()
console.log(String.charCodeAt(2)); // h->104

// ===================================

String.codePointAt()
console.log(String.codePointAt(2)); // h->104

// ===================================

String.concat()
const str2 = " k";
console.log(String.concat(str2)); //Ashvin Vanol k

// ===================================

String.endsWith()
console.log(String.endsWith('l'));// true
console.log(String.endsWith('p'));// false

// ===================================

String.fromCharCode()
console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(97)); //a

// ===================================

String.fromCodePoint()
console.log(String.fromCodePoint(42));// "*"
console.log(String.fromCodePoint(65, 90));// "AZ"

// ===================================

String.includes()
console.log(String.includes('Ash')); //true
console.log(String.includes('ash')); //false

// ===================================

String.indexOf()
console.log(String.indexOf('vin')); //3
console.log(String.indexOf('in ')); //4
console.log(String.indexOf(' Van')); //6

// ===================================

String.lastIndexOf()
console.log(String.lastIndexOf('v')); //3
console.log(String.lastIndexOf('V')); //7

// ===================================

String.localeCompare()
console.log('s'.localeCompare('A')) // 1
console.log('A'.localeCompare('s')) //-1
console.log('A'.localeCompare('A')) //0

// ===================================

String.match()
const regexp = /[A-H]/gi
console.log(String.match(regexp)); //[ 'A', 'h', 'a' ]

// ===================================
// 
String.matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

// ===================================

String.normalize()
let string1 = '\u00F1';     // ñ
let string2 = '\u006E\u0303'; // ñ

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

console.log(string1 === string2);                 // true
console.log(string1.length);                      // 1
console.log(string2.length);                      // 1
console.log(string2.codePointAt(0).toString(16));

// ===================================

String.padEnd()
console.log(String.padEnd(15, 'abc')); //Ashvin Vanolabc
console.log(String.padEnd(15, ' abc')); //Ashvin Vanol ab

// ===================================

String.padStart()

console.log(String.padStart(15, '0'));//000Ashvin Vanol

// ===================================

String.raw()
console.log(String.raw`C:\Development\profile\aboutme.html`);
console.log(String.raw`Hi\n${2+3}!`);
// 
// ===================================

String.repeat()
console.log(String.repeat(5)); //Ashvin VanolAshvin VanolAshvin VanolAshvin VanolAshvin Vanol

// ===================================

String.replace()
console.log(String.replace('Ashvin', 'Ajay')); //Ajay Vanol

// ===================================

String.replaceAll()
console.log(String.replaceAll('Ashvin', 'Ajay')); //Ajay Ajay Ajay Vanol

// ===================================

String.search()
console.log(String.search('a')); //8
console.log(String.search('A')); //0
console.log(String.search('V')); //7


// ===================================

String.slice()
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));

// ===================================

String.split()
console.log(String.split(''));
[
    'A', 's', 'h', 'v',
    'i', 'n', ' ', 'V',
    'a', 'n', 'o', 'l'
  ]

// ===================================
// 
String.startsWith()
console.log(String.startsWith('Ashvin'));// true
console.log(String.startsWith('Vanol'));//false

// ===================================

String.sub()
console.log(String.sub()); //<sub>Ashvin Vanol</sub>

// ===================================

String.substr()
console.log(String.substr(1,5)); //shvin

// ===================================

String.substring()
console.log(String.substring(1,5)); //shvi

// ===================================

String.toLocaleLowerCase()
console.log(String.toLocaleLowerCase());//ashvin vanol
console.log(String.toLocaleLowerCase('en-US')); //ashvin vanol
// ===================================
// 
String.toLocaleUpperCase()
console.log(String.toLocaleUpperCase());//ASHVIN VANOL
console.log(String.toLocaleUpperCase('en-US'));//ASHVIN VANOL

// ===================================

String.toLowerCase()
console.log(String.toLowerCase()); // ashvin vanol

// ===================================
 
String.toString()
const num =123;
console.log(num.toString());
var x = new String('Hello world'); //Hello world
console.log(x.toString());

// ===================================

String.toUpperCase()
console.log(String.toUpperCase()); // ASHVIN VANOL

// ===================================

String.trim()
const name = '        Hello there       ';
console.log(name.trim()); //Hello there

// ===================================

String.trimEnd()
const name = '        Hello there       ';
console.log(name.trimEnd()); //        Hello there

// ===================================
// 
String.trimStart()
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

// ===================================

String.valueOf()
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
