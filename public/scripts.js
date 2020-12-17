let baseURL =  'https://ghibliapi.herokuapp.com';
let url= 'https://ghibliapi.herokuapp.com/films';


const section = document.querySelector('.row');

fetch(url)
.then(function (result) { 
  console.log(result) 
  return result.json(); 
})
.then(function (json) { 
  console.log(json); 
  displayResults(json);
})

// creating a function to display our json data
function displayResults(json) {
  console.log('Display Results', json)

  for( let i = 0 ; i < json.length; i++){

    // create elements to hold info
    let card = document.createElement('div');
    card.style= 'width: 19rem';
    card.className= 'card mb-2 mt-2 mr-2';

    let cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    let cardtitle = document.createElement('h5');
    cardtitle.className = 'card-title';

    let cardsubtitle = document.createElement('h6');
    cardsubtitle.className ='card-subtitle mb-2  text-muted';

    let cardsubtitle1 = document.createElement('h6');
    cardsubtitle1.className ='card-subtitle mb-2 text-muted';

    let cardsubtitle2 = document.createElement('h6');
    cardsubtitle2.className ='card-subtitle mb-2 text-muted';
    
    let cardtext = document.createElement('p');
    cardtext.className = 'card-text';

    // set text for elements
    cardtitle.textContent = json[i].title;
    cardtext.textContent = json[i].description;
    cardsubtitle1.textContent = json[i].director;
    cardsubtitle2.textContent = json[i].producer;
    cardsubtitle.textContent = json[i].release_date;

    // append to html
    card.appendChild(cardbody);
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardsubtitle1);
    cardbody.appendChild(cardsubtitle2);
    cardbody.appendChild(cardsubtitle);
    cardbody.appendChild(cardtext);
    section.appendChild(card);
  }}
  

  // didn't use
    
    // section.appendChild(title);
    // section.appendChild(director);
    // section.appendChild(producer);
    // section.appendChild(date);
    // section.appendChild(description);

       // let title = document.createElement('h2');
    // let description = document.createElement('p');
    // let director = document.createElement('h3');
    // let producer = document.createElement('h3');
    // let date = document.createElement('h5');
    // create bootstrap card
