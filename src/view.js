import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    // for (let note of notes) {
    var element = this.builder.createNode('p', notes.id);
    this.builder.addNode(element, 'view-note-span');
    this.builder.updateText(notes.id, notes.title);
    // }
  }
}

export default View;
