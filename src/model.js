// const ALL_NOTES_URL = 'http://localhost:3000';
const ALL_NOTES_URL = 'https://jsonplaceholder.typicode.com/todos/1';

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
    console.log('Model button clicked with ' + noteText)
  }
}

export default Model;
