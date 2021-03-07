export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  let options = [];

  for(let i = currentYear; i > (currentYear - 40); i--) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return options;
}

export const generatePagination = (page, lastPage) => {
  let pages = [];

  if((page + 7) <= lastPage) {
    for(let i = page; i <= (page + 7); i++) {
      pages.push(i);
    }
  } else {
    for(let i = lastPage; i >= (lastPage - 7) && i > 0; i--) {
      pages.unshift(i);
    }
  }
  
  return pages;

  /* Esta función se encargar de generar los items que estarán en la paginación
    para lograr esto se utiliza un condicional el cual si la página actual es menor 
    o igual la última página + 7, llena un array con un tamaño de 8 para esto se empieza
    desde la página actual hasta la página actual + 7 por ejemplo si la página actual es 3 
    el último item del array será 10 y en el caso que la página actual no sea menor a la 
    página actual + 7 entonces se llena el array con 8 items empezando desde la última
    página hasta la última página - 7 estos números no son al azar, es así por que quiero que
    el tamaño del array sea de 8 si quisiera que el array tubiera un tamaño mayor o menor esto números
    cambiarian por ejemplo si quisiera que el tamaño del array fuera de 9 ya no sería 7 si no 8.
  */
}

export const getGenres = () => {
  const genres = [
    {name: "Action", id: 1},
    {name: "Adventure", id: 2},
    {name: "Cars", id: 3},
    {name: "Comedy", id: 4},
    {name: "Dementia", id: 5},
    {name: "Demons", id: 6},
    {name: "Mystery", id: 7},
    {name: "Drama", id: 8},
    {name: "Ecchi", id: 9},
    {name: "Fantasy", id: 10},
    {name: "Game", id: 11},
    {name: "Hentai", id: 12},
    {name: "Historical", id: 13},
    {name: "Horror", id: 14},
    {name: "Kids", id: 15},
    {name: "Magic", id: 16},
    {name: "Martial Arts", id: 17},
    {name: "Mecha", id: 18},
    {name: "Music", id: 19},
    {name: "Parody", id: 20},
    {name: "Samurai", id: 21},
    {name: "Romance", id: 22},
    {name: "School", id: 23},
    {name: "Sci Fi", id: 24},
    {name: "Shoujo", id: 25},
    {name: "Shoujo Ai", id: 26},
    {name: "Shounen", id: 27},
    {name: "Shounen Ai", id: 28},
    {name: "Space", id: 29},
    {name: "Sports", id: 30},
    {name: "Super Power", id: 31},
    {name: "Vampire", id: 32},
    {name: "Yaoi", id: 33},
    {name: "Yuri", id: 34},
    {name: "Harem", id: 35},
    {name: "Slice Of Life", id: 36},
    {name: "Supernatural", id: 37},
    {name: "Military", id: 38},
    {name: "Police", id: 39},
    {name: "Psychological", id: 40},
    {name: "Thriller", id: 41},
    {name: "Seinen", id: 42},
    {name: "Josei", id: 43}
  ]

  return genres;
}