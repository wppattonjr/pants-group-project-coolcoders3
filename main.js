'use strict';

let funFacts = [
    {
        title : 'Fun Fact #001',
        content : 'Jeans are cool',
        id: 1
    },
    {
        title : 'Fun Fact #002',
        content : 'Jeans are very cool',
        id: 2
    },
    {
        title : 'Fun Fact #003',
        content : 'Jeans are super cool',
        id: 3
    },
    {
        title : 'Fun Fact #004',
        content : 'Jeans are really cool',
        id: 4
    },
    {
        title : 'Fun Fact #005',
        content : 'Jeans are extra cool',
        id: 5
    },
    {
        title : 'Fun Fact #006',
        content : 'Jeans are my favorite type of pants',
        id: 6
    },
    {
        title : 'Fun Fact #007',
        content : 'Buy our jeans',
        id: 7
    },
    {
        title : 'Fun Fact #008',
        content : 'Jeans are like a hat for your legs',
        id: 8
    },
    {
        title : 'Fun Fact #009',
        content : 'Jeans are sometimes blue',
        id: 9
    },
    {
        title : 'Fun Fact #010',
        content : 'Jeans are sometimes not blue',
        id: 10
    },
    {
        title : 'Fun Fact #011',
        content : 'Jeans were invented a long time ago',
        id: 11
    },
    {
        title : 'Fun Fact #012',
        content : 'Jeans are made of denim',
        id: 12
    },
    {
        title : 'Fun Fact #013',
        content : 'Jeans are kind of irrelevant due to quarantine',
        id: 13
    },
]

const allJeans = [
    {
        name: 'Mid Rise Skinny Jeans',
        style: 'Skinny',
        price: 49.95,
        imageUrl: 'images/midRiseSkinny.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
    {
        name: 'High Rise Skinny Jeans',
        style: 'Skinny',
        price: 79.95,
        imageUrl: 'images/highRiseSkinny.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
    {
        name: 'Mid Rise Distressed Jeans',
        style: 'Distressed',
        price: 89.95,
        imageUrl: 'images/midRiseDistressed.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
    {
        name: 'High Rise Distressed Jeans',
        style: 'Distressed',
        price: 79.95,
        imageUrl: 'images/highRiseDistressed.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
    {
        name: 'Mid Rise Flare Jeans',
        style: 'Flare',
        price: 89.95,
        imageUrl: 'images/midRiseFlare.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
    {
        name: 'High Rise Flare Jeans',
        style: 'Flare',
        price: 109.95,
        imageUrl: 'images/highRiseFlare.png',
        sizesAvailable: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
    }, 
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildProductCards = (arr) => {
    let domString = '';

    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="card m-4" style="width: 18rem;">
                        <img src="${allJeans[i].imageUrl}" class="card-img-top" alt="${allJeans[i].name}">
                        <div class="card-body">
                            <h5 class="product-name">${allJeans[i].name}</h5>
                            <p class="available-sizes">Available Sizes</p>
                            <p class="card-sizes">${allJeans[i].sizesAvailable.join('  ')}</p>
                        </div>
                    </div>`
    }

    printToDom('productContainerShop', domString);
}

const init = () => {
    buildProductCards(allJeans);
}

init();
