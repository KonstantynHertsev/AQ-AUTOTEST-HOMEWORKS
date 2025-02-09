const person = {
    name: "Jon",
    age: 25,
    address: {
        city: "Washington",
        country: "USA",

        get city() {
            return this._city;
        },

        set city(newCity) {
            if (typeof newCity === "string" && newCity.length > 0) {
                this._city = newCity;
            } else {
                console.log("Incorrect city name!");
            }
        }
    },

    get name() {
        return this._name;
    },

    set name(newName) {
        if (typeof newName === "string" && newName.length > 1) {
            this._name = newName;
        } else {
            console.log("Name should contains more than one symbol!");
        }
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (Number.isInteger(newAge) && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a positive number!");
        }
    },

    getFullInfo() {
        return `${this.name}, ${this.age} age, city: ${this.address.city}`;
    }
};

console.log(person.getFullInfo());

person.name = "Jon";
person.age = 30;
person.address.city = "Washington";

console.log(person.getFullInfo());