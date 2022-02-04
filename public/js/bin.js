// let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
// if(!productsInCart){
// 	productsInCart = [];
// }

const parentElement = document.querySelector('#quantity');
const quntityinput = document.getElementById('quantity')
const bin = document.querySelector('.bin').id
const price = document.getElementById('price').innerText


quntityinput.addEventListener('click', async (e) => {
  // console.log(e);
  e.preventDefault();
  let x = document.querySelector('.subtotal');
  x.innerText = `${e.target.value * price}`
  localStorage.setItem(`subtotal${bin}`, x.innerText);
});


// entries.addEventListener('click', async (e) => {

//   if (e.target.classList.contains('delete')) {
//     e.preventDefault();// optional chaining operator
//     const ft = await fetch(`/entry/${e.target.dataset.id}`, { method: 'DELETE' });
//     if (ft.status === 200) {
//       e.target.closest('.entry').remove();
//     } else {
//       alert('error!!!11');
//     }
//   }
// });
