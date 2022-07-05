// --ASCII Characters--
// Between 65 & 91 Decimal = Capital letters
// Between 97 & 123 Decimal = Small letters
// Between 48 & 58 Decimal = Numbers


const sym = ',.;~^[]{}!@#$%*()_+=-'
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const genCap = () => String.fromCharCode(rand(65, 91));
const genSmall = () => String.fromCharCode(rand(97, 123));
const genNum = () => String.fromCharCode(rand(48, 58));
const genSym = () => sym[rand(0, sym.length)];

export default function genPass(qnt, capitals, smalls, numbers, symbols) {
  const passArray = [];
  qnt = Number(qnt);

  for (let i = 0; i < qnt; i++) {
    capitals && passArray.push(genCap());
    smalls && passArray.push(genSmall());
    numbers && passArray.push(genNum());
    symbols && passArray.push(genSym());
  }

  return passArray.join('').slice(0, qnt);
}


