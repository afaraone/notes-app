class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  async initialise() {
    await this.model.loadNotes();
    await this.view.renderNotes(this.model.notes);
  }
}

export default Controller;
