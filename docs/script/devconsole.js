const begginerJS = `setTimeout(function(){
    alert("This is part of the Javascript below!")
}, 1000)`
    
const loadJs = `try {
    ${localStorage.getItem("SavedJS")}
} catch(err) { 
    console.error(err) 
}`

/*
    JavaScript IDE
*/

console.error = function(e) {
    $("#console").append(`<span class="error">Error: ${e}</span><br>`)
}

console.warn = function(w) {
    $("#console").append(`<span class="warning">Warning: ${w}</span><br>`)
}

console.info = function(i) {
    $("#console").append(`<span>Info: ${i}</span><br>`)
}

console.log = function(log) {
    $("#console").append(`<span>${log}</span> <br>`)
}