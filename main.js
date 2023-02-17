var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
  entryId: 1
};

var dataInJSON = localStorage.getItem('javascript-local-storage');
if (dataInJSON !== null) {
  data = JSON.parse(dataInJSON);
}

window.addEventListener('beforeunload', function (event) {
  var formJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', formJSON);
});

var $modalBgHidden = document.querySelector('.modal-bg');
var $addEntryButton = document.querySelector('#add-entry-button');

$addEntryButton.addEventListener('click', function (event) {
  $modalBgHidden.classList.remove('hidden');
});

var $form = document.querySelector('.modal-window');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var info = {};

  info.week = $form.elements.week.value;
  info.time = $form.elements.time.value;
  info.description = $form.elements.description.value;

  info.entryId = data.nextEntryId;
  data.nextEntryId++;

  data.entries.unshift(info);
  $modalBgHidden.classList.add('hidden');
});
