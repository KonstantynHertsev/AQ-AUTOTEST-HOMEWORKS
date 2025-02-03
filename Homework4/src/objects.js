const complexObject = {
    name: 'Diana',
    nestedObject: {
        surname: 'Gray',
        values:[27, 'May', 1998],
        printValues: function() {
            console.log('');
            console.log(`${complexObject.name}, ${this.surname}, ${this.values.join(', ')}`);
        }

    }
};
complexObject.nestedObject.printValues();
