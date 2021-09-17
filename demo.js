
// NAMING CONVENTIONS

// lowerCamelCase
// UpperCamelCase
// kebab-case
// snake_case

// STRINGS - CONCATENATION & INTERPOLATION

// Try ths following code in https://jsbin.com/?js,console

const firstString = "Hello";
const secondString = "World";

const fullString = `${firstString} ${secondString}`

console.log(fullString);

// ******************************************

// CONDITIONS, LOGICAL OPERATORS, IF-ELSE CONDITIONS

// Try ths following code in https://jsbin.com/?js,console

const word = "Benjamin";


const result = word[0] === 'b' || word[0] === 'B'
const result = word[0].toLowerCase() === 'b'

console.log(result)


if (word[0] === 'B') {
  console.log('Yes')
} else {
  console.log('No')
}

// ******************************************

// LOOPS & ITERATIONS WITH ARRAYS

// Try ths following code in https://jsbin.com/?js,console

const names = ['Saj', 'Jack', 'Jon', 'Jane', 'Ben', 'Bob']

console.log(names.length)

// old way of iterating through arrays
for (i = 0; i < names.length; i++) {
  console.log(names[i])
}
// modern way of iterating through arrays
names.forEach((name) => {
//   console.log(name)
  const result = name[0].toLowerCase() === 'j';
//   console.log(result)
  if(result) {
    console.log(`${name} does start with the letter J`);
  } else {
    console.log(`${name} does NOT start with the letter J`);
  }

});

// ******************************************

// FUNCTIONS

// Try ths following code in https://jsbin.com/?js,console

const myName = 'bEnJaMIN';

const capitalize = (word) => {
  const firstChar = word[0];
  const remainingChars = word.substring(1)
  const capitalizedWord = firstChar.toUpperCase() + remainingChars.toLowerCase();
  // return capitalizedWord
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

console.log(myName)
const myNameCapitalized = capitalize(myName)
console.log(myNameCapitalized)

// ******************************************

// DOM MANIPULATION & EVENT LISTENERS

// Go to http://perdu.com/ in Google Chrome or Firefox
// Open the Console in the Developer tools
// Try the following code in the Console

const h1 = document.querySelector('h1')

h1.style.color = "orange"

h1.innerText = "Lost on the internet?"

document.addEventListener('click', () => {
  console.log('I clicked the body')
})


h1.addEventListener('click', () => {
  console.log('I clicked the h1 which is a child of the body')
})

// ******************************************

// A PRACTICAL EXAMPLE OF DOM MANIPULATION - IMPLEMENT DARK MODE

// Go to http://perdu.com/ in Google Chrome or Firefox
// Open the Console in the Developer tools
// Try the following code in the Console

// Add button
document.body.insertAdjacentHTML('beforeend', '<button id="dark-mode">Dark Mode</button>');

const darkModeBtn = document.getElementById("dark-mode");


// Add event listener on button
darkModeBtn.addEventListener('click', () => {
  const currentBgColor = document.body.style.backgroundColor
  if (currentBgColor == 'white') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});
