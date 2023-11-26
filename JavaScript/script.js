let name;

fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=8")
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
                const mainbody = document.getElementById('main_body');
                mainbody.style.display = 'flex';
                const blocks = document.querySelectorAll('.block');
                blocks.forEach(block => {
                    block.style.display = 'none';
                });

                const main = document.getElementById('main_body');
                let lii = document.createElement('li');
                let lii2 = document.createElement('li');
                let lii3 = document.createElement('li');
                let lii4 = document.createElement('li');
                let img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                img.style.width = '300px';
                img.style.marginLeft = '15px';
                img.style.marginRight = '45px';

                lii2.classList.add('lii2');
                lii.classList.add('lii');
                lii3.classList.add('lii3');
                lii.textContent = element.overview;
                lii2.textContent = element.title;
                lii4.textContent = "Language: " + element.original_language;
                lii3.textContent = "Year: " + element.release_date;
                lii4.style.color = 'gold';

                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svg.setAttribute("height", "2em");
                svg.setAttribute("viewBox", "0 0 384 512");

                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z");

                svg.appendChild(path);
                svg.addEventListener('click', function () {
                    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

                    let malumot = element.title;
                    let elementOverview = element.overview;
                    let lang = element.original_language;

                    let userData = {
                        malumot: elementOverview,
                        til: lang,
                        sarlavha: malumot,
                        yili: element.release_date,

                    };

                    storedUsers.push(userData);

                    localStorage.setItem('users', JSON.stringify(storedUsers));
                });



                lii4.appendChild(svg);

                main.appendChild(img);
                main.appendChild(lii2);
                lii2.appendChild(lii);
                lii.appendChild(lii3);
                lii3.appendChild(lii4);
            });



            const p = document.createElement('p');
            p.textContent = element.release_date;

            Div.appendChild(h6)
            Div.appendChild(li);
            Div.appendChild(p);

            fragment.appendChild(Div);

            Div && Div.addEventListener('click', function () {
                console.log("jhhbv");
            });
        });

        const main = document.getElementById('main');
        main.appendChild(fragment);
    })
    .catch((error) => {
        console.log(error);
    });

function Api(kirit) {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=" + kirit)
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
                    const mainbody = document.getElementById('main_body');
                    mainbody.style.display = 'flex';
                    const blocks = document.querySelectorAll('.block');
                    blocks.forEach(block => {
                        block.style.display = 'none';
                    });

                    const main = document.getElementById('main_body');
                    let lii = document.createElement('li');
                    let lii2 = document.createElement('li');
                    let lii3 = document.createElement('li');
                    let lii4 = document.createElement('li');
                    let img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                    img.style.width = '300px';
                    img.style.marginLeft = '15px';
                    img.style.marginRight = '45px';

                    lii2.classList.add('lii2');
                    lii.classList.add('lii');
                    lii3.classList.add('lii3');
                    lii.textContent = element.overview;
                    lii2.textContent = element.title;
                    lii4.textContent = "Language: " + element.original_language;
                    lii3.textContent = "Year: " + element.release_date;
                    lii4.style.color = 'gold';

                    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    svg.setAttribute("height", "2em");
                    svg.setAttribute("viewBox", "0 0 384 512");

                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z");

                    svg.appendChild(path);
                    svg.addEventListener('click', function () {
                        let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

                    });

                    svg.addEventListener('click', function () {
                        try {
                            let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
                        
                            let malumot = element.title;
                            let elementOverview = element.overview;
                            let lang = element.original_language;
                            let photo = element.poster_path;
                        
                            let userData = {
                                malumot: elementOverview,
                                til: lang,
                                sarlavha: malumot,
                                yili: element.release_date,
                            };
                    
                            let userMap = new Map();
                            userMap.set('malumot', userData.malumot);
                            userMap.set('til', userData.til);
                            userMap.set('sarlavha', userData.sarlavha);
                            userMap.set('yili', userData.yili);
                            storedUsers.push(userMap);
                        
                            localStorage.setItem('users', JSON.stringify(storedUsers));
                        } catch (error) {
                            console.error(error);
                        }
                        
                    });




                    lii4.appendChild(svg);

                    main.appendChild(img);
                    main.appendChild(lii2);
                    lii2.appendChild(lii);
                    lii.appendChild(lii3);
                    lii3.appendChild(lii4);
                });



                const p = document.createElement('p');
                p.textContent = element.release_date;

                Div.appendChild(h6)
                Div.appendChild(li);
                Div.appendChild(p);

                fragment.appendChild(Div);

                Div && Div.addEventListener('click', function () {
                    console.log("jhhbv");
                });
            });

            const main = document.getElementById('main');
            main.appendChild(fragment);
        })
        .catch((error) => {
            console.log(error);
        });

};

Api(1);
Api(2);
Api(6);
Api(3);
Api(9);



const all = document.getElementById('all');

all && all.addEventListener('click', function () {
    let name;

    const fetchDataAndCreateElements = async () => {
        const dataPage2 = await fetchData("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2");
        createMovieElements(dataPage2, 'main');

        const dataPage10 = await fetchData("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=48");
        createMovieElements(dataPage10, 'main');
    };

    const FetchAll = async () => {
        const fetch1 = await fetchData("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=10")
        Newfetch(fetch1, 'main');

        const fetch5 = await fetchData("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=5")
        Newfetch(fetch5, 'main');
    }

    FetchAll();
})

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

