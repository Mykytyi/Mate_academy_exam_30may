'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let article_list = document.getElementById('article-list');

  let data;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles', true);

  xhr.addEventListener('load', function(){
    if (this.status === 200) {
      console.log(`Success(code: ${this.status})`);
    } else {
      console.log("Error: " + this.status);
    }
    data = JSON.parse(this.responseText);

    let container = new ArticleList(article_list);
    for (let item of data) {
      container.addArticle(item);
    }
    container.render();
  });

  xhr.send();
  document.addEventListener('click', function(event) {
    let item = event.target;
    if(item.classList.value === 'cross') {

    }
  });
});