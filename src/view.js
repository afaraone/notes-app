import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    for (let note of notes) {
      let noteId = note._id.toString()
      console.log(noteId)
      let noteDivId = 'noteDiv' + noteId
      let noteDiv = this.builder.createNode('div', noteDivId)
      this.builder.addNode(noteDiv, 'view-note-span');
      let noteText = this.builder.createNode('p', noteId);
      let noteDeleteId = 'delete' + noteId
      let noteDelete = this.builder.createNode('button', noteDeleteId)
      this.builder.addNode(noteText, noteDivId)
      this.builder.addNode(noteDelete, noteDivId)
      this.builder.updateText(noteId, note.title);
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
