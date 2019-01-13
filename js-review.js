console.log("Introduction to JavaScript");


for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log("FizzBuzz");
    }

    else if ((i % 3 === 0) && (i % 5 !== 0)) {

        console.log("Fizz");
    }

    else if ((i % 5 === 0) && (i % 3 !== 0)) {

        console.log("Buzz");
    }

    else {

        console.log(i);
    }
}

function countBs(word) {

    let count = 0;

    for (let i = 0; i < word.length - 1; i++) {

        if (word.charAt(i) === "b".toUpperCase()) {

           count++;
        }
    }

    console.log(word + " has " + count + (count > 1 ? " B's." : " B."));
}

countBs("BumBleBee");