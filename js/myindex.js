// Load html contents
function loadHtml(id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let btn = document.getElementById('nav-btn');
    var windows_size = window.matchMedia("(max-width: 992px)");
    let file = filename;

    if (file) {
        console.log(`file`);
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.status == 200) { element.innerHTML = this.responseText; }
            // Show it once page not found
            if (this.status == 404) { element.innerHTML = "<h1>Page not found.<h1/>"; }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        // Fold nav bar when it small
        if (windows_size.matches) { btn.click(); }
        return;
    } else {
        console.log(`no file`);
    }
}