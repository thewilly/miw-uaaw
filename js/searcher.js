window.onload = function(){
    let searchBtn = document.getElementById('searchBtn');
    document.getElementById("searchResults").style.display = "none";
    searchBtn.addEventListener("click",function(){
        search();
    })
}

async function search(){
    document.getElementById("searchResults").style.display = "block";
    
    $('#searchResults').empty();
    let criteria = document.getElementById("searchedText").value.toLowerCase();
      
    let results = 0;
 
    $.get( "/miw-uaaw/index.html", function( data ) {
       let content = data;
       let result = content.toLowerCase().search(criteria)
        if(result!=-1){
            $('#searchResults').append($("<p><a href='/miw-uaaw/index.html'>Inicio</a></p>"))
            results++;
        }
    }); 

    $.get( "/miw-uaaw/aficiones.html", function( data ) {
        let content = data;
        let result = content.toLowerCase().search(criteria)
        if(result!=-1){
            $('#searchResults').append($("<p><a href='/miw-uaaw/aficiones.html'>Aficiones</a></p>"))
            results++;
        }
      });

    $.get( "/miw-uaaw/publicaciones.html", function( data ) {
        let content = data;
       let result = content.toLowerCase().search(criteria)
       if(result!=-1){
            $('#searchResults').append($("<p><a href='/miw-uaaw/publicaciones.html'>Publicaciones</a></p>"))
            results++;
       }
      });

    await $.get( "/miw-uaaw/proyectos.html", function( data ) {
        let content = data;
        let result = content.toLowerCase().search(criteria)
        if(result!=-1){
            $('#searchResults').append($("<p><a href='/miw-uaaw/proyectos.html'>Proyectos</a></p>"))
            results++;
        }
      });


  
    if(results<=0){
        $('#searchResults').append("<div><h2>Lo siento, se han encontrado </h2><p>("+results+") resultados para \""+criteria+"\"</p></div>")
        console.log(results);
    }else{
        $('#searchResults').prepend("<div><h2>Se han encontrado </h2><p>("+results+") resultados para \""+criteria+"\"</p></div>")
        console.log(results);
        
    }
}
