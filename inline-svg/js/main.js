if (window.addEventListener) window.addEventListener('load', onLoad, false);

function onLoad() {

    boxSVG = document.getElementById("boxSVG");
    bs = boxSVG.contentDocument;

    if (bs === undefined) {
        bs = $("#boxSVG");
    }

    boxGreen = $("#boxGreen");
    boxBlue = $("#boxBlue");
    boxYellow = $("#boxYellow");
    boxRed = $("#boxRed");

    //boxGreen = bs.getElementById("boxGreen");
    //boxBlue = bs.getElementById("boxBlue");
    //boxYellow = bs.getElementById("boxYellow");
    //boxRed = bs.getElementById("boxRed");

    var TimelineA = new TimelineMax({
        repeat: 0
    });

    TimelineA.to(boxGreen, 1, {
        x: -100
        , y: -100
    })

    TimelineA.to(boxBlue, 0.5, {
        x: 100
        , y: -100
    })

    TimelineA.to(boxYellow, 1, {
        x: -100
        , y: 100
    })

    TimelineA.to(boxRed, 0.5, {
        x: 100
        , y: 100
    })

    setupEvents();

    function setupEvents() {

        $(boxGreen).bind('click', function (event) {
            window.location = "http://www.green.com";
        });

        $(boxBlue).bind('click', function (event) {
            window.location = "http://www.blue.com";
        });

        $(boxYellow).bind('click', function (event) {
            window.location = "http://www.yellow.com";
        });

        $(boxRed).bind('click', function (event) {
            window.location = "http://www.red.com";
        });
    }
}