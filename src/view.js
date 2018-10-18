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
    this.builder.updateText(note.id, note.title.substring(0, 20));
    counter ++
    this.builder.updateClick(note.id, () => {
      this.builder.updateText(note.id, note.title)
    })

    if (counter > 7) break
    }
  }
}

export default View;
