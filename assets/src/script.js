const searchinput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function resquestApi(searchterm){
    const url = `http://localhost:3000/artists?name_like=${searchterm}`;
    fetch(url)  // consome api
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    
    
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input',()=>{
    const searchterm = searchinput.value.toLowerCase();
    if(searchterm ===''){
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }

    resquestApi(searchterm);
})