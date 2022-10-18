import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
// _.filter(arr, { rank: 'Commander' }).map(v => v.lastName);
  return _(items).slice(startIndex).take(pageSize).value();  
//return _.take(_.filter(items, {genre: {name: genreRequest} }).slice(startIndex), pageSize);
  /*
  
  console.log(_.take(_.filter(items, {genre: {name: genreRequest} }).slice(startIndex), pageSize));
  console.log("Ahora lo q realmente envio");
  console.log(_(items).slice(startIndex).take(pageSize).value());
  return _(items).slice(startIndex).take(pageSize).value();
  */
  // _.slice(items,startIndex)
  // _.take(pageSize)
}
/*


export function genrenate(items,genre){
  const moviesByGenre = 
}
*/