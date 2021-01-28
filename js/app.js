'use strict';

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

var shop = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,

  totalCustomer: function() {
    return this.maxCustomer + this.minCustomer;
  }
};
shop.totalCustomer();
console.log(shop.totalCustomer());


