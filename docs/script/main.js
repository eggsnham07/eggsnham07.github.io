/* 
    Tab keypress handler
*/

document.getElementById("jsCode").addEventListener('keydown', function(e) {
    if(e.key == 'Tab' || e.code == "Tab" || e.which == 9) {
        e.preventDefault()
        var start = this.selectionStart
        var end = this.selectionEnd

        this.value = this.substring(0, start) +
            "\t" + this.value.substring(end)

        this.selectionStart = 
            this.selectionEnd = start + 1;
    }
})