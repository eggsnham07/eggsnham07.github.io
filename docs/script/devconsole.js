/*
    JavaScript IDE
*/
console.error = function(e) {
    $("#console").append(`Error: ${e}`)
}

console.warn = function(w) {
    $("#console").append(`Warning: ${w}`)
}

console.info = function(i) {
    $("#console").append(`Info: ${i}`)
}

console.log = function(log) {
    $("#console").append(log)
}