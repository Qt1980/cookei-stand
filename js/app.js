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

// let myContainer = document.getElementById('container');
// let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');

//console.log(myContainer);
//console.log(seattle);
let section = document.createElement('section');
// myContainer.appendChild(section);
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let img = document.createElement('img');
img.src = 'img/salmon.png';
img.alt = 'Salmon cookie logo';
img.title = 'Salmon Logo';

section.appendChild(img);

let li = document.createElement('li');
li.textContent = `Total: ${this.storeTotalPerDay} cookies`;
//seattleList.appendChild(li);
let tableHeader = document.createElement('header');
let tableFooter = document.createElement('footer');
let table = document.getElementById('table');

let cookieCrumble = document.createElement('th');
cookieCrumble.textContent = hours[0];
table.appendChild(cookieCrumble);

let cookieCrumbleTwo = document.createElement('th');
cookieCrumbleTwo.textContent = hours[1];
table.appendChild(cookieCrumbleTwo);

const shopLocationTotals = [];


function ShopLocation(name, minCustomer, maxCustomer, avgCookiePerCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookiesSoldPerHour = [];
  this.storeTotalPerDay = 0;
  shopLocationTotals.push(this);
}

ShopLocation.prototype.randoCustomerPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};

ShopLocation.prototype.addCookiesSoldPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    let randoCustomerForOneHour = this.randoCustomerPerHour();
    let cookiesPerHour =  Math.floor(randoCustomerForOneHour * this.avgCookiePerCustomer) + 1;
    this.cookiesSoldPerHour.push(cookiesPerHour);
    this.storeTotalPerDay += cookiesPerHour;
  }
};

ShopLocation.prototype.render = function () {
  this.addCookiesSoldPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    //seattleList.appendChild(li);
  }
};
let foo = new ShopLocation ('Seattle', 23, 65, 6.3);
let bar = new ShopLocation ('Tokyo', 3, 24, 1.2);










    let tr = document.createElement('tr');
   // cookieCrumble.appendChild(tr);

    let th = document.createElement('th');
    th.textContent = this.name;

    tr.appendChild(th);


    // for (let i = 0; i < this.storeTotalPerDay.length; i++) {
    //   let td = document.createElement('td');
    //   td.textContent = this.storeTotalPerDay;
    //   tr.appendChild(td);
    // }
    // let td = document.createElement('td');
    // td.textContent = this.storeTotalPerDay;
    // tr.appendChild(td);
//};
//};
new ShopLocation('Seattle', 23, 65, 6.3);

function renderAll() {
  for (let i =0; i < shopLocationTotals.length; i++) {
  shopLocationTotals[i].render();
}
}
renderAll();

// let li = document.createElement('li');
// li.textContent = `Total: ${this.storeTotalPerDay} cookies`;
// seattleList.appendChild(li);
