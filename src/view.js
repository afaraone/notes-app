import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    for (let note of notes) {
      // set names of elements
      let noteId = note._id.toString()
      let noteDivId = 'noteDiv' + noteId
      let noteDeleteId = 'delete' + noteId
      let noteEditId = 'edit' + noteId

      // create div
      let noteDiv = this.builder.createNode('div', noteDivId)
      this.builder.addNode(noteDiv, 'view-note-span');

      // create text, edit and delete buttons
      let noteText = this.builder.createNode('p', noteId);
      let noteEdit = this.builder.createNode('button', noteEditId)
      let noteDelete = this.builder.createNode('button', noteDeleteId)

      // add elements to div
      this.builder.addNode(noteText, noteDivId)
      this.builder.addNode(noteEdit, noteDivId)
      this.builder.addNode(noteDelete, noteDivId)

      // add text to elements
      this.builder.updateText(noteId, note.title);
      this.builder.updateText(noteEditId, "Edit");
      this.builder.updateText(noteDeleteId, "Delete");
    }
  }

  bind(event, cb) {
    let self = this
    if (event === 'createButtonClick') {
      this.builder.updateClick('create-note-btn', function() {
        self.createNoteClicked(cb);
      })
    }
  }
  createNoteClicked(cb) {
    var test = this.builder.getText('create-note-text')
    cb(test)
  }
}



export default View;
