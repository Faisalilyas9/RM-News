const API_KEY = "3a935743aad944f88761612c6c748cce";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener("load", () => fetch("india"));

async function fetchNews (query) {
   const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
   const data = res.json();
   bindData(data.articles);
}

function bindData(articles) {
    
}