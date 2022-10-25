let offset = $(".hammer").offset();
let offTop = 160;
let offleft = offset.left ;


function defaultPos() {
    $(".hammer").animate({width : "10%",left: offleft , top : offTop})
}


function hitA () {
    $(".hammer").animate({ width : "20%", left : "300", top : "70"},);
    setTimeout(defaultPos, 600);
}

function hitB () {
    $(".hammer").animate({ width : "20%", left : "970", top : "70"},);
    setTimeout(defaultPos, 600);
}

function hitC() {
    $(".hammer").animate({ width : "20%", left : "300", top : "420"},);
    setTimeout(defaultPos, 600);
}

function hitD() {
    $(".hammer").animate({ width : "20%", left : "970", top : "420"},);
    setTimeout(defaultPos, 600);
}


