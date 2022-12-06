const repeatString = function(str,num) {
    if(num>-1) {
        let s="";
        for(let i=0;i<num;i++) {
            s+=str;
        }
        return s;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
