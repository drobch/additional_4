module.exports = function multiply(first, second) {

    var first = first.split("").reverse();
    var second = second.split("").reverse();
    var result = [];

    for(var i = 0; first[i] >= 0; i++) {
        for(var j = 0; second[j] >= 0; j++) {
            if(!result[i + j]) {
                result[i + j] = 0;
            };
            result[i + j] += first[i] * second[j];
        };
    };
    
    for(var i = 0; result[i] >= 0; i++) {
        if(result[i] >= 10) {
            if(!result[i + 1]) {
                result[i + 1] = 0;
            };
            result[i + 1] += Math.floor(result[i] / 10);
            result[i] = result[i] % 10;
        };
    };
    
    return result.reverse().join("");
}