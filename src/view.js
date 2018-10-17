import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('notes');
    for (let note of notes) {
      var element = this.builder.createNode('p', note._id);
      this.builder.addNode(element, 'notes');
      this.builder.updateText(note._id, 'hello');
    }
  }
}

export default View;
