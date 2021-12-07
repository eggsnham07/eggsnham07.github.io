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
    color: #eee;
    border: 3px solid #eee;
    border-radius: 20px;
    width: 35%;
    padding-left: 20px;
    clear: both;
    display: table;
    margin-right: 40px;
}

@media screen and (max-width: calc(768px + 80px)) {
    .gh-card {
        width: 75%;
    }
}

.gh-card a {
    color: #39ff14;
}

.avatar {
    float: right;
    height: 200px;
    width: 200px;
    margin-bottom: 12px;
    margin-right: 12px;
    border-radius: 20px;
    border: 4px solid #eee;
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

function getUserRepos(user) {
    fetch("https://api.github.com/users/eggsnham07/repos")
        .then(res => res.json())
        .then(res => {
            const div = document.createElement("div")
            div.className = "repoHolder"

            const promise = new Promise((resolve, reject) => {
                for(var i in res) {
                    const a = document.createElement("a")
                    console.log(i)
                    a.style.fontFamily = "Arial, Helvetica, sans-serif;"
                    a.href = res[i].html_url
                    a.innerText = res[i].name
                    a.target = "_blank"
                    div.appendChild(a)
                    div.appendChild(document.createElement("br"))
                    div.appendChild(document.createElement("br"))
                    if(i == res.length-1) resolve()
                }
            })

            promise.then(() => document.body.appendChild(div))
        })
}