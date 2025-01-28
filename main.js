//chamar jquery = $

$(document).ready(function () {
   
    //primeiro opção
    
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#button-cancelar').click(function(){
        $('form').slideUp()
    })
     //segunda opção

     $('form').on('submit', function(e){
        e.preventDefault()
     })


});
