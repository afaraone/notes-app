"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

var _bakeryBuilderModule = _interopRequireDefault(require("./bakeryBuilder.module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class View {
  constructor(bakeryBuilder = new _bakeryBuilderModule.default()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');

    for (let note of notes) {
      // set names of elements
      let noteId = note._id.toString();

      let noteDivId = 'noteDiv' + noteId;
      let noteDeleteId = 'delete' + noteId;
      let noteEditId = 'edit' + noteId; // create div

      let noteDiv = this.builder.createNode('div', noteDivId);
      this.builder.addNode(noteDiv, 'view-note-span'); // create text, edit and delete buttons

      let noteText = this.builder.createNode('p', noteId);
      let noteEdit = this.builder.createNode('button', noteEditId);
      let noteDelete = this.builder.createNode('button', noteDeleteId); // add elements to div

      this.builder.addNode(noteText, noteDivId);
      this.builder.addNode(noteEdit, noteDivId);
      this.builder.addNode(noteDelete, noteDivId); // add text to elements

      this.builder.updateText(noteId, note.title);
      this.builder.updateText(noteEditId, "Edit");
      this.builder.updateText(noteDeleteId, "Delete");
    }
  }

  bind(event, cb) {
    let self = this;

    if (event === 'createButtonClick') {
      this.builder.updateClick('create-note-btn', function () {
        self.createNoteClicked(cb);
      });
    }
  }

}

let expander = function expander() {
  let counter = 0;

  for (let note of notes) {
    var element = this.builder.createNode('p', note.id);
    this.builder.addNode(element, 'view-note-span');
    this.builder.updateText(note.id, note.title.substring(0, 20));
    counter++;
    this.builder.updateClick(note.id, () => {
      this.builder.updateText(note.id, note.title);
    });
    if (counter > 7) break;
  }
};

var _default = View;
exports.default = _default;