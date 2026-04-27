const calculateMinDistance = (locations, k) => {
    const positives = locations.filter(x => x > 0).sort((a, b) => b - a);
    const negatives = locations.filter(x => x < 0).sort((a, b) => a - b);

    const getDist = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i += k) {
            sum += Math.abs(arr[i]) * 2;
        }
        return sum;
    };

    return getDist(positives) + getDist(negatives);
};

let locations = [-1, -2, -3, 100];
let k = 3;
console.log(calculateMinDistance(locations, k)); 
