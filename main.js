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


        const enderecoNovaImagem = $('#endereco-imagem').val()


        const novoItem = $('<li style = "display:none"></li>')


        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem)


        $(`<div class="overlay"><a href="${enderecoNovaImagem}" target = "_blank" title="Ver imagem em tamanho real>Ver imagem em tamanho real</a></div>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)

        $('#endereco-imagem').value('')
     })


});
