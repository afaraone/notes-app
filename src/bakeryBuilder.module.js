class BakeryBuilder {
  createNode(type, id = null) {
    let element = document.createElement(type);
    if (id) {
      element.setAttribute('id', id);
    }
    return element;
  }

  addNode(node, afterID) {
    let afterNode = this.getElementById(afterID);
    afterNode.appendChild(node);
  }

  updateText(id, value) {
    let element = this.getElementById(id);
    if (element === null) {
      throw new Error('No element with that id');
    } else {
      element.innerHTML = value;
    }
  }

  getText(id) {
    return this.getElementById(id).innerHTML;
  }

  updateClick(id, func) {
    this.getElementById(id).onclick = func;
  }

  getElementById(id) {
    return document.getElementById(id);
  }
}

export default BakeryBuilder;
