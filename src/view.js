import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    let counter = 0
    for (let note of notes) {
    var element = this.builder.createNode('p', note.id);
    this.builder.addNode(element, 'view-note-span');
    this.builder.updateText(note.id, note.title.substring(1, 20));
    counter ++
    if (counter > 7) break
    }
  }
}

export default View;
