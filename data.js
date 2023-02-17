/* exported data */

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
