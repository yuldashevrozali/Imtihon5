let name;

fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2")
    .then((data) => {
        return data.json();
    })
    .then(dataJson => {
        const fragment = document.createDocumentFragment();

        const name = dataJson.results;
        console.log(name);

        name.forEach(element => {
            const Div = document.createElement('div');
            Div.classList.add('block');
            Div.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            Div.style.backgroundSize = 'cover';

            const li = document.createElement('li');
            li.textContent = element.title;

            const h6 = document.createElement('h6');
            h6.textContent = 'More';
            h6.addEventListener('click', function () {
                const blocks = document.querySelectorAll('.block');
                blocks.forEach(block => {
                    block.style.display = 'none';
                });
                const main =  document.getElementById('main');
                let lii = document.createElement('li');
                lii.classList.add('lii');
                lii.textContent = element.overview;
                main.appendChild(lii);
            })
            

            const p = document.createElement('p');
            p.textContent = element.release_date;

            Div.appendChild(h6)
            Div.appendChild(li);
            Div.appendChild(p);

            Div.addEventListener('mouseover', () => {
                Div.style.filter = 'blur(2px)';
                Div.style.webkitFilter = 'blur(2px)';
                Div.style.mozFilter = 'blur(2px)';
                const icon = document.createElement('i');
            });

            Div.addEventListener('mouseout', () => {
                Div.style.filter = 'none';
                Div.style.webkitFilter = 'none';
                Div.style.mozFilter = 'none';
            });

            fragment.appendChild(Div); 

            Div && Div.addEventListener('click', function () {
                console.log("jhhbv");
            });
        });

        const main = document.getElementById('main');
        main.appendChild(fragment); // DocumentFragmentdan main ga elementlarni qo'shish
    })
    .catch((error) => {
        console.log(error);
    });


const all = document.getElementById('all');

all && all.addEventListener('click', function () {
    let name;

    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=")
        .then((data) => {
            return data.json();
        })
        .then(dataJson => {
            name = dataJson.results;
            const main = document.getElementById('main');
            console.log(name);

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
})

let name1;

fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=10")
    .then((data) => {
        return data.json();
    })
    .then(dataJson => {
        name = dataJson.results;
        const main = document.getElementById('main');
        console.log(name);

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

all.addEventListener('click', function () {
    Div.style.display = 'block'
})


const searchInput = document.getElementById('header_search');
const main = document.getElementById('main');

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const blocks = main.getElementsByClassName('block');

    Array.from(blocks).forEach(block => {
        const title = block.querySelector('li').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';

        }
    });
});

