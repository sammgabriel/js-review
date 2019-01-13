/*

    Author Name: Samantha Gabriel
    Date: January 13, 2019
    File Name: js-review.js

    JavaScript review assignment exercises
*/

// prints a message to the console
console.log("Introduction to JavaScript");

// FizzBuzz
for (let i = 1; i <= 100; i++) {

    // Prints FizzBuzz if the number is a multiple of 3 and 5
    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log("FizzBuzz");
    }

    // Prints Fizz if the number is only a multiple of 3
    else if ((i % 3 === 0) && (i % 5 !== 0)) {

        console.log("Fizz");
    }

    // Prints Buzz if the number is only a multiple of 5
    else if ((i % 5 === 0) && (i % 3 !== 0)) {

        console.log("Buzz");
    }

    else {

        console.log(i);
    }
}

// Counts the number of capital B's in a given word
function countBs(word) {

    // Use countChar function to count number of B's
    countChar(word, "B");

    /* let count = 0;

    for (let i = 0; i < word.length - 1; i++) {

        if (word.charAt(i) === "b".toUpperCase()) {

           count++;
        }
    }

    console.log(word + " has " + count + (count > 1 ? " B's." : " B.")); */
}

// Call the function
countBs("BumBleBee");

// Counts the number of a certain character in a given word
function countChar(word, letter) {

    let count = 0;

    // Iterate through the word
    for (let i = 0; i < word.length - 1; i++) {

        // Increment count if the character at that index matches the given letter
        if (word.charAt(i) === letter) {

            count++;
        }
    }

    // Prints results
    console.log(word + " has " + count + " " + letter + ((count > 1)  || (count === 0) ? "'s." : "."));
}

// Call the function
countChar("mammal", "m");