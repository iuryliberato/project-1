function init() {

  const grid = document.querySelector('.grid')
  const surfer = document.querySelector('.surfer')
  const cells = document.querySelectorAll('.cell')
  const noEntry = document.querySelectorAll('.no-Entry')

  let counter = 0
  const width = 11
  // car
  const carRowIndex = 6
  const carGap = 3
  const cars = Array.from(cells).slice(width * carRowIndex, width * (carRowIndex + 1))
  console.log(cars)
  // seagull 
  const seagullIndex = 2
  const seagullGap = 3
  const seagulls = Array.from(cells).slice(width * seagullIndex, width * (seagullIndex + 1))
  // truck
  const truckRowIndex = 4
  const truckGap = 3
  const trucks = Array.from(cells).slice(width * truckRowIndex, width * (truckRowIndex + 1))


  const startingPosition = 86
  let characterPosition = startingPosition


  function moveCharacter() {
    // cells.forEach(cell => cell.classList.remove('surfer'))
    // cells[characterPosition].classList.add('surfer')
    cells.forEach(cell => cell.innerHTML = '')
    cells[characterPosition].innerHTML = '<img src="/surfer.png" class="surfer" >'

  }

  function run() {
    counter++
    // console.log(counter) 
    cells.forEach(cell => cell.classList.remove('car', 'seagull', 'truck'))
    cars.forEach((car, index) => {
      if (index % carGap === carGap - 1 - counter % carGap) {
        car.classList.add('car')
      }
    })
    seagulls.forEach((seagull, index) => {
      if (index % seagullGap === seagullGap - 1 - counter % seagullGap) {
        seagull.classList.add('seagull')
      }
    })
    trucks.forEach((truck, index) => {
      if (index % truckGap === counter % truckGap) {
        truck.classList.add('truck')
      }
    })



  }
  setInterval(run, 500)


  document.addEventListener('keyup', event => {
    console.log(characterPosition % width)
    let newPosition = characterPosition

    if (event.code === 'ArrowUp' && characterPosition >= width) {
      newPosition -= width
    } else if (event.code === 'ArrowDown' && characterPosition < cells.length - width) {
      newPosition += width
    } else if (event.code === 'ArrowLeft' && characterPosition % width !== 0) {
      newPosition--
    } else if (event.code === 'ArrowRight' && (characterPosition + 1) % width !== 0) {
      newPosition++
    }


    if (!cells[newPosition].classList.contains('no-Entry')) {
      characterPosition = newPosition
      console.log('no-Enty')

    }
    console.log(characterPosition)
    moveCharacter()
  }
  )




// Puts the first character in a strat position.
  moveCharacter() 
}

window.addEventListener('DOMContentLoaded', init)