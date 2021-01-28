'use strict';

//docs used from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//console.log('Hello Seattle');

//find the min number of customers per hour
//find the max number of customer per hour
//find the avg number of cookies purchased per customer

// create object literals for each shop location
// use a method of the object to generate random number of customers per hour
// calculate and store the simulated amount of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// store the results for each location in a separate array, maybe as the property of the object location

// display the values of each array as unordered lists in the browser
// calculate the sum of these hourly totals.

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let myContainer = document.getElementById('container');
let seattleList = document.getElementById('seattle');
//console.log(myContainer);
//console.log(seattle);

let section = document.createElement('section');
myContainer.appendChild(section);

let img = document.createElement('img');
img.src = 'img/salmon.png';
img.alt = 'Salmon cookie logo';
img.title = 'Salmon Logo';

section.appendChild(img);

let article =document.createElement('article');
section.appendChild(article);

let h2 = document.createElement('h2');
h2.textContent = 'London Shop';
article.appendChild(h2);

let p = document.createElement('p');
p.textContent = 'Welcome to the Seattle Shop where you can find the cookies that set the world on fire! Salmon cookies are here and here to stay! Lucky for you these cookies have been so popular that we are now in a position to expand to four new locations';
article.appendChild(p);


//Locations: Seattle, Tokyo, Dubai, Paris, Lima
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var shop = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCustomer: 6.3,
  cookiesSoldPerHour: [],
  storeTotalPerDay: 0,

  randoCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  addCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      let randoCustomerForOneHour = this.randoCustomerPerHour();
      let cookiesPerHour =  Math.floor(randoCustomerForOneHour * this.avgCookiePerCustomer) + 1;
      shop.cookiesSoldPerHour.push(cookiesPerHour);
    }
    console.log(this.cookiesSoldPerHour);
  },
  render: function () {
    this.addCookiesSoldPerHour();
    this.randoCustomerPerHour();
  },
};
shop.render();

console.log(shop);
