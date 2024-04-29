//examples of various types

let age: number = 43;

let firstName: string = "Dicky";

let talented: boolean = true;

let skillsArray: string[] = ["React", "JavaScript", "TypeScript"];

let timeToRetire: boolean = false;

if (age <= 67) {
  timeToRetire = false;
} else {
  timeToRetire = true;
}

//large numbers can be separated by an underscore in TypeScript to improve readability
let moneyNeededToRetire: number = 4_000_000; //instead of 4000000 for four million

//TypeScript can auto assign a type based on the initial value (hover over "five" to see type)
let five = 5;

// while you can set a type to 'any' it is not best practice as it defeats the big purpose of TypeScript (to create strict types)
let mystery: any; // uninitialized variables without given types are auto assigned 'any'
mystery = "anything";
mystery = 8;
mystery = [9, "none", 83];
mystery = true;

//one potential use case for the 'any' type would be if you create a function that takes a parameter of unknown type
//when setting parameters the type needs to be set to prevent errors being thrown by default
const mysteryFunction = (value: any) => {
  console.log(value);
};

// arrays sometimes need to accept more than one type, for that you can list multiple types
let mysteryArray: (string | number)[] = [1, "two", 3, "four"];
mysteryArray.push(5);
mysteryArray.push("six");

//a tuple is a fixed length array where each element has a particular type
let tupleType: [string, number] = ["Years coding", 3];
//the push method can be a problem with tuples because it allows you to break the intended type by adding more than the predetermined length
//tupleType is defined as only having a length of 2, but using push adds to it without throwing an error
tupleType.push("push allows you to break the rules", "not good");

//a enum is a list of related constants
//when naming enums, use PascalCase (first letter of every word capital)
//to simplify the output to index.js, use const to define the enum
const enum TypesOfHeroes {
  Standard = "Spider-Man",
  AntiHero = "Venom",
  Unsung = "first person to drink tea",
}

//the following should have "Venom" as the value
let myFavoriteCharacter: TypesOfHeroes = TypesOfHeroes.AntiHero

//by default TypeScript sets the first value in the enum to 0 with each one following being one more so...
const enum EnumOrder {ValueOfZero, ValueOfOne, ValueOfTwo}

//and if you set the first value to a number, the following values will be one more by default so...
const enum AdditionalEnumOrder {ValueOfFive = 5, ValueOfSix, ValueOrSeven}
