console.log(1111);
debugger

const button = document.querySelector('#btn')

button?.addEventListener('click', clickCB);
function clickCB(e) {
  console.log('other....');
  console.log('other....');
  console.log('other....');
  console.log('other....');
  console.log(e);
}


const add = (x, y) => {
  x = 2 * x;
  return x + y;
}