/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function funny() {
    return "Did I do That?";
}

document.getElementById('q1').innerHTML = funny();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

var divideByTwo = function(number) {
    return number / 2;
}

document.getElementById("callDivideByTwo").addEventListener("click", function() {
    divideByTwo = document.getElementById("number").value;
    document.getElementById("q2").innerHTML = divideByTwo;
});

document.getElementById("number").addEventListener("click", divideByTwo());

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

var greeting = function greeting(firstName1, firstName2) {
    return "Hello, " + firstName1 + " and " + firstName2
}

var firstName1 = "Matt";
var firstName2 = "Virginia";

document.getElementById("q3").innerHTML = greeting(firstName1, firstName2);



// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

function average6(a, b, c, d, e, f) {
    return (a + b + c + d + e + f) / 6;
}
//
// var a = 2;
// var b = 3;
// var c = 5;
// var d = 10;
// var e = 15;
// var f = 25;
// var g = 6;

document.getElementById("q4").innerHTML = "Average of 6 values is " + average6(2, 4, 7, 11, 99, 17);


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

var total = function(price, cans) {
    return price * cans;
}

// function cashewsMonthly(a, b) {
//     return price * cans;
// }
//


document.getElementById("q5").innerHTML = "The total for cashews this month is $" + total(3, 6);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function areaRectangle(l, w) {
    return l * w;
}

function l() {
    return 5;
}

function w() {
    return 10
}

function perimeterRectangle(l, w) {
    return (l * 2) + (w * 2);
}

document.getElementById("q6").innerHTML = "Area: " + areaRectangle(l(), w()) + " and " + "Perimiter: " + perimeterRectangle(l(), w());

console.log(areaRectangle(l(), w()))

console.log(perimeterRectangle(l(), w()))


// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
    // return a / b;
    return number / 4;
}

// var a = 100;
// var b = 4;

var number = 100;

console.log(quarter(number))

document.getElementById("q7").innerHTML = quarter(number);

// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {

    if (hours > 8) {
        return ("That's the right amount of rest!")
    } else if (hours < 8); {
        return ("You need to get more sleep!")
    }
}

var hours = 10;

document.getElementById("q8").innerHTML = sleepings(hours);



// 9. Develop a function that determines a person's age by asking them for their birth year.

var ageFinder = function(birthYear) {
    var age = 2016 - birthYear;
    return "You are probably " + age + " years old.";

}

console.log(ageFinder(1943));

// function age(a, b) {
//     return a - b;
// }
//
// a = 2016;
// b = 1955;

document.getElementById('q9').innerHTML = ageFinder(1943);

// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var team1 = [];
var team2 = [];

function twoTeams(arrayOfPeople) {
    for (i = 0; i < arrayOfPeople.length; i += 2) {
        team1.push(arrayOfPeople[i]);
    }
    for (i = 1; i < arrayOfPeople.length; i += 2); {
        team2.push(arrayOfPeople[i]);
    }
}

console.log(team1);

twoTeams(teammates);

// document.getElementById("q10").innerHTML = team1 + team2;


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.


function threeDigit(userInput) {
    var stringSplit = userInput.split("");

    var total = 0;
    for (i = 0; i < stringSplit.length; i++) {
        var num = parseInt(stringSplit[i])
        total += num;
    }
    return "The total is " + total;
}

var promptInput = prompt("Input a 3 digit number");

document.getElementById("q11").innerHTML = threeDigit(promptInput);

console.log(threeDigit(promptInput));


// document.getElementById("q11").innerHTML = threeDigit(a, b, c);

// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function change(quarters, dimes, nickels, pennies) {
    return ((quarters * .25) + (dimes * .10) + (nickels * .05) + (pennies * .01));
}

// var quarters = 6;
// var dimes = 10;
// var nickels = 20;
// var pennies = 16;

document.getElementById("q12").innerHTML = "$" + change(6, 10, 20, 16).toFixed(2);









// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
arrayOfAllTheThings = ["one", 23, {
    thingsWhalesLove: "beaches"
}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
