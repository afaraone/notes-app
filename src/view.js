import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    for (let note of notes) {
    var element = this.builder.createNode('p', note.id);
    this.builder.addNode(element, 'view-note-span');
    this.builder.updateText(note.id, note.title);
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
