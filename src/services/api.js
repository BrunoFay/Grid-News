const setDate = new Date();
const Todaydate = `${setDate.getFullYear()}-${setDate.getMonth()+1}-${setDate.getDate()}`

fetch(`https://newsapi.org/v2/everything?q=Apple&from=${Todaydate}&sortBy=popularity&apiKey=35af0917ca67481a91caf6dd75a8caeb`).then(res=>res.json()).then(data=>console.log(data.articles))