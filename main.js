"use strict";

let funFacts = [
  {
    title: "Fun Fact #001",
    content: "Jeans are cool",
    id: 1,
  },
  {
    title: "Fun Fact #002",
    content: "Jeans are very cool",
    id: 2,
  },
  {
    title: "Fun Fact #003",
    content: "Jeans are super cool",
    id: 3,
  },
  {
    title: "Fun Fact #004",
    content: "Jeans are really cool",
    id: 4,
  },
  {
    title: "Fun Fact #005",
    content: "Jeans are extra cool",
    id: 5,
  },
  {
    title: "Fun Fact #006",
    content: "Jeans are my favorite type of pants",
    id: 6,
  },
  {
    title: "Fun Fact #007",
    content: "Buy our jeans",
    id: 7,
  },
  {
    title: "Fun Fact #008",
    content: "Jeans are like a hat for your legs",
    id: 8,
  },
  {
    title: "Fun Fact #009",
    content: "Jeans are sometimes blue",
    id: 9,
  },
  {
    title: "Fun Fact #010",
    content: "Jeans are sometimes not blue",
    id: 10,
  },
  {
    title: "Fun Fact #011",
    content: "Jeans were invented a long time ago",
    id: 11,
  },
  {
    title: "Fun Fact #012",
    content: "Jeans are made of denim",
    id: 12,
  },
  {
    title: "Fun Fact #013",
    content: "Jeans are kind of irrelevant due to quarantine",
    id: 13,
  },
];

const factsColors = [
    {
     background: "#EA526F",
     text: "#FFFFFF"
    },
    {
     background: "#FF8A5B",
     text: "#FFFFFF"
    },
    {
     background: "#25CED1",
     text: "#000000"
    },
    {
     background: "#FCEADE",
     text: "#000000"
    },
];

