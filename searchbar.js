function search_movies() {
    let searchInput = document.getElementById('search-input').value;
    let fixedInput = searchInput.toLowerCase();
    let display = document.getElementById('display');
    let count = 0;

    let html = "";
    // this fetches the json
    fetch('movies.json')
        .then(data => data.json())
        .then(data => {
           // this makes it all lower case and tests to see if the movie displays.
            for(let i = 0; i < Object.keys(data).length; i++) {
                if(data[i].name.toLowerCase().includes(fixedInput) && fixedInput != " ") {
                    console.log(data[i].name);
                    html += "<div id='entire-movie'" +
                                "<div id='movie-title'> Name: " + data[i].name + 
                                    "<div id='ib release_date'> Release Date: " + data[i]["release date"] + 
                                    "</div>" +
                                "</div>" +
                            "</div>";
                }
                else {
                    count++;
                    console.log("nope");
                    if(count >= Object.keys(data).length) {
                        html += "<div id='no-movies'> No movies are found by this title </div>";
                    }
                }
            }
            document.getElementById('display').innerHTML = html;
    });
}