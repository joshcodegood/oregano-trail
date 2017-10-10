window.addEventListener('load', function() {

    let start = document.querySelector('button');
    start.addEventListener ('click', function() {

    function makeTraveler(name) {
        return {
            food: 0,
            name: name,
            isHealthy: true,
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