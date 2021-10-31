$(document).ready(function () {
    $('#boton').click(function(e){
        e.preventDefault();
        let buscarn = $('#buscar').val();
        
         let template = `<h2> ${buscarn} </h2>`;

         $('#cont').html(template);
        console.log(buscarn);
    })
});