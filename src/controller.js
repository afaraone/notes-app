class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bind('createButtonClick', this.createButtonClicked.bind(this))
  }
  async initialise() {
    await this.model.loadNotes();
    await this.view.renderNotes(this.model.notes);
  }
  createButtonClicked(noteText) {
    console.log('Controller button clicked')
    this.model.createNote(noteText);
  }
}

export default Controller;
