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
  let userSize = document.getElementById("size").value
  let userdrink = document.getElementById("kind-of-drink").value

  if (userSize == "Small") {
    let sizePrice = 1.0
    document.getElementById("drink").innerHTML =
      "You want to order a small soft drink."
  } else if (userSize == "Medium") {
    let sizePrice = 1.5
    document.getElementById("drink").innerHTML =
      "You want to order a medium soft drink."
  } else if (userSize == "Large") {
    let sizePrice = 2.0
    document.getElementById("drink").innerHTML =
      "You want to order a large soft drink."
  } else {
    document.getElementById("drink").innerHTML = "Error"
  }

  if (userdrink == "cola") {
    let topingPrice = 0.5
    document.getElementById("kind-of-drink").innerHTML = "You want to add cola."
  } else if (userdrink == "Sprite") {
    let topingPrice = 1.0
    document.getElementById("kind-of-drink").innerHTML =
      "You want to add Sprite."
  } else if (userdrink == "pepsi") {
    let topingPrice = 1.5
    document.getElementById("kind-of-drink").innerHTML = "You want pepsi."
  } else {
    document.getElementById("kind-of-drink").innerHTML = "Error"
  }

  let totalPrice = sizePrice + drinkPrice

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice
}
