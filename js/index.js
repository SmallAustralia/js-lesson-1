// let message ='Hello World!'; // String
// alert(message);

// const sum = 2 + 2; // Number
// alert(sum);

const age = parseFloat(prompt('Enter you age'));
alert('Your age is ' + age);

const nextAge = add(age, 1);
alert('Next year you will be ' + nextAge);

//String - '', "". `` (особливі ``)
//Number -1, 2.5, Nan, +Infinity, -Infinity
// Boolean
// true, false

//undefined
// null
// Object
// ES2015:
// Symbol
// BigInt

if(age < 18){ // <> <= >= === == !== || &&
    alert('You are underaged!');
} else{
    alert('you are adult!');
}


function add(a, b){
    const sum= a + b;
    return sum;
}
