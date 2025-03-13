function reverseNumber(num) {
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return num < 0 ? -reversed : reversed;
}

 function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);  // Use func instead of fn
    }
}

function map(arr, func) {
    let result = [];
    forEach(arr, function(el) {
        result.push(func(el));  // Use func instead of fn
    });
    return result;
}

function filter(arr, func) {
    let result = [];
    forEach(arr, function(el) {
        if (func(el)) {  // Use func instead of fn
            result.push(el);
        }
    });
    return result;
}

function getAdultAppleLovers(data) {
    return map(filter(data, function(person) {
        return person.age > 18 && person.favoriteFruit === 'apple';
    }), function(person) {
        return person.name;
    });
}

function getKeys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function getValues(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
} 
