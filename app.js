$(document).ready(function () {
    $('#boton').click(function(e){
        e.preventDefault();
        let buscar = $('#buscar').val();
        $('#h2').html(buscar);
        console.log('hello bitchess');
    })
});