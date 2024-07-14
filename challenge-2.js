// t-1 - add
function add(a,b){
    return a+b;
}
console.log(add(5,6));

// t-2 - subtract
function sub(a,b){
    return a-b;
}
console.log(sub(5,6));

// t-3 - multiply
function mul(a,b){
    return a*b;
}
console.log(mul(5,6));

// t-4 - divide
function div(a,b){
    return a/b;
}
console.log(div(5,6));

// t-5 - remainder
function rem(a,b){
    return a%b;
}
console.log(rem(5,6));

// t-6 use assignment operator +=
let num = 24;
num+=3;
console.log(num);

// t-7 use assignment operator -=

let n = 4;
n -= 2;
console.log(n);

// t-8 use of > and <

console.log(add(4,5)>sub(4,3));
console.log(mul(4,3)<add(4,5));

// t-9 use of >= <=

console.log(rem(6,4)>=div(4,5));
console.log(mul(6,4)<=div(4,5));

// t-10 == and ===

console.log(4 == 5);
console.log(4 === 4);

// t-11 &&

if((32==23)&&(23==23)){
    console.log('if && works');
}
else console.log('if && not works');

// t-12 ||

if((32==23)||(23==23)){
    console.log('if || works');
}
else console.log('if || not works');

// t-13  ! not operator

if(!true){
    console.log('it will not print any thing');
}
else console.log(`it's working because !true worked`);

// t-14 ternary
 (23 != 'fvmke') ? console.log('it workded') : console.log('it doesnt worked');