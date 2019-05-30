'use strict';

class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
    this.article = document.createElement('article');

    let div = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerHTML = this.title;

    let name = document.createElement('p');
    name.innerHTML = this.author;

    this.article.appendChild(h2);
    this.article.appendChild(name);
    div.insertAdjacentHTML("beforeEnd", this.text);
    this.article.appendChild(div);
    return this.article;
  }
  matches(query) {
    if (this.title.includes(query) || this.title.includes(query) || this.title.includes(query)) {
      return true;
    } else {
      return false;
    }
  }
}

