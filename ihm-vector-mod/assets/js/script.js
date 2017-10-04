function displayMore () {
  let more = document.querySelectorAll('.seccion')
  more.forEach(sec => {
    sec.style.display = 'block'
  })
}

let button = document.querySelector('.landing button')

button.addEventListener('click', displayMore)
