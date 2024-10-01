/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Oct 2024
 * This program plays Cookie Clicker
*/

let cookieNumber: number

basic.clearScreen()

cookieNumber = 0
basic.showString(cookieNumber.toString())

input.onButtonPressed(Button.A, function () {
    cookieNumber = cookieNumber + 1
    basic.showString(cookieNumber.toString())
})

input.onButtonPressed(Button.B, function () {
    cookieNumber = 0
    basic.showString(cookieNumber.toString())
})