var $modalBgHidden = document.querySelector('.modal-bg');
var $addEntryButton = document.querySelector('#add-entry-button');
function toggleDisplay() {
  $modalBgHidden.classList.remove('hidden');
}
$addEntryButton.addEventListener('click', toggleDisplay);

var $form = document.querySelector('.modal-window');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var info = {};
  info.week = $form.elements.week.value;
  info.time = $form.elements.time.value;
  info.description = $form.elements.description.value;
  data.entries.unshift(info);
  $modalBgHidden.classList.add('hidden');
});
