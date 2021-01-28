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
// calculate the sum of these hourly totals. Example:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies

//Locations: Seattle, Tokyo, Dubai, Paris, Lima
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var shop = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCustomer: 6.3,
  cookiesSoldPerHour: [],
  storeTotalPerDay: 0,

  randoCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) +this.minCustomer);
  },

  addCookiesSoldPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      let randoCustomerForOneHour = this.randoCustomerPerHour();
      let cookiesPerHour = randoCustomerForOneHour * this.avgCookiePerCustomer;
      shop.cookiesSoldPerHour.push(cookiesPerHour);
    }
  },
  render: function() {
  }
};


//console.log(shop.randoCustomerPerHour());
console.log(cookiesSoldPerHour);