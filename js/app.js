'use strict';

//docs used from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//console.log('Hello Seattle');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const shopLocationTotals =[];
let table = document.getElementById('table');
console.log(table);
let body =document.createElement('tbody');
console.log(body);

function ShopLocation(name, minCustomer, maxCustomer, avgCookiePerCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookiesSoldPerHour = [];
  this.storeTotalPerDay = 0;
  shopLocationTotals.push(this);
  this.locationRender()
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

ShopLocation.prototype.locationRender = function() {
  this.addCookiesSoldPerHour();
  let tr = document.createElement('tr'); // creating a row to be rendered on the sales page
  let th = document.createElement('th'; //creating the actual cells like in a speadsheet
  th.textContent = this.name;//assignnig the value of 'th' as this.name which is the naes of each city
  tr.appendChild.prototype(th);//appending the 'th' to the row so that it can be rendered.
  for (let i =0; i < this.cookiesSoldPerHour.length; i++);
}
ShopLocation.prototype.render = function () {
  this.addCookiesSoldPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    //seattleList.appendChild(li);
  }
};

let seattle = new ShopLocation ('Seattle', 23, 65, 6.3);
let tokyo = new ShopLocation ('Tokyo', 3, 24, 1.2);
let dubai = new ShopLocation ('Dubai',	11,	38,	3.7);
let paris = new ShopLocation ('Paris', 20, 38, 2.3);
let lima = new ShopLocation ('Lima', 2, 16, 4.6);
