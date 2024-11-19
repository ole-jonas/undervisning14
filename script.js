let parent = document.querySelector('.container');
let newText = document.createElement('button');

newText.textContent = 'dette er en tekst';
parent.appendChild(newText);

let newHeader = document.querySelector('h1');
newHeader.textContent = 'Ny tekst';

let addText = document.querySelector('#txtBtn');
addText.addEventListener('click', () => {
  let newTxt = document.querySelector('p');
  newTxt.textContent = 'clicked';
});

let addList = document.querySelector('#listBtn');
addList.addEventListener('click', () => {
  let newList = document.createElement('ul');
  newList.textContent = 'list';
  parent.appendChild(newList);
});

let input = document.querySelector('#addText');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let newInput = document.createElement('p');
    newInput.textContent = 'yes it worked!';
    parent.appendChild(newInput);
  }
});
