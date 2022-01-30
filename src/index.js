const citySelect = document.querySelector('.header__select');
const categorySelect = document.querySelector('.header__categselect');
const burgerOpenBtn = document.querySelector('.header__burger-open');
const burger = document.querySelector('.burger');

const cityChoices = new Choices(citySelect, {
  searchEnabled: false,
  searchFields: ['label', 'value'],
  itemSelectText: '',

});

const categoryChoises = new Choices(categorySelect, {
  searchEnabled: false,
  searchFields: ['label', 'value'],
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices choices-category',
    containerInner: 'choices__inner choices__inner-category',
    input: 'choices__input',
    inputCloned: 'choices__input--cloned',
  }
});

burgerOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  burger.classList.add('is-open');
});

document.body.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('burger__close')) {
    burger.classList.remove('is-open');
  }
});