const allJeans = [
  {
    name: "Mid Rise Skinny Jeans",
    style: "Skinny",
    price: 49.95,
    imageUrl: "images/midRiseSkinny.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    name: "High Rise Skinny Jeans",
    style: "Skinny",
    price: 79.95,
    imageUrl: "images/highRiseSkinny.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    name: "Mid Rise Distressed Jeans",
    style: "Distressed",
    price: 89.95,
    imageUrl: "images/midRiseDistressed.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    name: "High Rise Distressed Jeans",
    style: "Distressed",
    price: 79.95,
    imageUrl: "images/highRiseDistressed.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    name: "Mid Rise Flare Jeans",
    style: "Flare",
    price: 89.95,
    imageUrl: "images/midRiseFlare.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    name: "High Rise Flare Jeans",
    style: "Flare",
    price: 109.95,
    imageUrl: "images/highRiseFlare.png",
    sizesAvailable: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
];

const locations = [
  {
    imageUrl: "images/nashville.jpeg",
    city: "Nashville",
    address: "1234 5th Street Nashville, TN",
    hours: {
      weekdays: "10am - 7pm",
      weekends: "11am - 5pm",
    },
    id: "TN",
    color: "#EA526F",
    delay: ".5s",
  },
  {
    imageUrl: "images/chicago.jpg",
    city: "Chicago",
    address: "312 Main Street Chicago, IL",
    hours: {
      weekdays: "TBD",
      weekends: "TBD",
    },
    id: "IL",
    color: "#FF8A5B",
    delay: "2s",
  },
  {
    imageUrl: "images/NY.jpg",
    city: "New York",
    address: "480 Madison Avenue NY, NY",
    hours: {
      weekdays: "10am - 9pm",
      weekends: "12pm - 6pm",
    },
    id: "NY",
    color: "#25CED1",
    delay: "1s",
  },
  {
    imageUrl: "images/LA.jpg",
    city: "Los Angeles",
    address: "9876 Sunset Blvd Los Angeles, CA",
    hours: {
      weekdays: "9am - 6pm",
      weekends: "10pm - 4pm",
    },
    id: "CA",
    color: "#FCEADE",
    delay: "1.5s",
  },
];

const collageOfJeans = [
  {
      jeanType: 'homepage 3',
      jeanImage: 'images/homepage3.png'
  },
  
  {
      jeanType: 'homepage 4',
      jeanImage: 'images/homepage4.png'
  },
{
    jeanType: 'homepage 6',
    jeanImage: 'images/homepage6.png'
},

{
    jeanType: 'homepage 7',
    jeanImage: 'images/homepage7.png'
},

{
    jeanType: 'bell bottomhomepage 8',
    jeanImage: 'images/homepage8.png'
},
{
    jeanType: 'homepage10',
    jeanImage: 'images/homepage10.png'
},
  {
      jeanType: 'homepage 1',
      jeanImage: 'images/homepage1.png'
  },
  
  {
      jeanType: 'homepage 2',
      jeanImage: 'images/homepage2.png'
  },
  
  {
      jeanType: 'homepage 3',
      jeanImage: 'images/homepage3.png'
  },
  
  {
      jeanType: 'homepage 4',
      jeanImage: 'images/homepage4.png'
  },
{
    jeanType: 'homepage 6',
    jeanImage: 'images/homepage6.png'
},

{
    jeanType: 'homepage 7',
    jeanImage: 'images/homepage7.png'
},

{
    jeanType: 'bell bottomhomepage 9',
    jeanImage: 'images/homepage9.png'
},

{
    jeanType: 'homepage10',
    jeanImage: 'images/homepage10.png'
},
{
    jeanType: 'homepage 2',
    jeanImage: 'images/homepage2.png'
},

{
    jeanType: 'homepage 3',
    jeanImage: 'images/homepage3.png'
},

{
    jeanType: 'homepage 4',
    jeanImage: 'images/homepage4.png'
},
{
    jeanType: 'bell bottomhomepage 8',
    jeanImage: 'images/homepage8.png'
},

{
      jeanType: 'homepage 1',
      jeanImage: 'images/homepage1.png'
},
  
  {
      jeanType: 'homepage 2',
      jeanImage: 'images/homepage2.png'
  },
  
  {
      jeanType: 'homepage 3',
      jeanImage: 'images/homepage3.png'
  },
  
 {
      jeanType: 'homepage 5',
      jeanImage: 'images/homepage5.png'
  },
  
  {
      jeanType: 'homepage 7',
      jeanImage: 'images/homepage7.png'
  },
  
  {
      jeanType: 'bell bottomhomepage 8',
      jeanImage: 'images/homepage8.png'
  },
  
  {
      jeanType: 'bell bottomhomepage 9',
      jeanImage: 'images/homepage9.png'
  },
  
  {
      jeanType: 'homepage10',
      jeanImage: 'images/homepage10.png'
  },
  {
    jeanType: 'homepage 3',
    jeanImage: 'images/homepage3.png'
  },
];

const customerEmailFromModal = [];

const showModal = () => {
  $('#couponModal').modal('show');
};


const modalButtonEventClick = () => {
  document.querySelector('#discount').addEventListener('click', iWantMyDiscountButton);
};

const iWantMyDiscountButton = () => {
  const customerEmail = document.getElementById('inputEmailAddress').value;
     
  let emailInput = {
    custEmail: customerEmail
  };
  customerEmailFromModal.push(emailInput);
  console.log()
  console.log('EmailtoArray: Email', customerEmailFromModal)
  $('#couponModal').modal('hide')
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


//////////////////// SHOP PAGE FUNCTIONS//////////////////////////

const buildJeanImageCollage = (jeanCollageArray) => {
  let domString ='';

  for (let j = 0; j < collageOfJeans.length; j++) {
      domString += `<div id=“${j}”>
                      <div>
                      <a href="shop.html">
                      <div class=“image-container”><img src=${collageOfJeans[j].jeanImage}></div></a>   
                      </div>
                  </div>`
  }

  printToDom("jeanCollage", domString)
};


const buildProductCards = (arr) => {
    let domString = '';

    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="card m-4" style="width: 18rem;">
                        <img src="${arr[i].imageUrl}" class="card-img-top" alt="${arr[i].name}">
                        <div class="card-body">
                            <h5 class="product-name">${arr[i].name}</h5>
                            <p class="product-price">$${arr[i].price}</p>
                            <p class="available-sizes">Available Sizes</p>
                            <p class="card-sizes">${arr[i].sizesAvailable.join(' ')}</p>
                        </div>
                    </div>`
    }

    printToDom('productContainerShop', domString);
};

//////////////////// ABOUT PAGE FUNCTIONS//////////////////////////
const colorMap = () => {
  for (let i = 0; i < locations.length; i++) {
    document.querySelector(`.${locations[i].id}`).style.fill =
      locations[i].color;
    document.querySelector(`.${locations[i].id}`).style.transitionDelay =
      locations[i].delay;
  }
};

const mapHover = (state) => {
  document
    .querySelector(state)
    .addEventListener("mouseover", highlightLocation);
};
const mapOffHover = (state) => {
  document
    .querySelector(state)
    .addEventListener("mouseout", unhiglightLocation);
};
const highlightLocation = (e) => {
  let locationId = e.target.id;
  for (let i = 0; i < locations.length; i++) {
    if (locationId === locations[i].id) {
      document.querySelector(`.${locations[i].id}`).style.stroke = "black";
      document.querySelector(`.${locations[i].id}`).style.transitionDelay =
        ".2s";
    }
  }
};
const unhiglightLocation = (e) => {
  let locationId = e.target.id;
  for (let i = 0; i < locations.length; i++) {
    if (locationId === locations[i].id) {
      document.querySelector(`.${locations[i].id}`).style.stroke = "none";
    }
  }
};
const mapClick = (state) => {
  document.querySelector(state).addEventListener("click", buildLocationModal);
};

const buildLocationModal = (e) => {
  let locationId = e.target.id;
  let modalString = "";
  for (let i = 0; i < locations.length; i++) {
    if (locationId === locations[i].id) {
      modalString += `<div class="modal  text-center" id="locationModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          <h2>${locations[i].city}</h2>  
          <img class="modal-content img-responsive" src="${locations[i].imageUrl}" alt="${locations[i].city} Storefront">
            <p>${locations[i].address}</p>
            <h5>Hours</h5>
            <p>Weekdays: ${locations[i].hours.weekdays}</p>
            <p>Weekends: ${locations[i].hours.weekends}</p>
          </div>
          </div>
        </div>
      </div>
    </div>`;
    }
    printToDom("locationCardAbout", modalString);
  }
  $("#locationModal").modal("show");
};

const funFactsButtonClick = () => {
  document
    .querySelector("#factsButtonAbout")
    .addEventListener("click", displayRandomFact);
};

const factRandomizer = () => {
  return Math.floor(Math.random() * funFacts.length);
};

const colorRandomizer = () => {
    return Math.floor(Math.random() * factsColors.length);
}

const displayRandomFact = () => {
  let domString = "";
  let randomFactNumber = factRandomizer();
  let randomColor = colorRandomizer();
  domString = `<div class="card text-center m-5 shadow p-3 mb-5 rounded" style="width: 18rem; background-color: ${factsColors[randomColor].background}; color: ${factsColors[randomColor].text}">
    <div class="card-body">
      <h5 class="card-title">${funFacts[randomFactNumber].title}</h5>
      <p class="card-text">${funFacts[randomFactNumber].content}</p>
    </div>
  </div>`;
  printToDom("factsCardAbout", domString);
};


///////////////// GLOBAL FUNCTIONs ////////////////////////

const productFilterButtonClick = () => {
    document.getElementById('styleFilterDropdown').addEventListener('click', filterByStyle);
    document.getElementById('priceFilterDropdown').addEventListener('click', filterByPrice);
};

const filterByStyle = (e) => {
    console.log('buttonID', e.target.id)
    const buttonId = e.target.id;

    let selectedStyles = [];

    for (let i = 0; i < allJeans.length; i++) {
        if (buttonId === allJeans[i].style) {
            selectedStyles.push(allJeans[i]);
        } 
    }

    if (buttonId === 'allStylesSort') {
        buildProductCards(allJeans);
    } else if (buttonId !== 'dropdownMenu2') {
        buildProductCards(selectedStyles);
    }
};

const filterByPrice = (e) => {
    console.log('buttonID', e.target.id)
    const buttonId = e.target.id;

    let selectedPrices = [];

    for (let i = 0; i < allJeans.length; i++) {
        if (buttonId === 'lowPriceSort' && allJeans[i].price < 50) {
            selectedPrices.push(allJeans[i]);
        } else if (buttonId === 'midPriceSort' && allJeans[i].price >= 50 && allJeans[i].price < 100) {
            selectedPrices.push(allJeans[i]);
        } else if (buttonId === 'highPriceSort' && allJeans[i].price >= 100) {
            selectedPrices.push(allJeans[i]);
        }
    }

    if (buttonId === 'allPricesSort') {
        buildProductCards(allJeans);
    } else if (buttonId !== 'dropdownMenu2') {
        buildProductCards(selectedPrices);
    }
};

const init = () => {
  switch (document.location.pathname) {
    case "/about.html":
      colorMap();
      mapHover("#TN");
      mapHover("#NY");
      mapHover("#CA");
      mapHover("#IL");
      mapOffHover("#TN");
      mapOffHover("#NY");
      mapOffHover("#CA");
      mapOffHover("#IL");
      mapClick("#TN");
      mapClick("#NY");
      mapClick("#CA");
      mapClick("#IL");
      funFactsButtonClick();
      break;
    case "/shop.html":
      buildProductCards(allJeans);
      productFilterButtonClick();
      break;
    case "/index.html":
      buildJeanImageCollage(collageOfJeans);
      window.onload = showModal();
      modalButtonEventClick();
      iWantMyDiscountButton();
      break;
     }
};


init();

