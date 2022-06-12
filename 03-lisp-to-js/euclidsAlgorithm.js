//Computes Greatest Common Denominator of (a, b)
const euclidsAlgorithm = (a, b) => {
    if (!b) {
        console.log("LOG[a:" + a + ", b:" + b + "]")
        return a
    } else {
        console.log("LOG[a:" + a + ", b:" + b + "]")
       return euclidsAlgorithm(b, (a % b))
    }
};


console.log("RESULT:" + euclidsAlgorithm(4762, 1834));