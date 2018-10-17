import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('notes');
    // for (let note of notes) {
    var element = this.builder.createNode('p', notes.id);
    this.builder.addNode(element, 'notes');
    this.builder.updateText(notes.id, notes.title);
    // }
  }
}

export default View;
