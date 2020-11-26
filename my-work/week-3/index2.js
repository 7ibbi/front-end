let users = [
    {
        name: 'Ion',
        age: 25,
    },
    {
        name: 'Maria',
        age: 26,
    },
    {
        name: 'Vasile',
        age: 80,
    },
];

// add new item
// push
users.push(
    {
        name: 'Ioana',
        age: 30,
    }
);
console.log(users);

// concat
let newUsers = [{
    name: 'Alexandra',
    age: 10
}];

users = users.concat(newUsers);
console.log(users);

// remove
users.pop();
console.log(users);

// remove by slice
console.log(users.slice(1, 2));

users = users.slice(1);
console.log(JSON.stringify(users));

// filter
const usersWithAgeAfter40 = users.filter((user) => {
    return user.age > 40;
});
console.log(usersWithAgeAfter40);

// splice
// users.splice(1, 2);
// console.log(users);

// find user by name
const maria = users.find((user) => {
    return user.name === 'Maria';
});
console.log(maria);