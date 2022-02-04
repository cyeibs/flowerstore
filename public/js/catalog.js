// Функции
function createHTML(shablon, arr) {
  if (Array.isArray(arr)) {
    const resArr = arr.map((el) => {
      let str = shablon;
      for (const key in el) {
        str = str.split(`{this.${key}}`).join(`${el[key]}`);
      }
      return str;
    });
    // console.log(resArr);
    return resArr.join('');
  }
  return createHTML(shablon, [arr]);
}

// Слушатель

document.addEventListener('click', async (event) => {
  const thisElement = event.target;
  const shablon = document.querySelector('.teplate-shablon').innerHTML;

  if (thisElement.classList.contains('cats-button')) {
    event.preventDefault();
    const thisCat = thisElement.name;
    let res = await fetch(`http://localhost:3000/catalog/${thisCat}`, {
      method: 'POST',
    });
    if (res.ok) {
      const { allFlowers } = await res.json();
      const html = createHTML(shablon, allFlowers);
      document.querySelector('.shablon').innerHTML = html;
    } else {
      console.log('Ошибка');
    }
  }

  if (thisElement.classList.contains('all-bucets')) {
    event.preventDefault();
    const result = await fetch('http://localhost:3000/catalog', {
      method: 'POST',
    });
    if (result.ok) {
      const { allFlowers } = await result.json();
      const allHtml = createHTML(shablon, allFlowers);
      document.querySelector('.shablon').innerHTML = allHtml;
    } else {
      console.log('Ошибка');
    }
  }

  if (thisElement.classList.contains('sort-desc')) {
    event.preventDefault();
    const result = await fetch('http://localhost:3000/catalog/sort/byDesc', {
      method: 'POST',
    });
    if (result.ok) {
      const { allFlowers } = await result.json();
      const allHtml = createHTML(shablon, allFlowers);
      document.querySelector('.shablon').innerHTML = allHtml;
    } else {
      console.log('Ошибка');
    }
  }

  if (thisElement.classList.contains('sort-asc')) {
    event.preventDefault();
    const result = await fetch('http://localhost:3000/catalog/sort/byAsc', {
      method: 'POST',
    });
    if (result.ok) {
      const { allFlowers } = await result.json();
      const allHtml = createHTML(shablon, allFlowers);
      document.querySelector('.shablon').innerHTML = allHtml;
    } else {
      console.log('Ошибка');
    }
  }

  if (thisElement.classList.contains('to-bin-button')) {
    event.preventDefault();
    const id = thisElement.closest('.col-12').id;
    const res = fetch('http://localhost:3000/catalog/bin/addToBin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  }
});
