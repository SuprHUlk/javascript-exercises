const removeFromArray = function(a,num1,num2) {
    let arr=[];
    for(let i=1;i<arguments.length;i++) {
        for(let j=0;j<a.length;j++) {
            if(arguments[i]===a[j]) {
                delete a[j];
            }
            else {
                continue;
            }
        }
    }
    for(let i=0;i<a.length;i++) {
        if(a[i]!=undefined) {
            arr.push(a[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
