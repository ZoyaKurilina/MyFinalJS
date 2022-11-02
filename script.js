const genres = {};

function onclick(event) {
  event.target.classList.toggle('clicked');
  const key =  event.target.getAttribute("data-genre");
  console.log(key);
  const value = event.target.classList.contains('clicked');
  console.log(value);
  genres[key] = value;
};

const btns = document.querySelectorAll(".btn");



btns.forEach(btn => btn.addEventListener("click", onclick));

const search = document.querySelector(".search");

function onSearch () {
    
    const choice =
      _.chain(genres)
      .pick((x) => x)
      .keys()
      .map((x) => genreMap[x])
      .value();

    const result = _.chain(filmData)
      .filter(film => _.intersection(film.genre, choice).length)
      .sample(3)
      .sample()
      .value()

    const card = document.querySelector(".filmCard")

    card.querySelector(".title").innerHTML = result.title;
    card.querySelector(".poster").setAttribute("src", result.img);
    card.querySelector(".country").innerHTML = `Страна:  ${result.country}`;
    card.querySelector(".genre").innerHTML = `Жанр:  ${result.genre}`;
    card.querySelector(".producer").innerHTML = `Режиссёр:  ${result.producer}`;
    card.querySelector(".cast").innerHTML = `Актёры:  ${result.cast}`;
    card.querySelector(".description").innerHTML = `Сюжет:  ${result.description}`;
    card.querySelector(".rating").innerHTML = `Рейтинг:  ${result.rating}`;
}

search.addEventListener("click", onSearch);
