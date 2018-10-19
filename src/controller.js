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
  }
  createButtonClicked(noteText) {
    console.log('Controller button clicked')
    this.model.createNote(noteText);
    setTimeout(() => {
      this.clearBox();
      this.initialise();
    }, 1000)

  }

  clearBox() {
      let div = document.getElementById('view-note-span');
      while(div.firstChild) {
      div.removeChild(div.firstChild);
    };
  };
}

export default Controller;
