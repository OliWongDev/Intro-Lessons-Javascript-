let x = 'Apple, Banana, Kiwi'

console.log(`Your fruits are: ${x}`)
console.log(`Your fruits are ${5 * 3} days old`)
// called a template string in Javascript

console.log("'BREAK'")

y = Math.floor(3 / 2)
console.log(y)
// Math.floor provides an integer division which rounds the value down.

z = 40 * y
console.log(z)

// Makes it back into an integer, can see that floats continue.

console.log(5 % 3)
// Modulo still works in Javascript like Python.

console.log(0.1 + 0.2)
// Yellow text in the terminal means a float
console.log((0.1 + 0.2).toFixed(3))
// White text in the terminal means a string
console.log(parseFloat((0.1 + 0.2).toFixed(3)))
// Conversion back to a float

console.log("'BREAK'")

let t = 5
console.log(t++)
console.log(t--)
console.log(t)
// Post incrementing. The value is used after.

console.log("'BREAK'")

let r = 5
console.log(++r)
console.log(r)

// Pre incrementing. The value is used before.

console.log("'BREAK'")

console.log(123 == 123)
console.log("123" == 123)
// Implicit type coercion, returns true
// May not know that you are comparing the wrong things. Contentious

console.log("'BREAK'")

console.log("123" === 123)
console.log("123" === "123")
// Triple equals will only take the same datatypes to return true.
// Best practice, unless you know that the type coercion is needed.

console.log("'BREAK'")

let g = 5
console.log('Value: ' + g)
// Allows Value: 5 to occur

let e = "Hi"
console.log(typeof e)
// Tells us the type of string needed.

let f = {}
console.log(typeof f)
// returns an object

let h = {
    name: 'Oli',
    age: 26
}
console.log(h)
// Don't need quotes around the key

const field = 'age'
console.log(h.age)
console.log(h[field])

console.log("'BREAK'")

// Equivalent accessing of objects

const array = [1, 2, 3, 3.14159, true, 'Hello']
console.log(array[3])
// Brings up the Pi value, 4th item in the array.
console.log(array[-1])
// Undefined, can't do this method to find the last value
console.log(array[array.length-1])
// Acquires the last value in the array (fix)

console.log("'BREAK'")

// PYTHON
// def add (x, y):
//     return x + y

// print(add(10, 43))

// function add(x, y) {
//     return x + y
// }


const add = (x, y) =>  {
    return x + y
}

// const add = (x, y) => x + y


console.log(add(10, 43))
// Arrow function is an object that is anonymous until being assigned to a variable "add"
// Braces indicate the body of function. No colons.

console.log("'BREAK'")

// SPLIT FUNCTIONS INTO AN OBJECT
const numbers = [12, 50, 44, 32, 2]

const Utils = {
    add: (x, y) => x + y,
    doubler: (arr) => arr.map(x => x * 2)
}

console.log(Utils.add(10,43))
console.log(Utils.doubler(numbers))

console.log("'BREAK'")

// DESTRUCTURING. NOTE: Not changing the original array.

const people = ['Matt', 'Glen', 'Mary', 'Kate']

// const first = people[0]
// const second = people[1]

// const [, spam, eggs] = people
// Notice the comma? If we wanted Glen and Mary we can use a comma to skip over Matt to get the values we want.

const [spam, eggs, ...others] = people

console.log(spam)
console.log(eggs)
console.log(others)

console.log("'BREAK'")

//  EXPANSION OPERATOR, expands the array using sub-arrays.

const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']

const allBirds = [...bobBirds, ...sallyBirds, 'Pidgeon']

console.log(allBirds)

console.log("'BREAK'")

// CONTROL FLOW:

const age = 16

 if (age >= 18) {
    console.log('Adult')
 } else if (age >= 13) {
    console.log('Teen')
 } else {
    console.log('Child')
 }

 console.log("'BREAK'")

//  PYTHON allowed = 'Allowed' if age >= 18 else 'Not Allowed!'
// Ternary!

// SWITCH STATEMENTS

const fav_bird = 'Raven'

switch (fav_bird) {
    case 'Raven':
        console.log('You like ravens')
        break
    case 'Crow':
        console.log('You like crows!')
        break
    case 'Robin':
        console.log('You like robins')
    default:
        console.log('I don\'t know that bird!')
}
console.log("'BREAK'")

// WHILE Loop
let count = 3

while (count > 0) {
    console.log(count--)
}

console.log("'BREAK'")

// FOR LOOP

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("'BREAK'")

// FOR LOOP

const favFoods = ['pizza', 'pasta', 'tacos']

for (let index in favFoods) {
    console.log(`${parseInt(index) + 1}. ${favFoods[index]}`)
}

console.log("'BREAK'")

// FOR LOOP using .forEach method

favFoods.forEach((food, index) => {
    console.log(`${index + 1}. ${food}`)
})


console.log("'BREAK'")

// Map and filter functions (iterators)
// Map 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Map iterates to apply the condition after the arrow to ALL elements in the array.
const squared = arr.map(x => x ** 2)

// Filter returns only those in the array that match the condition after the array.
const evens = arr.filter(x => x % 2 === 0)

console.log(squared)
console.log(evens)
console.log(arr)