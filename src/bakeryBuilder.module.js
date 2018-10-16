class bakeryBuilder {
  constructor() {
    this.request = new XMLHttpRequest();
  }

  createNode(type, id = null) {
      let element = document.createElement(type);
      if (id) { element.setAttribute('id', id) }
      return element
  }

  addNode(node, afterID) {
    let afterNode = document.getElementById(afterID)
    afterNode.appendChild(node)
  }

  updateText(id, value) {
    let element = document.getElementById(id)
    if (element === null) {
      throw new Error('No element with that id')
    } else {
      element.innerHTML = value
    }
  }

  getText(id) {
    return document.getElementById(id).innerHTML
  }

  updateClick(id, func) {
    document.getElementById(id).onclick = func
  }
}
