const APIURL = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main=document.getElementById("main")

getMovies(APIURL)

async function getMovies(APIURL){
    const response=await fetch(APIURL);
    const respData= await response.json();
    console.log(respData);
    showMovies(respData.results)
}

function showMovies(movies){
    // console.log(movies);
    movies.forEach(function(el){
        const movieEl=document.createElement("div");
        movieEl.setAttribute("class","movie");

        main.appendChild(movieEl)
      
    })
}