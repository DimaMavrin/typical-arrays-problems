exports.min = function min (array) {
    return (array && array.length) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
    return (array && array.length) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {

    if (array && array.length) {
        return array.reduce(function (accumulator, currentValue){
        return (accumulator + currentValue) / array.length
    })
    } else {
        return 0;
    };

};
