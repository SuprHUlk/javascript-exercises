const fibonacci = function(n) {
    if(n<0) {
        return "OOPS";
    }
    if(typeof n==="string") {
        n=parseInt(n);
    }
    if(n==1) {
        return 1;
    }
    else if(n==2) {
        return 1;
    }
    let a=1,b=1,c=0;
    n-=2;
    while(n--) {
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
