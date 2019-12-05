$(window).on('load', function() {
    $('#loader-bg');
    setTimeout("close()", 2000);
});

function close(){
    $('#loader-bg').hide(); 
}
