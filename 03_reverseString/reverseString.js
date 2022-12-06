const reverseString = function(s) {
    let str="";
    for(let i=s.length;i>=0;i--) {
        str+=s.charAt(i);
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
