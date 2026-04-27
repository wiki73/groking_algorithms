const climbingStairs = (n) => {
    if (n<=2) {
        return n
    }

    let step1 = 1;
    let step2 = 2;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        console.log(`i:${i} res:${result} step1: ${step1} step2: ${step2}`)

        result = step1 + step2;
        step1 = step2;
        step2 = result;
    }
    return result

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



24/6 = 4
*/



console.log(climbingStairs(4))
