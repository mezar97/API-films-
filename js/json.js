 $(function(){
    $('#search-form').submit(function (e){
        e.preventDefault(); 
         var searchOrder = $ ('#input-order').val();
         getRequest(searchOrder);
     });

     function getRequest(input){
         var url = "https://www.omdbapi.com/?";
         var rules = {
             apikey: '72812fa9',
             s: input,
             r: 'json'
         };
         $.getJSON(url,rules,function(data){
             showResults(data.Search);
         });
     } 

     
     function showResults(data){
         
        $("#search-results").html("");  
         $.each(data,function(i,value){
             $('#search-results').append(` <li> 
             <a class="" href="http://www.imdb.com/title/${value.imdbID}">
            <fieldset><img class="films" src=${value.Poster} alt=" OBS!! Sorry!! photo not found"></fieldset>
             </a>
             <div class="film-info">
                 <span> <hr>
                 <a href="http://www.imdb.com/title/${value.imdbID}" class="link" target="_blank">Watch now !!</a> <hr>
                 <a href="#">${value.Title} <hr>
                 ${value.Year}</a> <hr> 
                  </span>
             </div>

         </li>`);
         })
     }
 });
//  AIzaSyDRQL9wMtM6y4eKIKErZy3QmuyVPt5P-XU
