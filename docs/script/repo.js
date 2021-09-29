function getRepo(repo) {
    var html = null
    fetch(location.protocol + "/templates/repo.html")
        .then(res => res.text())
        .then(res => html = res)
    const interval = setInterval(function() {
        if(html != null) {
            if(!document.head.innerHTML.includes("<style>")) {
                document.head.innerHTML += `<style>
.gh-card {
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    border: 3px solid #444;
    border-radius: 20px;
    width: 35%;
    padding-left: 20px;
    clear: both;
    display: table;
    margin-right: 40px;
}

.gh-card a {
    color: #009900;
}

.avatar {
    float: right;
    height: 200px;
    width: 200px;
    margin-bottom: 12px;
    margin-right: 12px;
    border-radius: 20px;
    border: 4px solid #444;
    margin-top: 12px;
}
</style>`
            }
            fetch(`https://api.github.com/repos/${repo}`)
                .then(res => res.json())
                .then(data => {
                    document.body.innerHTML += html
                        .replace(/{name}/g, data.name)
                        .replace(/{desc}/g, data.description)
                        .replace(/{link}/g, data.html_url)
                        .replace(/{lang}/g, data.language)
                        .replace(/{user}/g, data.owner.login)
                        .replace(/{avta}/g, data.owner.avatar_url)
                        .replace(/{link_name}/g, "View on GitHub")
                })
            clearInterval(interval)
        }
    })
}