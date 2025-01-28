//chamar jquery = $

$(document).ready(function () {
    console.log(document.querySelector('header button'))
    console.log($('button-cancelar'))


    //primeiro opção
    $('header button').click(function(){
        alert('Tudo certo bebê!')
    })
     //segunda opção

     $('form').on('submit', function(e){
        e.preventDefault()
     })


});
