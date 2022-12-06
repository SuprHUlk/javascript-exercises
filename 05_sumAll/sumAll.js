const sumAll = function(a,b) {
    if(typeof a==="number" && typeof b==="number" && a>-1 && b>=-1) {
        let sum=0, min=Math.min(a,b), max=Math.max(a,b);
        for(let i=min;i<=max;i++) {
            sum+=i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
