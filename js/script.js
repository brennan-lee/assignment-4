// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assignment-4/sw.js", {
    scope: "/assignment-4/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const TAX = 1.13
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("flavour").value)
  const messageAnswer = document.getElementById("message").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX

  if (messageAnswer == "no" && pickUpOrDelivery == "delivery") {
    document.getElementById("total").innerHTML =
      "Your total is: $" + deliveryOnly.toFixed(2) + " including tax."
  } else {
    document.getElementById("total").innerHTML =
      "Your total is: $" + basePrice.toFixed(2) + " including tax."
  }
}
