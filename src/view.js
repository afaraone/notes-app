import BakeryBuilder from './bakeryBuilder.module.js';

class View {
  constructor(bakeryBuilder = new BakeryBuilder()) {
    this.builder = bakeryBuilder;
  }

  async renderNotes(notes) {
    let noteElement = this.builder.getElementById('view-note-span');
    let counter = 0
    for (let note of notes.reverse()) {
      // set names of elements
      let noteId = note._id.toString()
      let noteDivId = 'noteDiv' + noteId
      let noteDeleteId = 'delete' + noteId
      let noteEditId = 'edit' + noteId
      let noteClass = 'noteClass'

      // create div
      let noteDiv = this.builder.createNode('div', noteDivId, noteClass)
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
      this.builder.updateText(noteId, note.title.substring(0, 20));
      this.builder.updateText(noteEditId, "Edit");
      this.builder.updateText(noteDeleteId, "Delete");
      this.builder.addAttribute(noteId, 'expanded', 1)
      counter ++
      if (counter > 7) break
    }
  }

  bind(event, cb) {
    let self = this
    if (event === 'createButtonClick') {
      this.builder.updateClick('create-note-btn', function() {
        self.createNoteClicked(cb);
      })
    } else if(event === 'deleteButtonAdd') {
      // what id do we put here? maybe a delete class???
      let all = document.getElementsByTagName('*')
      for (let node of all) {
        if (node.id.includes('delete')) {
          this.builder.updateClick(node.id, function() {
              let realId = node.id.substr(6)
              self.deleteNoteClicked(cb, realId)
          })
        }
      }
    } else if(event === 'editButtonAdd') {
      // what id do we put here? maybe a delete class???
      let all = document.getElementsByTagName('*')
      for (let node of all) {
        if (node.id.includes('edit')) {
          this.builder.updateClick(node.id, function() {
              let realId = node.id.substr(4)
              self.editNoteClicked(cb, realId)
          })
        }
      }
    }
  }

  createNoteClicked(cb) {
    var test = this.builder.getText('create-note-text')
    cb(test)
  }

  async expander(){
    this.builder.updateClick('noteDiv1', () => {
    this.builder.updateText('1', 'hello')
    });
  }

  // this should return the parent id (of the individual note div) (bakeryBuilder getParentId)
  deleteNoteClicked(cb, id) {
    cb(id)
    console.log("delete button clicked")
  }

  editNoteClicked(cb, id) {
    let text = this.builder.getText('create-note-text')
    cb(id, text)
    console.log("edit button clicked")
  }
}






export default View;
