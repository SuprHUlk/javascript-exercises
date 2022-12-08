const getTheTitles = function(books) {
    let a=[];
    for(let i=0;i<books.length;i++) {
        a[i]=books[i].title;
    }
    return a;
};

// Do not edit below this line
module.exports = getTheTitles;
