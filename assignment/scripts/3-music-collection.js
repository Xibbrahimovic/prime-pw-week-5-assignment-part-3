console.log('***** Music Collection *****')

let collection = [];//empty array for music collection

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }

  collection.push(album);
  return album;
}

console.log(addToCollection('Certified Lover Boy', 'Drake', 2021));
console.log(addToCollection('Head in the Clouds II', '88rising', 2019));
console.log(addToCollection('Volume 2', 'Pink Sweat$', 2019));
console.log(addToCollection('The Universe Smiles Upon You', 'Khurangbin', 2015));
console.log(addToCollection('Californication', 'Red Hot Chili Peppers', 1999));
console.log(addToCollection('rainy evening', 'Idealism', 2017));


console.log(collection);
