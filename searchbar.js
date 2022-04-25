function search_movies() {
    let searchInput = document.getElementById('search-input').value;
    let fixedInput = searchInput.toLowerCase();

    let test = "";
    let temp = "";
    // this fetches the json
    fetch('movies.json')
        .then(data => data.json())
        .then(data => {
           // this makes it all lower case and tests to see if the movie displays.
            for(let i = 0; i < Object.keys(data).length; i++) {
                if(data[i].name.toLowerCase().includes(fixedInput) && fixedInput != " ") {
                    console.log("yes");
                    return;
                }
                else {
                    console.log("nope");
                }
            }
    });
}