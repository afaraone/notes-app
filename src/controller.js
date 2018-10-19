class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bind('createButtonClick', this.createButtonClicked.bind(this))
  }
  async initialise() {
    await this.model.loadNotes();
    await this.view.renderNotes(this.model.notes);
    //await this.view.expander();
    this.view.bind('deleteButtonAdd', this.deleteButtonClicked.bind(this))
    this.view.bind('editButtonAdd', this.editButtonClicked.bind(this))
    this.view.bind('nicsButtonAdd', this.nicsButtonClicked.bind(this))
  }
  createButtonClicked(noteText) {
    console.log('Controller button clicked')
    this.model.createNote(noteText);
    setTimeout(() => {
      this.clearBox();
      this.initialise();
    }, 500)
  }

  // this will be called in constructor with bind method
  deleteButtonClicked(id) {
    console.log(`Delete called in controller with id ${id}`)
    this.model.deleteNote(id);
    setTimeout(() => {
      this.clearBox();
      this.initialise();
    }, 500)
  }

  editButtonClicked(id, text) {
    console.log(`Edit called in controller with id ${id}`)
    this.model.editNote(id, text);
    setTimeout(() => {
      this.clearBox();
      this.initialise();
      document.getElementById('create-note-text').value = ''
    }, 500)
  }

  nicsButtonClicked(id, text) {
    console.log(`Edit called in controller with id ${id}`)
    this.model.nicNote(id, text);
    setTimeout(() => {
      this.clearBox();
      this.initialise();
      document.getElementById('create-note-text').value = ''
    }, 500)
  }

  clearBox() {
      let div = document.getElementById('view-note-span');
      while(div.firstChild) {
      div.removeChild(div.firstChild);
    };
  };


}

export default Controller;
