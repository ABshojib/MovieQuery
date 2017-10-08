var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi"},
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  {title:"padma nodir majhi",year:"1987",length:125,rating:"7.0",genre:"art-flim" }
  
];

function getMovieTitle( index ){
  //add code
  return movieList[index].title;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));

function addMovie( movie ){
  //add code
  movieList.push(movie);
  return movieList;

}

var newMovie = {title:"padma",year:"1987",length:125,rating:"7.0",genre:"art-flim"};
console.log(addMovie(newMovie));

function movieByRating(rate){
 
var fg=rate.toString();
for(var i=0;i<movieList.length;++i){
  if(movieList[i].rating == fg){
    return movieList[i];
  }

 }

}

console.log(movieByRating(8.5));

function findByTitle( title ){
 var vt;
 for(var i=0;i<movieList.length;++i){
      vt=movieList[i].title;
       var str=vt.toString();
        var str2=str.toLocaleLowerCase();
        var res=str2.split(" ");

       if(res.includes(title)){
         console.log(movieList[i]);

       }
 
 }



}

console.log(findByTitle("matrix"));
