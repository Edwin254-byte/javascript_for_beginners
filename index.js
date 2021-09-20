/*var declares global variable, let declares local variables, const declare constant variables;*/
var myName="edwin";
var greet="my real name is " + myName + " and I am well as hell";
console.log(greet);

var firstName = "ragnarok";
var nameLength= firstName.length;
console.log(nameLength + " characters.");
var firstChar= firstName[0];
console.log(firstChar + " is the first character");
// replacing the value of string fisrtName
firstName="omondiTimon";
console.log(firstName);
//to get the character at the last index of unknown variable length
var lastLetter= firstName[firstName.length-1];
console.log(lastLetter + " is the last letter in omondiTimon");
//incase we want a nth character we just subract nth from the total length
//creating arrays
var myAraay = ["edu", 40, "teachers", "blahblah"];
console.log(myAraay);
//nested arrays
var nestedArrays = [['a','b','c'], [1,2,3,4,5],['e','f','g','h']];
console.log(nestedArrays);
//elements are accessed using indexes starting from 0
//unlike strings , arrays are mutable
myAraay[0]="peter";
console.log(myAraay);
//push is used for appending items to an existing array
myAraay.push("edu", 23);
console.log(myAraay);
//.pop() function is used to remove the last item in the array.
var removedItem = myAraay.pop();
console.log(myAraay);
console.log(removedItem);
//.shift is used to remove the first element in the array.
removedItem = myAraay.shift();
console.log(myAraay);
console.log(removedItem);
//.unshift is used to add an element to the beginning of the array
myAraay.unshift("edu", 23);
console.log(myAraay);

//creating functions. function paramenters are not declared as we do with other variables
function myFunction(num1, num2){
    return console.log(num1+num2);
}
//calling the function
myFunction(50,23);
//global vs local variable
var varGlobal = 100; // declaring a global variable
function globalChecker(){
    varLocalWithoutVar = 500; //declaring global variable inside a function block
    var  varLocalWithVar = 1000; // declaring a local variable
    if (varGlobal != "undefined"){
        console.log("my global variable is " + varGlobal);
    }
   
}

function localChecker(){
    if (varLocalWithoutVar != "undefined"){
        console.log("the local variable " + varLocalWithoutVar +" is global variable now");
    }
    /*if (varLocalWithVar == "undefined"){
        console.log("the local variable "+ varLocalWithVar+ " declared with var is a local variable");
    }*/
}

//calling the functions
globalChecker();
localChecker();

//stand in line demostration using cue data structure
function nextInLine(arr, item){
    arr.push(item);// adds an item at the end of the array
    return arr.shift(); //removes the value at index 0
}

var testArr = [1,2,3,4,5];
console.log("Before " + JSON.stringify(testArr));//converting array into more readable form
console.log(nextInLine(testArr,6)); //adding an item at the end of the array while removing item at index 0
console.log("After: " + JSON.stringify(testArr));

// strict equivalence operators
function equalChecker(num){
    if(num ===5){
        return true;
    }
    else{
        return false;
    }
}
console.log(equalChecker('5'))
/*using == converts the values into same data type before comparing them
therefore 3=='3' is true but 3==='3' is false . Also inequality operator !=
 does type conversion but strict inequality operator !== does not perform type conversion*/

function inequalityChecker(a,b){
    /*if(a!=b){
        return a + " is not equivalent to  " + b;
    }*/
    if(a!==b){
        return a + " is not strictly equivalent to  " + b;
    }
}
console.log(inequalityChecker(2,'5'));
console.log(inequalityChecker(2,5));

//nested if-else demo 
function ranking(val){
    if(val <5){
        return "Tiny";
    }else if(val < 10){
        return "Small";
    }else if (val < 15){
        return "Medium";
    }else if (val< 20){
        return "Large";
    }else if (val >= 20){
        return "Huge";
    }else{
        return "wrong input";
    }
}
console.log(ranking(3));
//N/B: in neste if else statements only the true if statement is executed 

