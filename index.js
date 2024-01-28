function campoEstaPreenchido() {

    let nomePreenchido = document.querySelector('.item-1')
    let nomeErro = document.querySelector('.display-1')

    let valueNome = nomePreenchido.value;

    if (valueNome) {
        nomePreenchido.classList.remove('formulario-padrao')
        nomePreenchido.classList.add('formulario-correto')
        nomeErro.classList.remove('alerta')
    } else {
        nomePreenchido.classList.remove('formulario-padrao')
        nomePreenchido.classList.remove('formulario-correto')
        nomePreenchido.classList.add('formulario-erro')
        nomeErro.classList.add('alerta')
    }

    let emailPreenchido = document.querySelector('.item-2')
    let emailErro = document.querySelector('.display-2')

    let valueEmail = emailPreenchido.value;

    if (valueEmail) {
        emailPreenchido.classList.remove('formulario-padrao')
        emailPreenchido.classList.add('formulario-correto')
        emailErro.classList.remove('alerta')
    } else {
        emailPreenchido.classList.remove('formulario-padrao')
        emailPreenchido.classList.remove('formulario-correto')
        emailPreenchido.classList.add('formulario-erro')
        emailErro.classList.add('alerta')
    }


    let telefonePreenchido = document.querySelector('.item-3')
    let telefoneErro = document.querySelector('.display-3')

    let valueTelefone = telefonePreenchido.value;

    if (valueTelefone) {
        telefonePreenchido.classList.remove('formulario-padrao')
        telefonePreenchido.classList.add('formulario-correto')
        telefoneErro.classList.remove('alerta')
    } else {
        telefonePreenchido.classList.remove('formulario-padrao')
        telefonePreenchido.classList.remove('formulario-correto')
        telefonePreenchido.classList.add('formulario-erro')
        telefoneErro.classList.add('alerta')
    }


    let mensagemPreenchido = document.querySelector('.item-4')
    let mensagemErro = document.querySelector('.display-4')

    let valueMensagem = mensagemPreenchido.value;

    if (valueMensagem) {
        mensagemPreenchido.classList.remove('formulario-padrao')
        mensagemPreenchido.classList.add('formulario-correto')
        mensagemErro.classList.remove('alerta')
    } else {
        mensagemPreenchido.classList.remove('formulario-padrao')
        mensagemPreenchido.classList.remove('formulario-correto')
        mensagemPreenchido.classList.add('formulario-erro')
        mensagemErro.classList.add('alerta')
    }
}