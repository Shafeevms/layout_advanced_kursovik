const citySelect = document.querySelector('.header__select');
const categorySelect = document.querySelector('.header__categselect');

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


