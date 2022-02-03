document.addEventListener('click', async (event) => {
  const thisElement = event.target;
  event.preventDefault();
  // console.log(thisElement);

  if (thisElement.classList.contains('cats-button')) {
    const thisCat = thisElement.name;
    let res = await fetch(`http://localhost:3000/catalog/${thisCat}`, {
      method: 'POST',
    });
    if (res.ok) {
      const { allFlowers, allCats } = await res.json();
      
    }
  }
});