//swith-case demo
function caseInSwithCase(val){
    var ans =""
    switch(val){
        case 1:
            ans="alpha";
            break;
        case 2:
            ans = "beta";
            break;
        case 3:
            ans = "gamma";
            break;
        case 4:
            ans = "delta";
            break;
        default:
            ans = "wrong input pal";
    }
    return ans;
}
console.log(caseInSwithCase(6));

// multiple choices with the same output in switch case demo

function sequenceSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "medium";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:
            answer="out of range";
    }
    return answer;

}
console.log(sequenceSizes(5));

//returning boolean values directly
function isLess(a,b){
    return a<b; // returns true is a<b and false otherwise.
}
console.log(isLess(4,1));

//using math functions and returning early
function abTest(a,b){
    if(a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    //returns the sum of square roots of a and b, then squared and rounded to the nearest integer.
}
console.log(abTest(16,-1));

// creating objects in js
var myPlan = {
    "plan1": "finish coding",
    "plan2": "find job",
    001: "play ball",
    "last plan": "unknown"
};
//accessing values in objects
console.log(myPlan.plan1); //using dot notation
console.log(myPlan[001]); // properties in numeric form uses brackets to access values
console.log(myPlan["last plan"]);//using brackets

//object properties can be stored in a varibale.
var task2 = "plan2";
console.log("my second plan is " + myPlan[task2]);

//objects are mutable therefore they can be updated.
myPlan["last plan"]="running daily.";
console.log(myPlan["last plan"]);

//adding new properties in existing object
myPlan.plan3 = "write a book";
console.log(myPlan.plan3);

//removing properties
delete myPlan["last plan"];
delete myPlan.plan1;

//checking if an object has the ginven property
function checkProperty(prop){
    if (myPlan.hasOwnProperty(prop)){
        return myPlan[prop];
    }
    else{
        return "property not found";
    }
}
console.log(checkProperty("plan1"));// the property was deleted
console.log(checkProperty("plan3")); // the bracket notation is more effective than dot notation

//analysing a combination of object and array
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "Gold": true
    },
    {
        "artist": "Ariana Grande",
        "title": "Wakadinali",
        "release_year": 2020,
        "formats":[
            "YouTube video",
            "mp3"
        ],
        "Gold": false
    }
];
//accesing nested arrays using dots and bracket indexes
// e.g. accessing formats mp3
var formatsContent = myMusic[1].formats[1];
console.log(formatsContent);

//ceating nested objects.
var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passemger seat":"crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
 // accessing nested objects using both dot and brackets combined
 var gloveBoxContents = myStorage.car.inside["glove box"];
 console.log(gloveBoxContents);

 //record collection 
var collection = {
    "2548":{
        "album": "slipperyn when wet",
        "artist":"Bon jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468":{
        "album": "1999",
        "artist":"prince",
        "tracks": [
            "1999",
            "little red corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album": "ABBA Gold"
    }

};
//making a copy of an object
var collectionCopy = JSON.parse(JSON.stringify(collection));

// updating the collection
function updateRecords(id, prop, value){
    if (value===""){
        delete collection[id][prop];
    } else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}
//testing if the updates are working
console.log(updateRecords(2548, "tracks", "I LOVE CODING!"));

//ITERATIONS
//creating an array using while loop while loop
var loopArray = [];
var i=0;
while(i < 5){
    loopArray.push(i);
    i++;
}
console.log(loopArray);
//using a for loop
var forLoop = [], x;
for(x=0; x<5; x++){
    forLoop.push(x);
}
console.log(forLoop);
//iterating through an array using for loop
var ourArray = [2, 43, 49, 29, 84, 121, 43, 4], ourTotal = 0, y;
for(y = 0; y < ourArray.length; y++){
    ourTotal += ourArray[y];
}
console.log(ourTotal);

//iterating through nested array
function multiplyAll(arr){
    var product = 1;
    for(var i=0; i < arr.length; i++){
        for(var j=0; j < arr[i].length; j++){
            product *= arr[i][j]; 
        }
    }
    return product;
}

var product = multiplyAll([[1,2], [2,3,4], [5,6,7,8]]);
console.log(product);

//do while loop
var startArray = [], i = 10;
do{
    startArray.push(i);
    i++;
}while(i<5);
console.log(startArray);
//do while executes the code at least once before checking if the condition is met.

//profile lookup coding challenge
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]        
    },
    {
        "firstName": "Harry",
        "lastName": "Poter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]        
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intruiging Cases", "Violin"]        
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]        
    }

];
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "No such Property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Akira", "likes");// checking the profile
var data1 = lookUpProfile("edu", "lastName");// checking the contact
var data2 = lookUpProfile("Kristian", "hello");// checking the property
console.log(data);
console.log(data1);
console.log(data2);

