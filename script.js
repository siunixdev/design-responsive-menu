const buttonsearch = document.querySelector('.search')
const showingsearch = document.querySelector('.site')
buttonsearch.addEventListener('click', function() {
  showingsearch.classList.toggle('showsearch')
})

const buttonmenu = document.querySelector('.menu')
const showingmenu = document.querySelector('.site')
buttonmenu.addEventListener('click', function() {
  showingmenu.classList.toggle('showmenu')
})