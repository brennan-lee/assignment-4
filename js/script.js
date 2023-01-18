// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: Oct 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-4/sw.js", {
    scope: "/Assignment-4/",
  })
}

/**
 * This function displays an alert.
 * Words
 */
function calculate() {
  let userSize = document.getElementById("size").value
  let userkind = document.getElementById("kind").value

  let sizePrice = 0.0
  let kindPrice = 0.0

  if (userSize == "Small") {
    sizePrice = 1.0
  } else if (userSize == "Medium") {
    sizePrice = 1.5
  } else if (userSize == "Large") {
    sizePrice = 2.0
  } else {
    document.getElementById("drinkSize").innerHTML = "Error"
  }

  if (userKind == "pepsi") {
    kindPrice = 0.5
  } else if (userkind == "root-beer") {
    kindPrice = 1.0
  } else if (userKind == "cola") {
    kindPrice = 1.5
  } else {
    document.getElementById("kind").innerHTML = "Error"
  }

  let totalPrice = sizePrice + kindPrice

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice.toFixed(2)
}