// generating random decimal numbers using the Math.random()
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());

// generating random whole numbers using Math.random and Math.floor

// using a variable
var randomNumberBtwn0and19 = Math.floor(Math.random() * 20);

//using a function
function randomWholeNum(){
    return Math.floor(Math.random() *10);
}

console.log(randomNumberBtwn0and19);
console.log(randomWholeNum());// random whole nums btwn 0 and 10

//random whole number within a range
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random()* (ourMax - ourMin+1)) + ourMin;
}
console.log(ourRandomRange(1, 10));

//using the parseInt function for converting strings into integers
 function convertToInteger(str) {
     return parseInt(str);
 }
 console.log(convertToInteger("123"));
 // parseInt can also be used to specify the radix i.e. number system
 function convertNumSystem(num) {
     return parseInt(num, 2); // a binary number system
 }
 console.log(convertNumSystem("11001"));

// The conditional tenary operator
// syntax: condition ? statement-if-true: statement-if-false
//nested conditionl tenary operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-12));
/* The let and var keywords.
    -> let cannot allow more than one declaration of the same variable name
    ->  to avoid the above error, you should exclude the let keyword and reassign
     new value to the given variable.
        e.g. let name = "edwin"; //declaring the variable
             let name ="EDU"; // error msg for more than 1 declaration
             name = "EDU"; // no error and the value is updated to EDU
    -> Also it is reccommended to use the "use strict" code in our programs. It is
    inserted at the top of our programs or functions in order to enable strict
    coding mode which catches common coding mistakes and unsafe actions. 
    e.g. declaring a variable using const and not initializing it.
    -> var keyword declares variables globally or locally when declared inside
    a function block.
    -> let variable scope is only in the block where it is defined.
    -> const variable has all the values of let but it is read-only meaning
    once it is declared, you cannot reassig another value it.
    -> const variables are used  are written in capital letters to differentiate it.
    -> even though const are immutable, arrays declared by const can be reassigned new
    values by using index notation. This is called object mutation. 
    -> To prevent object mutations we use object.freeze(object)
    */
function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "Block Sscope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope()

function printManyTimes(str) {
    "use strict";
    var sentence = str + " is cool!";
    sentence = str + " is amazing";// the value will replace the initial value assigned to sentence
    //const sentence = str + " is cool!";
    //sentence = str + " is amazing";// an TypeError will occur because const are immutable

    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}
printManyTimes("ed");
// object mutation
const s = [1, 2, 3, 4];
function edit() {
    //s = [6, 7, 2, 8];// throw type error since const can't be reassigned new values
    s[0] = 6;
    s[1] = 7;
    s[2] = 2;
    s[3] = 8;
    // the above code achieves object mutation even if the object is a const
    return console.log(s);

}
console.log(s);
edit();

