const climbingStairs = (n) => {
    if (n<=2) {
        return n
    }
    let first = 1;
    let second = 2;
    for (let i =3; i<=n; i++) {
        let newNum = first + second;
        first = second
        second = newNum
    }

    return second

}

/*
1+1+1
1+2
2+1 
6/2 = 3

1+1+1+1
2+2
1+2+1
2+1+1

1
2
3
5
8

24/6 = 4
*/


console.log(climbingStairs(1)); // Должно быть: 1
console.log(climbingStairs(2)); // Должно быть: 2
console.log(climbingStairs(3)); // Должно быть: 3
console.log(climbingStairs(4)); // Должно быть: 5
console.log(climbingStairs(5)); // Должно быть: 8
console.log(climbingStairs(6)); // Должно быть: 13

