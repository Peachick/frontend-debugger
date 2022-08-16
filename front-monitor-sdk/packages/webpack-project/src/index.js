import { init, Client } from "sdk-helper"
init()
console.log(Client)

document.querySelector('#promise').addEventListener('click', () => {
  new Promise((resolve, reject) => reject(222))
})

// @ts-ignore
// console.log(s)


document.querySelector("#submit").addEventListener("click", e => {
  console.log(d)
})
