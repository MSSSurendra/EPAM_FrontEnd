function filter(arr, callback) {
    return arr.filter(callback);
}

// Example usage:
console.log(filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 })); // [5, 8, 6]
console.log(filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 })); // [4, 6, 8, 10]



const data = [
    { name: 'Stein', age: 20, favoriteFruit: 'apple' },
    { name: 'John', age: 17, favoriteFruit: 'banana' },
    { name: 'Jane', age: 22, favoriteFruit: 'apple' },
    { name: 'Doe', age: 16, favoriteFruit: 'apple' }
];

function getAdultAppleLovers(people) {
    return filter(people, function(person) {
        return person.age > 18 && person.favoriteFruit === 'apple';
    }).map(person => person.name);
}

// Example usage:
console.log(getAdultAppleLovers(data)); // ['Stein', 'Jane']

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 })); // ['keyOne', 'keyTwo', 'keyThree']
