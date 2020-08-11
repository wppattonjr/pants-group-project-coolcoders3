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
        domString +=
    }
}