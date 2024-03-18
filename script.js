function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }
  // else{
  //   html.classList.add('light')
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    //se tive night mode manter a img padrao
    img.setAttribute("src", "./img/avatar.png")
  }
}
