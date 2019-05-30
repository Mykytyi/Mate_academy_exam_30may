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

    for (let item of data) {
      let title = new Article(item['title'], item['author'], item['text']);
      console.log(title);//створюються статті, зосталося тільки трішки доробити...
    }
  });

  xhr.send();
});