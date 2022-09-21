// happy coding 👻
let sum: number = 0;

function fibonacci(numb: number) :any {
    if (numb == 1 || numb == 2) {
        return 1;
    } else if (numb > 2) {
        return fibonacci(numb - 2) + fibonacci(numb - 1);
    }
}

for (let i = 1; i <10 ; i++) {
    sum+=fibonacci(i);
}
console.log(sum);