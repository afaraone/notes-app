const ALL_NOTES_URL = 'http://f012cee7.ngrok.io';
// const ALL_NOTES_URL = 'https://jsonplaceholder.typicode.com/todos';

class Model {
  constructor(bakersBoy) {
    this.bakersBoy = bakersBoy;
    this.notes = {};
  }

  async loadNotes() {
    try {
      this.notes = await this.bakersBoy.get(ALL_NOTES_URL);
      // this.notes.sort((a, b) => {
      //   if (a.title < b.title) return -1;
      //   if (a.title > b.title) return 1;
      //   return 0;
      // });
    } catch (error) {
      console.log(error.message);
    }
  }
  createNote(noteText) {
    this.bakersBoy.post(ALL_NOTES_URL, { title: noteText });
  }
}

export default Model;
