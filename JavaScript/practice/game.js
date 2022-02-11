let maximum = parseInt(prompt("Enter the maximum number!"));

const targetNum = Math.floor(Math.random() * maximum) + 1;

while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}
// 문자열 입력 시 NaN으로 뜨게 됨 
// if로 최대값이 없는 경우를 만든다. NaN은 False-y이니까
// 한 번만 실행되는 것을 막기 위해 if => while
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1
while (parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++; 
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess :(")
    }else{
        guess = prompt("Too low! Enter a new guess :(")
    }
}
// guess = parseInt(prompt("Too high! Enter a new guess :("))이 상태로 쓸 경우 
// q를 입력하면 바로 parseInt 이 되어버림 그럼 NaN이 돼서 "Enter a valid number!"이 창이 뜰거임
// 막기 위해 while 옆 guess에 parseInt를 붙여준다.
// 입력된 결과인 입력값을 문자열로 지정한 다음 추측값을 정답과 비교할 때 그 시점에 parseInt 되도록
// q가 입력되더라도 변수 자체 안에서 계속 q는 유지된다

if(guess === 'q'){
    console.log("OK, QUITTING ")
}else{
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
