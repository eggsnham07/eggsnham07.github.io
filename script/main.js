var js = document.getElementById("jsCode")
const begginerJS = `setTimeout(function(){
alert("This is part of the Javascript below!")
}, 1000)`


window.onload = function() {
    document.getElementById("jsCode").value = begginerJS.toString()
    loadScript()
}
document.getElementById("code").addEventListener("submit", function(e) {runScript();})

function loadScript() {
    js.value = localStorage.getItem("SavedJS")
    var scripting = document.createElement("script")
    scripting.innerHTML =  `${localStorage.getItem("SavedJS")}`
    document.body.appendChild(scripting)
}

function runScript() {
    localStorage.setItem("SavedJS", js.value)
    window.location.reload
}