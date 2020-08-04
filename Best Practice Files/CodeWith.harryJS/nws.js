console.log("this is my js file");
let source = 'bbc-news';
//grab the news container
let xyz =document.getElementById("xyz");
let newsAccordion= document.getElementById("newsAccordion");
//create the get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`
http://newsapi.org/v2/top-headlines?country=in&apiKey=72cfe08d5ae242048138d58f1e60f53b`,true);
// xhr.open('GET',`https://newsapi.org/v2/sources=${source}&apiKey=72cfe08d5ae242048138d58f1e60f53b`,true);
xhr.getResponseHeader("content-type","application/json");

xhr.onload= function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let newsHtml ="";
        articles.forEach(function(element, index) {
            
             let news =
                    `<div class="card">
                    <div class="card-header" id="heading${[index]}">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${[index]}" aria-expanded="true" aria-controls="collapse${[index]}">
                          <b>News NO: ${[index+1]} </b>${element["title"]}
                        </button>
                        </h2>
                    </div>

                    <div id="collapse${[index]}" class="collapse" aria-labelledby="heading${[index]}" data-parent="#newsAccordion">
                        <div class="card-body"> ${element["content"]}.<a href="${element["url"]}" target ="_blank">Read more here </a></div>
                    </div>
                    </div>`;
            newsHtml += news;
            
        });
        xyz.innerHTML =`Top 10 News from ${source}`;
        newsAccordion.innerHTML= newsHtml;
    }
    else{
        console.log("some error occured");
    }
}
xhr.send();

