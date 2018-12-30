"use strict";
// alert("I'm javascript boi"); 
let admin;
let name = "John";
admin = name;
// alert(admin);
const PLANET = 1;
const visitorName = 1;
console.log(`hello ${name} you are a ${true ? 'hi' : 'low'}`);
console.log(2 * 17 + '2');
function pow(a, b) {
    return a ** b;
}
console.log(pow(2, 10));
let ask = (q, y, n) => {
    if(confirm(q))
        y();
    else
        n();
}
var ID = 12;;
let user = {};
let id = Symbol();
user = {
    [id]:12,
}
user.id = 3;
console.log(user.id, user[id]);

function hello() {
    console.log(this);
}
hello();
let a = {};
a.a = hello;

a.a();