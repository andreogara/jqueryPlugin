var obj = {
    0: "serena",
    1: "venus",
    2: "sharapova",
    3: "vika"
};



function convertToArray(arr){
    return Array.prototype.slice.call(arguments)
}

console.log(convertToArray(obj));