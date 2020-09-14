$(document).ready(function() {
    $('#window').resizable({
        stop: function(event, ui) {
            SetCookie();
        }
    });
    $('#window').draggable({
        handle: "#header",
        cancel: ".buttons",
        containment:"body",
        stop: function(event, ui) {
            SetCookie();
        }
    });
    if ($.cookie('options') != null ) {
        var f = $.cookie('options').split('|');
        $('#window').css('left', f[0])
                    .css('top', f[1])
                    .css('width', f[2])
                    .css('height', f[3]);
    } else {
        $('#window').css('left', 'calc(50% - ' + $('#window').css('width') + ' / 2)')
                    .css('top', 'calc(50% - ' + $('#window').css('height') + ' / 2)');
    }
    $('#window').show();
});
function SetCookie(){
    $.cookie('options', $('#window').css('left') + "|" + $('#window').css('top') + "|" + $('#window').css('width') + "|" + $('#window').css('height'));
}
$(".button-max").click(function(){
    $('#window').toggleClass('fullscreen');
});
