// let names = ['luigi', 'mario', 'faith']
// names.push('toad');
// // names.push(3);
// // names[1] = 3;

// let numbers = [10, 20, 12, 15];

// numbers.push(25);
// // numbers.push('shaun');
// // numbers[0] = 'shaun';

// let mixed = ['ken', 4, 'chun-li', 8, 9];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;

// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };

// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']

// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   // skills: ['running'],
// };

// explicit
let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

let uid: string|number;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };