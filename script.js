const favoritar = (parameter) => {
    const cardFav = $(parameter).parent().html()

    verificar(cardFav, document.querySelectorAll('section'))
}

function verificar(dom, domChildren) {
    let add = true
    const element = dom

    $(domChildren).children().each((_,item) => {
        const tem = $(item).find('h1').text()
        const vaiter = $($(dom)[0]).text()

        if (tem != '' && vaiter != '' && tem == vaiter) {
           $(item).remove()
        }
    })

    if (add) {
        $('section').append(`<div class="card"> ${element} </div>`)
        add = false
    }
}

let num = 0

const lado = () => {
    const max = $('.card').length // retorna a quantidade de elementos que tem
    let element = $('.card') // retorna uma tabela com todos os elementos que tiver a classe .card
    

    $(element).css('backgroundColor','red') // adicionamos um css no elemento
    $(element[num]).css('backgroundColor','blue') // dentro da tabela que nos retorna o elemento,estamos procurando o elemento que tiver a key do num
    if (num + 1 > max || element[num] == undefined) { // verificamos se o num é maior q a quantidade maxima de elementos que tem,ou é undefined
        $(element).css('backgroundColor','red') 
        element = $($('.card')[0]).css('backgroundColor', 'blue') // adicionamos um backgroundColor para o primeiro elemento da tabela
        num = 0 // se for maior ou undefined definimos num = 0 para ele voltar do inicio
        return // cancelo a funcao e volto do 0
    }

    num++ // adiciono um numero a mais ex: se num for igual a 1,ele adiciona mais um e fica 2,etc...
}