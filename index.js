console.log("Hello World!");

// Create a class named 'country'
class Country {
  constructor(name, language, description, population) {
    this.name = name;
    this.language = language;
    this.description = description;
    this.population = population;
  }
}

// constructors can be thought of as:

// function constructor(name, lang, desc, pop) {
//   let country = {
//     name: name,
//     language: lang,
//     description: desc,
//     population: pop,
//   };
//   return country;
// }

let italy = new Country(
  "Italy",
  "Italian",
  `Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.`,
  60000000
);
let usa = new Country(
  "United State of America",
  "English",
  `The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.`,
  330000000
);
let japan = new Country(
  "Japan",
  "Japanese",
  `Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.`,
  126300000
);

// Create an array that holds my country objects
const countries = [italy, usa, japan];
// Create a number variable that stands for my currently shown country index
let index = 0;

function updateDom() {
  name.textContent = countries[index].name;
  desc.textContent = countries[index].description;
  pop.textContent = countries[index].population;
  lang.textContent = countries[index].language;
}

// Select elements from the document that I need to change their content
let name = document.getElementById("countryName");
let desc = document.getElementById("countryDesc");
let pop = document.getElementById("countryPopulation");
let lang = document.getElementById("countryLanguage");

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

updateDom();

nextBtn.addEventListener("click", () => {
  // Check to see if the previous index was the last index in the array, if so reassign index to the first value (0)
  if (index == countries.length - 1) {
    index = 0;
  } else index++;

  updateDom();
});

backBtn.addEventListener("click", () => {
  // Check to see if the previous index was the first index in the array, if so reassign index to the last value (country.length - 1)
  if (index == 0) {
    index = countries.length - 1;
  } else index--;

  updateDom();
});
