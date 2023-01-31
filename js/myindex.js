const foldDeopdown = () => {
    const myNode = document.querySelector('.dropdown-toggle');
    const loki = new bootstrap.Dropdown(myNode); // 建構式
    loki.hide();
}

const loadHackmd = (id, link) => {
    $(`#${id}`).html(`<iframe class="w-100" src="${link}" scrolling="hide" style="height: 100vh"></iframe>`);
}

const loadHtml = (id, filename) => {
    $(`#${id}`).load(`templates/${filename}`);
    if (filename == 'home.html') { $(`#${id}`).addClass("mt-auto"); }
    else { $(`#${id}`).removeClass("mt-auto"); }
}

$(window).scroll(function() {
    var pageH = $('#page').height() - $(this).height();
    var pageT = this.scrollY - $('#page').offset().top;
    
    $('#block').scrollTop(pageT / pageH * ($('#blockLength').height() - $(this).height()));
});