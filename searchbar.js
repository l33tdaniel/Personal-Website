function search_movies() {
    let searchInput = document.getElementById('search-input').value;
    let fixedInput = searchInput.toLowerCase();
    let display = document.getElementById('display');

    let html = "";
    // this fetches the json
    fetch('movies.json')
        .then(data => data.json())
        .then(data => {
           // this makes it all lower case and tests to see if the movie displays.
            for(let i = 0; i < Object.keys(data).length; i++) {
                if(data[i].name.toLowerCase().includes(fixedInput) && fixedInput != " ") {
                    console.log("yes");
                    console.log(data[i].name);
                    html += "<div> Name: " + data[i].name + 
                            " Release date: " + data[i]["release date"];
                }
                else {
                    console.log("nope");
                    
                }
            }
            document.getElementById('display').innerHTML = html;
    });
}