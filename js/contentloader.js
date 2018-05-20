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
}

function cssActive(element, index) {
    var el = document.getElementById(element);
    console.log(el.children.length);
    for (var ind = 0; el.children.length > ind; ind++) {
        element = el.children[ind];
        if (index == ind) {
            element.setAttribute("style", "background-color: #4CAF50; color: white;");
        } else {
            element.setAttribute("style", "background-color: transparent; color: black;");
        }
    };
}

window.onload = function () {
    cssActive("navigation", 0)
}
