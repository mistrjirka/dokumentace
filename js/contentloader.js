var pages = [
    {
        page: "home.html",
        order: 0
    },
    {
        page: "doc.html",
        order: 1
    },
    {
        page: "doc/add.html",
        order: 1
    },
    {
        page: "doc/get.html",
        order: 1
    },
    {
        page: "doc/do.html",
        order: 1
    },
    {
        page: "dow.html",
        order: 2
    },
    {
        page: "about.html",
        order: 3
    }
];

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function load(a) {
    class loadAndDo {
        constructor(url, element) {
            if (url != "") {
                jQuery.get(url, function (data) {
                    element.innerHTML = data;
                    //process text file line by line
                    $('#div').html(data.replace('n', ''));
                });
            } else {
                element.innerHTML = "";
            }
        }
    }
    pokus = new loadAndDo(a, document.getElementById("content"));
    eraseCookie("url");
    setCookie("url", a, 1);
}

function cssActive(element, index) {
    var el = document.getElementById(element);
    for (var ind = 0; el.children.length > ind; ind++) {
        element = el.children[ind];
        if (index == ind) {
            element.setAttribute("style", "background-color: #4CAF50; color: white;");
        } else {
            element.setAttribute("style", "background-color: transparent; color: black;");
        }
    };
}

function scroll() {
    document.getElementById('navigation').setAttribute('style', 'top:0px;');
}

window.onload = function () {
    cssActive("navigation", 0);
    if (getCookie("url") == null) {
        load("home.html");
    } else {
        load(getCookie("url"));
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page == getCookie("url")) {
                cssActive("navigation", pages[i].order)
            }
        }
    }
}
