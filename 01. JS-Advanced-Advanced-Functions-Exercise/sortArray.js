function sortArray(inputArray, sortMethod){
    var ascComparator = function(a, b){
        return a - b;
    };
    var descComparator = function(a, b){
        return b - a;
    };
    var sorting = {
        'asc': ascComparator,
        'desc': descComparator
    };
    return inputArray.sort(sorting[sortMethod]);
}