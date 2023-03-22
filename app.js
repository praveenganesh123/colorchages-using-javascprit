

function color(){
    let text = document.getElementById('text')
    // text.style.backgroundColor = text.value;
    // text.style.background = text.value;
    // text.value =''
    document.body.style.backgroundColor = text.value
    text.value = ''

    text.style.display ='none'

    let btn = document.getElementById('btn')
    btn.style.display = 'none'
    // let body = document.getElementById("body")
    // body.style.color = body.value;

    let card = document.getElementById('card')
    card.style.display = 'none'
    
}