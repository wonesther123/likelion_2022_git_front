let bool1 = true;
console.log(bool1);

let bool2 = false;
console.log(bool2);

let bool1 = 5 < 7;
console.log(bool1);

let bool2 = 7 > 10;
console.log(bool2);

let arr1 = [10];
console.log(arr1);

let arr2 = [10, 20];
console.log(arr2[1]);

let arr3 = [10, "abc", true, null, undefined, function(){}];
console.log(arr3[2]);

let student1 = [90, 70, 80, 60];

console.log(student[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);

let student1 = {
    koreanSocre:90,
    "englishScore":70,
    'mathScore':80,
    "science Score":60
};

console.log(student1["science Score"]);

console.log(student1.englishScore);

function gugudan(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
    console.log("3 * 4 = 12");
    console.log("3 * 5 = 15");
    console.log("3 * 6 = 18");
    console.log("3 * 7 = 21");
    console.log("3 * 8 = 24");
    console.log("3 * 9 = 27");
}
gugudan();

const gugudan = function ddd(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
    console.log("3 * 4 = 12");
    console.log("3 * 5 = 15");
    console.log("3 * 6 = 18");
    console.log("3 * 7 = 21");
    console.log("3 * 8 = 24");
    console.log("3 * 9 = 27");
};
gugudan();
ddd();

function printFruit(name, price){
    console.log(name + "는 " + price + "원 입니다.");
}
printFruit('banana', 2000);

function printFruitArr(arr){
    console.log(arr[0] + "는 "+ arr[1] + "원 입니다.");
}
printFruitArr(['banana', 2000]);

function printFruitObj(obj){
    console.log(obj.name + "은 " + obj.price + "원 입니다.");
}
printFruitObj({name:'apple', price:3000});

function sum(number1, number2){
    return number1 + number2;
}
const sum_result_1 = sum(10, 20);
const sum_result_2 = sum(2o, 30);

const sum_result = sum_result_1 + sum_result_2;

console.log('총 합은 ' + sum_result + "입니다,");

function printReturn(){
    console.log('return 실행 전');
    return;
    console.log('return 실행 후');
}
printReturn();