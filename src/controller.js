class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bind('createButtonClick', this.createButtonClicked.bind(this))
    // this.view.bind('deleteButtonClick', this.deleteButtonClicked.bind(this))
  }
  async initialise() {
    await this.model.loadNotes();
    await this.view.renderNotes(this.model.notes);
    //await this.view.expander();
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
  deleteButtonClicked() {
    console.log("Delete called in controller")
  }

  clearBox() {
      let div = document.getElementById('view-note-span');
      while(div.firstChild) {
      div.removeChild(div.firstChild);
    };
  };
}

export default Controller;
