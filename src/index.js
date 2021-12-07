const citySelect = document.querySelector('.header__select');
const categorySelect = document.querySelector('.header__categSelect');

const cityChoices = new Choices(citySelect, {
  searchEnabled: false,
  searchFields: ['label', 'value'],
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices',
    containerInner: 'choices__inner',
    input: 'choices__input',
    inputCloned: 'choices__input--cloned',
    list: 'choices__list',
    listItems: 'choices__list--multiple',
    listSingle: 'choices__list--single',
    listDropdown: 'choices__list--dropdown',
    item: 'choices__item',
    itemSelectable: 'choices__item--selectable',
    itemDisabled: 'choices__item--disabled',
    itemChoice: 'choices__item--choice',
    placeholder: 'choices__placeholder',
    group: 'choices__group',
    groupHeading: 'choices__heading',
    button: 'choices__button',
    activeState: 'is-active',
    focusState: 'is-focused',
    openState: 'is-open',
    disabledState: 'is-disabled',
    highlightedState: 'is-highlighted',
    selectedState: 'is-selected',
    flippedState: 'is-flipped',
    loadingState: 'is-loading',
    noResults: 'has-no-results',
    noChoices: 'has-no-choices'
  },
  // Choices uses the great Fuse library for searching. You
  // can find more options here: https://github.com/krisk/Fuse#options
  // fuseOptions: {
  //   include: 'score'
  // },
  // callbackOnInit: null,
  // callbackOnCreateTemplates: null
});


// const categoryChoices = new Choices(categorySelect, {
//   searchEnabled: false,
//   searchFields: ['label', 'value'],
//   itemSelectText: '',
  // classNames: {
  //   containerOuter: 'categoryChoices',
  //   containerInner: 'choices__inner',
  //   input: 'choices__input',
  //   inputCloned: 'choices__input--cloned',
  //   list: 'choices__list',
  //   listItems: 'choices__list--multiple',
  //   listSingle: 'choices__list--single',
  //   listDropdown: 'choices__list--dropdown',
  //   item: 'choices__item',
  //   itemSelectable: 'choices__item--selectable',
  //   itemDisabled: 'choices__item--disabled',
  //   itemChoice: 'choices__item--choice',
  //   placeholder: 'choices__placeholder',
  //   group: 'choices__group',
  //   groupHeading: 'choices__heading',
  //   button: 'choices__button',
  //   activeState: 'is-active',
  //   focusState: 'is-focused',
  //   openState: 'is-open',
  //   disabledState: 'is-disabled',
  //   highlightedState: 'is-highlighted',
  //   selectedState: 'is-selected',
  //   flippedState: 'is-flipped',
  //   loadingState: 'is-loading',
  //   noResults: 'has-no-results',
  //   noChoices: 'has-no-choices'
  // },
// });
