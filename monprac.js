
let balance = 100;
let word = "It's Monday!";
let happy = true;

let list = [1, 2, 3, 4];
list.push(5)

for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

withdraw(100)

const withdraw = (num) => {
    return balance -= num
}

console.log(withdraw)