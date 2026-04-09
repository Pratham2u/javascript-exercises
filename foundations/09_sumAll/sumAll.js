const sumAll = function( a , b) {
    if((!Number.isInteger(a)) || (!Number.isInteger(b))){
        return "ERROR";
    }
    if(a < 0 || b < 0) return "ERROR"

    let start = Math.min(a,b);

    for(let i = start+1; i<= Math.max(a,b); i++){
        start += i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
