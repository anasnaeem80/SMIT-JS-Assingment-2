function addParagraph(text) {
    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);
    const element = document.getElementsByTagName("body")[0];
    element.appendChild(para);
  }
  