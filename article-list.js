'use strict';

class ArticleList {
  constructor(container) {
    this.container = container;
    this.protoArr = [];
  }
  addArticle(article) {
    this.protoArr.push(article);
    console.log(this.protoArr);
  }
  removeArticle(article) {
    for (let i = 0; i < this.protoArr.length; i++) {
      if (this.protoArr[i] = article) {
        this.protoArr = this.protoArr.slice(i, 1);
      }
    }
  }
  render() {
    this.container.innerHTML = '';
    for (let item of this.protoArr) {
      let article = document.createElement('article');
      let h2 = document.createElement('h2');
      let name = document.createElement('p');
      let div = document.createElement('div');

      let divClose = document.createElement('div');
      divClose.classList.add('cross');

      h2.innerHTML = item.title;
      name.innerHTML = item.author;
      div.insertAdjacentHTML("beforeEnd", item.text);

      article.appendChild(divClose);
      article.appendChild(h2);
      article.appendChild(name);
      article.appendChild(div);

      this.container.appendChild(article);
    }
  }
}
