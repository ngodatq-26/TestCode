//tim so lon nhat
function findMax(arr) {
    var max = arr[0];
    for(let i = 1;i < arr.length ; i++) {
        if (arr[0]  < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

//tra ve tong 2 so lon nhat
function sumCalculator(arr) {
    var maxNumber = findMax(arr);
    var sumMax = maxNumber;

    for(let i = 0; i<arr.length; i++) {
        if(maxNumber != arr[i] && sumMax < (maxNumber + arr[i])) {
            sumMax = maxNumber + arr[i];
        }
    }
    
    return sumMax;
}

const MathEx1 = {
    sumCalculator,
};

module.exports = MathEx1