import refs from './refs';
import removeItemLS from './remove-itemLS';

const { cart } = refs;
cart.addEventListener('click', removeElem);
function removeElem(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  console.log(event.target.dataset.id);
  removeItemLS(event.target.dataset.id);
  cart.removeChild(event.target.parentElement);
}
