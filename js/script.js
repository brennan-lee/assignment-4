// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assignment-4/sw.js", {
    scope: "/assignment-4/",
  })
}

function calculate() {
  let userSize = document.getElementById("size-of-drink").value
  let userdrink = document.getElementById("kind-of-drink").value

  let sizePrice = 0.0
  let drinkPrice = 0.0

  if (userSize == "Small") {
    let sizePrice = 1.0
    document.getElementById("drink")
    ;("You want to order a small soft drink.")
  } else if (userSize == "Medium") {
    let sizePrice = 1.5
    document.getElementById("drink")
    ;("You want to order a medium soft drink.")
  } else if (userSize == "Large") {
    let sizePrice = 2.0
    document.getElementById("drink")
    ;("You want to order a large soft drink.")
  } else {
    document.getElementById("drink").innerHTML = "Error"
  }

  if (userdrink == "cola") {
    drinkPrice = 0.5
  } else if (userdrink == "Sprite") {
    drinkPrice = 1.0
  } else if (userdrink == "pepsi") {
    drinkPrice = 1.5
  } else {
    document.getElementById("kind-of-drink").innerHTML = "Error"
  }

  let totalPrice = sizePrice + drinkPrice

  document.getElementById("total").innerHTML =
    "your total will be" + totalPrice.toFixed(2)
}
