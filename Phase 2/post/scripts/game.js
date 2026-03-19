import {gameCards} from './data.js';

console.log(gameCards);

function render (data){
 console.log("to render a page");
 let container = document.querySelector(".cards-container");
 data.forEach((item)=>{
  const card = `
<div class="card">
<div class="card-flipper">

    <div class="card-front">
        <img class="img" src="${item.thumbnail}" alt="${item.title}">
    </div>

    <div class="card-back">
    <a href="${item.link}">
        <span> Play ${item.title}</span>
    </a>
    </div>
   
</div>
</div>
      `;
  container.innerHTML += card;
 });
 
}

    //   <div class="title-container">
    //       ${item.title}
    //   </div>
//  <a href="${item.link}"></a>
render(gameCards);