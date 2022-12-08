// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-07/sw.js", {
    scope: "/ICS20-Unit-5-07/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const userNumber = parseFloat(document.getElementById("userNumber").value)
  let sum = 0
  let add = 1

  // process
  for (let counter = 0; counter < userNumber; counter++) {
    sum = sum + add
    add = add + 1
  }

  // output
  document.getElementById("answer").innerHTML = "The sum is: " + sum
}
