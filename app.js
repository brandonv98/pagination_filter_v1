const data = [{
    name: 'John',
    email: ''
  },
  {
    name: 'Brandon',
    email: ''
  },
  {
    name: 'David',
    email: ''
  },
  {
    name: 'Josh',
    email: ''
  },
  {
    name: 'Lane',
    email: ''
  },
  {
    name: 'Grace',
    email: ''
  },
  {
    name: 'Alison',
    email: ''
  }
];

// const rebuild = () => {
const name = document.querySelector('H3');
let nextName = name.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling;

// }

console.log(`Hey there! ${data[0].name}`);