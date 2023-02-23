//1
function myFunction(a, b) {
    let result = 0;
  for (let item in a) {
    if (item === b) {
      result ++;
    }
  }
  return Boolean(result);
}

console.log(myFunction({a:1,b:2,c:3},'b')); // true
console.log(myFunction({x:'a',y:'b',z:'c'},'a')); // false
console.log(myFunction({x:'a',y:'b',z:undefined},'z')); // true

//2
let country = { continent: 'Asia', country: 'Japan' };
let country2 = { country: 'Sweden', continent: 'Europe' }
function myFunction2(obj){
    for (let item in obj){
        if (item === "country"){
            return obj[item];
        }
    }
}

console.log(myFunction2(country)); // returns Japan
console.log(myFunction2(country2)); //returns Sweden

//3
function myFunction3(a){
    let object = {key: a};
    return object;
}

console.log(myFunction3('a'));
console.log(myFunction3('z'));
console.log(myFunction3('b'));

//4

function myFunction4(a){
    let arrayLength = a.length;
    return arrayLength;
}

console.log(myFunction4([1,2,2,4]));
console.log(myFunction4([9,9,9]));
console.log(myFunction4([4,3,2,1,0]));

//5
function myFunction5(str){
    let stringLength = str.length;
    let lastThree = str.slice(stringLength-3);
    return lastThree;
}

console.log(myFunction5('abcdefg'));
console.log(myFunction5('1234'));
console.log(myFunction5('fgedcba'));

//6
function myFunction6(a){
    return typeof(a);
}

console.log(myFunction6(1));
console.log(myFunction6(false));
console.log(myFunction6({}));
console.log(myFunction6(null));
console.log(myFunction6('string'));
console.log(myFunction6(['array']));

//7

function myFunction7(a){
    return a.slice(0,3);
}

console.log(myFunction7('abcdefg'));
console.log(myFunction7('1234'));
console.log(myFunction7('fgedcba'));

//8 
function myFunction8(a){
    let newArray=[];
    for (i=0; i<3; i++){
        let char = a[i];
        newArray.push(char);
    }
    return newArray;
}

console.log(myFunction8([1, 2, 3, 4]));
console.log(myFunction8([5, 4, 3, 2, 1, 0]));
console.log(myFunction8([99, 1, 1]));

//9
function myFunction9(a, n){
    return a[n-1];
}

console.log(myFunction9([1, 2, 3, 4, 5], 3));
console.log(myFunction9([10, 9, 8, 7, 6], 5));
console.log(myFunction9([7, 2, 1, 6, 3], 1));