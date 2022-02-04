function createHTML(shablon, arr) {
  if (Array.isArray(arr)) {
    const resArr = arr.map((el) => {
      let str = shablon;
      // eslint-disable-next-line no-restricted-syntax
      for (const key in el) {
        str = str.split(`{${key}}`).join(`${el[key]}`);
      }
      return str;
    });
    return resArr.join('');
  }
  return createHTML(shablon, [arr]);
}
