const form = document.querySelector("form")??
null;
try{
const form = document.querySelectorAll("form")?? null;
const nomeInput = document.querySelectorAll("#nome");
const assuntoSelect =document.querySelector("#assunto");
const mensagemTexttarea = document.querySelector("#mensagem");
const enviarBtn = document.querySelector("#enviar-btn");

// validar formulario:
// 1-que o nome não seja vazio
// 2-que mensagem nao seja vazia a menos de 500 caracteres


function validarFormulario(evento){
    evento.preventDefault();
    let valido =true;
    if (nomeInput.value.trim()=== ""){
        valido = false;
        alert ("o campo de nome nao pode ser vazio!")
    }
    if(mensagemTextarea.value.trim()=== ""){
  valido = false;
  alert("mensagem não pode ser vazia!");
} 
else if(mensagemTextarea.value.trim().lenght > 500){
    valido=false;
    alert("mesangem deve ser maior que 500 caracteres.");
}
if(valido){
    alert("agaradecemos seu contato");
    form.submit();
    }}
enviarBtn.addEventListener('click',validarFormulario) 
} catch( exception){
    console.log(exception.message)
}