// preventing object mutation
function freezeObj() {
    "use strict";
    const  MATH_CONSTANTS = { PI: 3.14};
    Object.freeze(MATH_CONSTANTS);// making the object to be immutable at all circumstances

    try{
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
 
const PI = freezeObj();

//using Arrow Functions To Write Concise Anonymous Function
//an anonymous function is a function with no name and therefore can be converted to an arrow function
const magic1 = function(){ // this has no name hence its anonymous
    return new Date();
}
console.log(magic1());
//converting anonymous to arrow function
const magic2 = () => {
    return new Date();
}
console.log(magic2());
//arrow functions with parameters
let myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(myConcat([1,2], [3,4]));

//arrow function works well with higher order function i.e. filter,map,reduce
//higher order functions takes functions as arguments
const realNumberArray = [4,5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// square of positive integers using map and filter
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//writing higher ordered functions
//default parameters are used when the paramenter value is not specified
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) () ;
console.log(increment(5, 2)); // the value since its set will be 2
console.log(increment(5)); // the value will be 1 since it the default

// the rest operator in functions
const sum = ( function () {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a,b) => a+b, 0);
    };
}) ();
console.log(sum(2,4,6));
//using rest (...) operator to perform the same task as above code
const sum2 = (function () {
    return function sum(...args){// creates an array called args which stores all the values input as arguments
        return args.reduce((a,b) => a+b, 0);
    };
}) ();
console.log(sum2(1,2,3,4,5,6,7)); //now the sum function can take infinite number of arguments

//using spread operator to evaluate arrays in-place
//[...array] used to make a copy of an array to another array
const arrX = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arrY;
(function(){
    //arrY = arrX; // this will not make a copy but instead set the two arrays to be equivalent.
    arrY = [...arrX]// making a copy of array x
    arrY[0] = 'DECEMBER';
}) ();
console.log(arrX);
console.log(arrY);

//using destructuring assignment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

//manually assigning the object values to variables P,Q,R
let P = voxel.x; // P = 3.6
let Q = voxel.y; // Q = 7.4
let R = voxel.z; // R = 6.54

//using destructuring method to assign object values to variables a,b,c
const {x: a, y: b, z: c} = voxel; // a =3.6, b = 7.4, c = 6.54

//another example of destructuring to obtain the tomorrow's temp
const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTomorrow(avgTemp) {
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemp; //copying contents in the tomorrow field to tempOfTomorrow var
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMP));

//destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

//using destructuring method to obtain the max of tomorrow in local_forecast
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow}} = forecast;// destructuring max in tomorrow in local_forecast to maxOfTomorrow var
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// using destructuring assignment to assign variables from arrays
//in arrays, we cannot specify which item to assign to the variable since it automatically assigns in the order they are in the array
const [A, B] = [1, 2, 3, 4, 5, 6];
//variable z =1 , x = 2
// incase we wish to access number 6 we use ,, to skip the other values before it
const [m, n, , , , o] = [1, 2, 3, 4, 5, 6];
// m =1, n = 2, o=6
console.log(A,B,m,n,o);

//using destructuring to switch  values of an array assigned to variables
let val1 = 8, val2 = 6;
(()=> {
    "use strict";
    [val1, val2] = [val2, val1]
}) ();
console.log(val1);
console.log(val2);

//using destructuring assignment with rest operator
//removing the 1st 2 elements of an array an returning the remainder
const source = [1, 2, 3, 4, 5, 6];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;// destructuring has removed the 1st two elements and the rest been stored in arr var
    return arr;
}
console.log(source);
console.log(removeFirstTwo(source));

