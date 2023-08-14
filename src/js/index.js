import { selectEl, catsInfoEl, errorEl, loadingEl } from '../refs/refs';
import { fetchBreeds } from '../api/cat-api';
import { createCatsOptions, addMarkup, createCatsInfo } from '../markup/markup';

fetchBreeds('breeds')
  .then(resp => {
    const selectMarkup = createCatsOptions(resp);
    addMarkup(selectMarkup, selectEl);
    loadingEl.classList.add('hide-element');
    selectEl.classList.add('show-element');
  })
  .catch(err => {
    errorMessage();
  });

selectEl.addEventListener('change', fetchCatByBreed);

function fetchCatByBreed(e) {
  whileLoading(catsInfoEl, loadingEl, 'hide-element', 'hide-element');
  const catsId = e.target.closest('.breed-select').value;
  fetchBreeds('images/search?breed_ids=' + catsId)
    .then(response => {
      const aboutCatMarkup = createCatsInfo(response);
      addMarkup(aboutCatMarkup, catsInfoEl);

      whileLoading(loadingEl, catsInfoEl, 'hide-element', 'hide-element');
    })
    .catch(err => {
      errorMessage();
    });
}

function errorMessage() {
  loadingEl.classList.add('hide-element');
  errorEl.classList.add('show');
}

function whileLoading(add, remove, addClass, removeClass) {
  add.classList.add(addClass);
  remove.classList.remove(removeClass);
}
