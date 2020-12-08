// ANIMAÇÕES


$('#button').click(()=>{
    $('#green').animate({width: 500, height:500 ,borderRadius:250},3000);
});

$('#stop').click(()=>{
    $('#green').stop();
})

$('#voltar').click(()=>{
    $('#green').animate({width: 300, height:300,borderRadius:0},2000);
   
})

let quadrado = document.getElementById('green');


aumentar = document.getElementById('js').addEventListener('click',aumento=>{
    quadrado.style.width ='500px'
    quadrado.style.height ='500px'

    

})
