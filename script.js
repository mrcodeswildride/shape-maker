let size = document.getElementById(`size`)
let lineButton = document.getElementById(`lineButton`)
let squareButton = document.getElementById(`squareButton`)
let right1Button = document.getElementById(`right1Button`)
let right2Button = document.getElementById(`right2Button`)
let isoButton = document.getElementById(`isoButton`)
let box = document.getElementById(`box`)

lineButton.addEventListener(`click`, line)
squareButton.addEventListener(`click`, square)
right1Button.addEventListener(`click`, right1)
right2Button.addEventListener(`click`, right2)
isoButton.addEventListener(`click`, iso)

function line() {
  let sizeValue = size.value.trim()

  if (sizeValue != `` && !isNaN(sizeValue)) {
    if (sizeValue > 50) {
      box.innerHTML = `Number cannot be more than 50.`
    }
    else {
      box.innerHTML = ``

      for (let i = 0; i < sizeValue; i++) {
        draw(i, 0)
      }
    }
  }
}

function square() {
  let sizeValue = size.value.trim()

  if (sizeValue != `` && !isNaN(sizeValue)) {
    if (sizeValue > 50) {
      box.innerHTML = `Number cannot be more than 50.`
    }
    else {
      box.innerHTML = ``

      for (let i = 0; i < sizeValue; i++) {
        for (let j = 0; j < sizeValue; j++) {
          draw(j, i)
        }
      }
    }
  }
}

function right1() {
  let sizeValue = size.value.trim()

  if (sizeValue != `` && !isNaN(sizeValue)) {
    if (sizeValue > 50) {
      box.innerHTML = `Number cannot be more than 50.`
    }
    else {
      box.innerHTML = ``

      for (let i = 0; i < sizeValue; i++) {
        for (let j = i; j < sizeValue; j++) {
          draw(j, i)
        }
      }
    }
  }
}

function right2() {
  let sizeValue = size.value.trim()

  if (sizeValue != `` && !isNaN(sizeValue)) {
    if (sizeValue > 50) {
      box.innerHTML = `Number cannot be more than 50.`
    }
    else {
      box.innerHTML = ``

      for (let i = 0; i < sizeValue; i++) {
        for (let j = 0; j < sizeValue - i; j++) {
          draw(j, i)
        }
      }
    }
  }
}

function iso() {
  let sizeValue = size.value.trim()

  if (sizeValue != `` && !isNaN(sizeValue)) {
    if (sizeValue > 50) {
      box.innerHTML = `Number cannot be more than 50.`
    }
    else {
      box.innerHTML = ``

      for (let i = 0; i < sizeValue; i++) {
        for (let j = i / 2; j < sizeValue - (i / 2); j++) {
          draw(j, i)
        }
      }
    }
  }
}

function draw(x, y) {
  let ball = document.createElement(`div`)
  ball.classList.add(`ball`)
  ball.style.left = `${x * 10}px`
  ball.style.top = `${y * 10}px`

  box.append(ball)
}