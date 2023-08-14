export function createCatsOptions(cats = []) {
  return cats
    .map(({ name, id }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
}

export function createCatsInfo([{ url, breeds }]) {
  return `  <img src="${url}" alt="${breeds[0].name}" width=600 />
      <div class="info">
      <h1 class="cats-title">${breeds[0].name}</h1>
      <p class="cats-description"><span class="bold">Description:</span>${breeds[0].description}</p>
      <p class="cats-temperament"><span class="bold">Temperament:</span> ${breeds[0].temperament}</p>
      </div>`;
}

export function addMarkup(markup, el) {
  el.innerHTML = markup;
}
