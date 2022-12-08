const palindromes = function (s) {
    let str="";
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i)>="a"&&s.charAt(i)<="z") {
            str+=s.charAt(i);
        }
    }
    let len=str.length-1;
    if(len%2!=0) {
        for(let i=0;i<=str.length/2;i++) {
            if(str.charAt(i)==str.charAt(len)) {
                len--;
                continue;
            }
            return false;
        }
    }
    else {
        for(let i=0;i<str.length/2;i++) {
            if(str.charAt(i)==str.charAt(len)) {
                len--;
                continue;
            }
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
