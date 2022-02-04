// let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
// if(!productsInCart){
// 	productsInCart = [];
// }

const parentElement = document.querySelector('#quantity');
const quntityinput = document.getElementById('quantity')
const remove = document.getElementById('delete')
const upd = document.getElementById('update')
const bin = document.querySelector('.bin').id
const row = document.querySelector('.bin')
const price = document.getElementById('price').innerText
let quant = document.querySelector('#quantity')


quntityinput.addEventListener('click', async (e) => {
  console.log(e);
  e.preventDefault();
  let x = document.querySelector('.subtotal');
  x.innerText = `${e.target.value * price}`
  localStorage.setItem(`subtotal${bin}`, x.innerText);
});

remove.addEventListener('click', async (e) => {
  // console.log(e);
  e.preventDefault();
  let x = document.querySelector('.delete');
  row.remove()
  const response = await fetch(`/bin/${bin}`, {
    method: 'DELETE'
  });
});

upd.addEventListener('click', async (e) => {
  let smth = quant.value
  // console.log(e);
  console.log(quant);
  e.preventDefault();
  let x = document.querySelector('.update');
  const response = await fetch(`/bin/${bin}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({count: smth})
  }
  );
  console.log(quant);
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
