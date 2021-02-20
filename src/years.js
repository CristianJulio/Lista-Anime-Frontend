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
      pages.push({
        id: i,
        li: <li>{i}</li>
      });
    }
  } else {
    for(let i = lastPage; i >= (lastPage - 7) && i > 0; i--) {
      pages.unshift({
        id: i,
        li: <li>{i}</li>
      });
    }
  }
  console.log(pages);
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