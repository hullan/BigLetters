const express = require('express');
const app = express();

const {LETTERS} = require('./letters.js');

app.get('/', (req, res) => {
  res.send(printLetter(LETTERS.A));
});

app.listen(3000, () => {
  console.log(printPhrase('ZZ'));
});

function printChar(element, char) {
  if (element) {
    return char;
  } else {
    return ' ';
  }
}

function printLine(elementLine, char) {
  let sLine = '';
  for (const element of elementLine) {
    sLine += printChar(element, char);
  }
  return sLine;
}

function printPhrase(phrase) {
  let i = 0;
  let s = '';
  while (i < 7) {
    for (const element of phrase) {
      s += printLine(LETTERS[element][i], element);
      s += ' ';
    }
    s += '\n';
    i++;
  }
  return s;
}
