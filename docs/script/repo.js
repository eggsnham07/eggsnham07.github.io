window.addEventListener("DOMContentLoaded", (e) => {
    var html = null
    fetch("https://git.eggsnham.com/templates/repo.html")
        .then(res => res.text())
        .then(res => html = res)
    setInterval(function() {
        if(html != null) {
            fetch('https://api.github.com/repos/eggsnham07/electron-file-explorer')
                .then(res => res.json())
                .then(data => {
                    document.body.innerHTML += html
                        .replace("{name}", data.name)
                        .replace("{desc}", data.description)
                        .replace("{link}", data.svn_url)
                        .replace("{lang}", data.language)
                })
        }
    })
})