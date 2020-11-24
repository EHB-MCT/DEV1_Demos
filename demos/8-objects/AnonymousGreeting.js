"use strict";
import * as Utils from "../../scripts/utils.js";

let names = ["Peter", "Rayan", "Anouk", "Mike", "Ali", "Els"];
let greetings = ["Hi", "Hello", "Howdy", "yoohoo", "yo", "yoho", "G'day"];

let persons = [];

for (let i = 0; i < 20; i++) {
    let person = {
        name: names[Utils.randomNumber(0, names.length - 1)],
        greeting: greetings[Utils.randomNumber(0, greetings.length - 1)],
        introduce: function () {
            alert(this.greeting + " , I'm " + this.name);
        }
    };
    persons.push(person);
}

console.log(persons);
persons[0].introduce();