'use strict';

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
                            <p class="product-price">$${allJeans[i].price}</p>
                            <p class="available-sizes">Available Sizes</p>
                            <p class="card-sizes">${allJeans[i].sizesAvailable.join(' ')}</p>
                        </div>
                    </div>`
    }

    printToDom('productContainerShop', domString);
}

const buttonEvents = () => {
    document.getElementById('styleFilterDropdown').addEventListener('click', filterByStyle);
    document.getElementById('priceFilterDropdown').addEventListener('click', filterByPrice);
}

const filterByStyle = (e) => {
    console.log(e.target.id)
    const buttonId = e.target.id;
    const ctype = e.target.type;

    const selectedStyles = [];

    for (let i =0; i < allJeans.length; i++) {
        switch (buttonId) {
            case 'Skinny':
                selectedStyles.push(allJeans[i]);
                buildProductCards(selectedStyles);
                break;
            case 'Distressed':
                selectedStyles.push(allJeans[i]);
                buildProductCards(selectedStyles);
                break;
            case 'Flare':
                selectedStyles.push(allJeans[i]);
                buildProductCards(selectedStyles);
                break;
            case 'allStylesSort':
                buildProductCards(allJeans);
                break;
        }
    }

    // for (let i = 0; i < allJeans.length; i++) {
    //     if (allJeans[i].style === buttonId) {
    //         selectedStyles.push(allJeans[i]);
    //     }
    // }

    // console.log(selectedStyles)

    // if (buttonId === 'allStylesSort' && ctype === 'button') {
    //     buildProductCards(allJeans);
    // } else if (ctype === 'button') {
    //     buildProductCards(selectedStyles);
    // }
}

const filterByPrice = (e) => {
    
}

const init = () => {
    buildProductCards(allJeans);
    buttonEvents();
}

init();
