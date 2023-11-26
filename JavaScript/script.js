let name;

fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2")
    .then((data) => {
        return data.json();
    })
    .then(dataJson => {
        name = dataJson.results;
        const main = document.getElementById('main');

        name.forEach(element => {
            const Div = document.createElement('div');
            Div.classList.add('block');
            Div.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            Div.style.backgroundSize = 'cover';

            const li = document.createElement('li');
            li.textContent = element.title;

            const p = document.createElement('p');
            p.textContent = element.release_date; 

            Div.appendChild(li);
            Div.appendChild(p);

            Div.addEventListener('mouseover', () => {
                Div.style.filter = 'blur(2px)';
                Div.style.webkitFilter = 'blur(2px)';
                Div.style.mozFilter = 'blur(2px)';
                const icon = document.createElement('i');
                // Div.innerHTML += <i class="fa-regular fa-bookmark"></i>
            });

            Div.addEventListener('mouseout', () => {
                Div.style.filter = 'none'; 
                Div.style.webkitFilter = 'none';
                Div.style.mozFilter = 'none';
            });

            main.appendChild(Div);
        });
    })
    .catch((error) => {
        console.log(error);
    });

