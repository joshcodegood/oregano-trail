// Create two different types of objects: a traveler and a wagon.

// A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).

// A wagon has a few properties as well: a passengers list (array) and a capacity (number).

// The following code should work once you are finished:

// x let wagon = makeWagon(5);
// x let traveler = makeTraveler('Henrietta');
// x let traveler2 = makeTraveler('Juan');

// x hunt(traveler); // maybe get more food
// x eat(traveler2);
// ? eat(traveler2); // juan is hungry
// x join(wagon, traveler);
// x join(wagon, traveler2);

// console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
// console.log(food(wagon)); // print juan's food + henrietta's food

//////////////////////////

// Operations

// Write the following functions, which should work on either travelers or wagons. Many of these functions will be short, and some are quite similar to things we've done before (except with objects now). Think about how the objects change how the function needs to work.

// Technical note: if you change an object inside of a function, the changes will affect the original object outside of the function as well. This is not true of primitive data types (strings, numbers, booleans, etc).

// makeTraveler(name)
// Create a new traveler object with the specified name, a random amount of food, and isHealthy = true. This should be very similar to makeCar from today's notes.

// makeWagon(capacity)
// Create a new wagon with an empty passenger list and the specified capacity. This should be very similar to makeLot from today's notes.

// hunt(traveler)
// 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

// eat(traveler)
// Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

// x join(wagon, traveler)
// Add the traveler to the wagon if there is space. If there is not enough capacity, don't add them.

// x quarantine(wagon)
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

// food(wagon)
// Return the total amount of food among all occupants of the wagon.

window.addEventListener('load', function() {
    let start = document.querySelector('button');
    start.addEventListener ('click', function() {

    function makeTraveler(name) {
        return {
            food: 0,
            name: name,
            isHealthy: true,
            /**hunt: function() {
                
            }**/
        }
    }

    function makeWagon(cap) {
        return {
            manifesto: [],
            capacity: cap,
        }
    }

    let wagon = makeWagon(5);
    console.log(wagon);

    let traveler = makeTraveler('Henry');
    let traveler2 = makeTraveler('Evan');

    console.log(traveler);
    console.log(traveler2);


    //Create a 'hunt' function. What should it do? Give a chance of earning food adding food to traveler's inventory.
    function hunt(person) {
        if (Math.random() >= 0.5) {
            console.log('Nailed it.');
            person.food += 100;
        } else {
            console.log("Ooh, so close");
        }
    };

    function eat(person) {
        console.log("Eatin' time!");
        if (person.food > 0) {
        person.food -= 20;
        console.log(person.name + "'s food -20");
        } else {
            console.log(person.name + " doesn't have any food!")
        }
    };

    function join(wagon, person) {
        if (wagon.capacity > wagon.manifesto.length) {
            wagon.manifesto.push(person);
        } else {
            console.log("There's no room on this wagon!");
        }
    }

    // true is not displaying. Is that okay?
    function quarantine(wagon) {
        for (let i = 0; i < wagon.manifesto.length; i++) {
            if (wagon.manifesto[i].isHealthy === true) {
                console.log("No need, everyone is healthy.");
                return false;
            } else {
                console.log(wagon.manifesto[i].name + " is sick!");
                return true;
            };
        };
    }

    function food(wagon) {
        let totalFood = 0;
        for (let i = 0; i < wagon.manifesto.length; i++) {
            totalFood += wagon.manifesto[i].food;
            console.log(totalFood);
        }
    }

    hunt(traveler);
    hunt(traveler2);
    console.log(traveler, traveler2);
    eat(traveler);
    console.log(traveler);
    join(wagon, traveler);
    console.log(wagon);
    join(wagon, traveler2);
    console.log(wagon);
    traveler.isHealthy = false;
    quarantine(wagon);
    food(wagon);
    });
})