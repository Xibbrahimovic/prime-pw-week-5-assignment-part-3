console.log('***** Music Collection *****')

let collection = [];//empty array for music collection

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }

  collection.push(album);
  console.log(album);
  return album;
}

addToCollection('Certified Lover Boy', 'Drake', 2021);
addToCollection('Head in the Clouds II', '88rising', 2019);
addToCollection('Volume 2', 'Pink Sweat$', 2019);
addToCollection('The Universe Smiles Upon You', 'Khurangbin', 2015);
addToCollection('Californication', 'Red Hot Chili Peppers', 1999);
addToCollection('rainy evening', 'Idealism', 2017);


console.log(collection);


function showCollection(arr){
  console.log(arr.length);
  for(let item in arr){
    console.log(arr[item.title], 'by' , arr[item.artist], ',published in', arr[item.yearPublished]);
  }
}

showCollection(collection);
