'use strict';

// functie declarativa
function declareVar() {
    console.log('scope in non-arrow', this);

    if(true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    // console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
}

declareVar();

let d = 5;
let e = 'DevSchool';
let f = ['mere', 'pere'];
let g = {
    key: 'value',
};
let h = Symbol('foo');
// let i = Symbol('foo');
// console.log( h === i);

console.log('my current scope', this);

console.log('d', typeof d);
console.log('f', typeof f);
console.log('h', typeof h);

let i = Number('foo');
console.log('i', i, typeof NaN);

let j = 4/0;
console.log('j', j, typeof j);

const expr = function() {
    console.log('expression');
};

expr();

// functie anonima
const arrow = a => console.log('scope in arrow', this);

arrow(3, 4, 5);

// se apeleaza ea insasi
(function iie () {
    console.log('iie');
})();

// nu ramane definita
// iie();

function variadic() {
    console.log(arguments);
};

function variadic2(...args) {
    console.log(args)
}

variadic(2, 3, 4);

variadic2(1, 2, 3, 4, 5);

function sum(by) {
    let sum = 0;
    return function() {
        sum += by;
        return sum;
    }
}

const sumby5 = sum(5);
console.log(sumby5);
console.log(sumby5());
console.log(sumby5());

// nu va merge deoarece o apelam inainte sa fie definita
// const p2 = new Rectangle(12, 34);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getMeThis() {
        console.log(this);
    }
}

const p = new Rectangle(12, 24);

p.getMeThis();

// const Rectangle1 = class {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     getMeThis() {
//         console.log(this);
//     }
// };

const Rectangle1 = class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
};

console.log(Rectangle1.name);

let k = Object.create({});
console.log('k', typeof k, k);

// sau let str = "ana";
let str = String('ana');
console.log('str', typeof str, str);

//sau let arr = [];
let arr = Array();
console.log('arr', typeof arr, arr);