//using destructuring assignment to pass an object as a function's parameters
 const stats = {
     max: 56.78,
     std_dev: 4.34,
     median: 34.54,
     mode: 23.87,
     min: -0.75,
     average: 35.85
 };

 const half = (function(){
     return function half({max, min}) {
         return (max + min)/ 2.0;
     };
 }) ();
 console.log(stats);
 console.log(half(stats));
 //Commonly used in API'S request.

 //creating string using template literals
 const person = {
     name:"Zodiac Hasbro",
     age: 56
 };
 //Template literal with multi-line and string interpolation
 const greeting = `Hello, my name is ${person.name}!
 I am ${person.age} years old.`; //created using back ticks which can allow multiple lines and quotation in it
 
 console.log(greeting);

 //code challange
 const result = {
     success: ["max-length", "no-amd", "prefer-arrow-functions"],
     failure: ["no-var", "var-on-top", "linebreak"],
     skipped: ["id-blacklist", "no-dup-keys"]
 };
 
 function makeList(arr){
     const resultDisplayArray = [];
     for (let i=0; i < arr.length; i++) {
         resultDisplayArray.push(`<li class="text-warning"> ${arr[i]} </li> `)
     }
    return resultDisplayArray;     
 }

 console.log(makeList(result["failure"]));

 //writing concise object literal declaration using simple fields
 const createPerson1 = (name, age, gender) => {
     return {
         name: name,
         age: age,
         gender: gender
     };
 };
 //if one creates an object with the key is the name of the variable and the value is the value of the variable
 //then one can simplify the above code 

 const createPerson2 = (name, age, gender) => ({name, age, gender}); 

 console.log(createPerson1 ("edwin", 19, "male"));
 console.log(createPerson2("edwin", 19, "male"));

//writing concise declarative functions
//e.g. writing a function inside an object
const bicycle = {
    gear: 2,
    /*setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }*/
    //alternatively we can simplify the function below
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//using class syntax to define a constructor function

//normal creation of objects
var spaceShuttle1 = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle1('Jupiter');

console.log(zeus.targetPlanet);

//using class constructor
class spaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new spaceShuttle2('Jupiter');

console.log(zeus.targetPlanet);

//another class example
function makeClass() {
    class vegetable {
        constructor (name) {
            this.name = name;
        }
    }
    return vegetable;
}

const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);

/*using getters and setters to control access to an object 3:15
with the class object you often want to obtain values from the object and set the
value of a property with an object. i.e. getters and setters*/

class Book{
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author; // variables starting with _ means they are private data which aren't accessed directly
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

// another challenge 3:16
function makeClass1() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32); //converting from fahrenheit to celsius
        }
        get temprature() {
            return this._temp;
        }
        set temprature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass1(); // returns the thermostat object
const thermos = new Thermostat(76); // when instantiating an object we use the new keyword. 76 is the value assigned to temp
let temp = thermos.temprature; // calling temprature getter
thermos.temprature = 26; // assigning value to the temprature setter
temp = thermos.temprature;
console.log(temp);

/*the differences between import and require
Before, people would use the require function to import functions and codes from
other files but now we import and export. One can therefore import code in one
file and export to another file. It also allows you to import only certain function
or variables from a file. */

// importing function from string_function.js file to main file.
import { capitalizeString } from "./string_function";
//lets check if the cpitalize function is working
const cap = capitalizeString("hello world in uppercase!");
console.log(cap);

//using export to reuse a code block
/* In case one wishes to use same function or variable multiple time, he/she
should use the export keyword before the function or variable inorder to make it imported in another function
e.g. 
    const capitalizeString1 = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
        //capitalizes the first character of the given string
    }
    export { capitalizeString1 }; // exporting the function capitalizeString1

    export const foo = "here"; // exporting the variables foo and here
    export const here = "foo";
*/

// using * to import everything from a file
/* If a file is exporting several items, we can import all of them at once using the syntax below
    e.g.
        import * as object_name_to_store_the_imports from "relative path of the file";
*/

//creating an export fallback with export default
/* export default is oftenly used when you want to export only one item from a file.
    syntax:
            export default "item";
*/

//importing a default export
/* syntax:
            import item from "relative path";
    N/B: As you can notice that the main difference between default import and normal import
    is that the item imported is not enclosed inside curly braces as it was in normal import.
*/


