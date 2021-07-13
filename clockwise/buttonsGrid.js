const btn5 = document.querySelector('#btn5')
const numbers = [1, 2, 3, 6, 9, 8, 7, 4]
const ids=[1,2,3,6,9,8,7,4]

btn5.addEventListener('click', () => {
  numbers.unshift(numbers.pop())
  ids.forEach((el, elIdx) => {
    document.querySelector(`#btn${el}`).innerHTML = numbers[elIdx]
  });
})