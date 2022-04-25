function search_movies() {
   
    let searchInput = document.getElementById('search-input').value;

    // this fetches the json
    fetch('movies.json')
        .then(data => data.json())
        .then(data => {
            // this takes the json and allows us to loop through for each movie
            for(let i = 0; i < Object.keys(data).length; i++) {
                console.log(data[i].name);

            }
 
    });

}