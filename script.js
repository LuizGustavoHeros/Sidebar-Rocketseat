function clicou() {  
  const menu = document.querySelector('nav');
  const botao = document.querySelector('button')
  const exit = document.querySelector('.botao-exit')
  const logo = document.querySelector('.logo')
  const foto = document.querySelector('.info-exit')
  const tittle = document.querySelector('.titulo')
  // document.querySelectorAll('.info').forEach(elemento => {
  //   elemento.classList.toggle('add-info')
  // })
  
  botao.classList.toggle('botao-ativo')
  menu.classList.toggle('mudar');
  exit.classList.toggle('botao-exit-ativo')
  logo.classList.toggle('logo-ativo')
  foto.classList.toggle('info-exit-active')
  tittle.classList.toggle('titulo-open')
}
