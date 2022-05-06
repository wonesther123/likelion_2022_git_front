const sum = (num1, num2) => num1 + num2;
const result1 = sum(10, 20);
console.log(resulit);

const pow = x => x * x;
const result2 = pow(10);
console.log(result2);

const printPie = () => 3.14;
const result3 = printPie();
console.log(result);

const getObject = () => ({
    name : "철수",
    age : 20
});
const obj = getObject();
console.log(obj.name);

function outer(x) {
    return function inner() {
        return x * x;
    }
}

const outer = (x) => () => x * x;

const innerFuc = outer(10);
const result4 = innerFuc();
console.log(resulit4)

let addition = 20 + 10;
console.log(addition);

let subtraction = 20 - 10;
console.log(subtraction);

let multiplication = 20 * 10;
console.log(multiplication);

let division = 10 / 5;
console.log(division);

let remainder = 10 % 3;
console.log(remainder);

let hello = '안녕하세요,' + '수코딩입니다.'
console.log(hello)

let changeType1 = 20 +'10';
console.log(changeType1);

let changeType2 = 20 -'10';
console.log(changeType2);

let changeType3 = 20 *'10';
console.log(changeType3);

let changeType4 = 20 /'10';
console.log(changeType4);

let changeType5 = 20 %'10';
console.log(changeType5);

let str1 = "'I'm Fine Thank You!";
console.log(str1);

let str2 = '"시작이 반이다"';
console.log(str2);

let str3 = "\"여러분, '시작이 반이다.' 라는 말 들어보셨죠?\""
console.log(str3);

let name1 = '철수';
let name2 = '영희';

let string = '$[name1]은 $[name2]를 좋아합니다.';
console.log(string);

let comparision1 = 10 == 10;
console.log(comparision1);

let comparision2 = 10 === 10;
console.log(comparision2);

let comparision3 = 10 != 10;
console.log(comparision3);

let comparision4 = 10 !== 10;
console.log(comparision4);

let comparision5 = 20 > 20;
console.log(comparision5);

let comparision6 = 20 >= 20;
console.log(comparision6);

let comparision7 = 20 < 20;
console.log(comparision7);

let comparision8 = 20 <= 20;
console.log(comparision8);

let comparision9 = 10 == "10";
console.log(comparision9);

let comparision10 = 10 === "10";
console.log(comparision10);

let comparision11 = 10 != "10";
console.log(comparision11);

let comparision12 = 10 !== "10";
console.log(comparision12);

if (20< 10) {
    console.log('10은 20보다 작습니다.');
}else if (30 < 20) {
    console.log('30은 20보다 작습니다.')
}else if (30 < 30) {
    console.log('30은 30보다 작습니다.');
}else {
    console.log("모든 if문의 조건이 거짓입니다.");
}

let animal = 'Dog';

switch (animal) {
    case 'Cat':
        console.log('야옹');
        break;
    case 'Dog':
        console.log('멍멍');
        break;
    case 'Cow':
        console.log('음메');
        break;
    default:
        console.log('일치하는 동물 소리가 없습니다.');
        break;
}

let i=1;
while(i<10){
    console.log(i);
    i = i+1;
}

let flag = false;
do{
    console.log('do-while');
}while(flag == true);