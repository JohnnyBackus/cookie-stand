const Seattle = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  phoneNumber: '123-456-7890',
  address: '2901 3rd Ave #300, Seattle, WA 98121',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  hourlySales: [],
  getRandomHourlyCookieSales: function() {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  },
  dailyCookieSales: function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    return sumSales;
  },
}

Seattle.getRandomHourlyCookieSales();
console.log (Seattle.hourlySales);
console.log (Seattle.dailyCookieSales());


const Tokyo = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  phoneNumber: '123-456-7890',
  address: '2901 3rd Ave #300, Seattle, WA 98121',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlySales: [],
  getRandomHourlyCookieSales: function() {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  },
  dailyCookieSales: function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    return sumSales;
  },
}

Tokyo.getRandomHourlyCookieSales();
console.log (Tokyo.hourlySales);
console.log (Tokyo.dailyCookieSales());


const Dubai = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  phoneNumber: '123-456-7890',
  address: '2901 3rd Ave #300, Seattle, WA 98121',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hourlySales: [],
  getRandomHourlyCookieSales: function() {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  },
  dailyCookieSales: function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    return sumSales;
  },
}

Dubai.getRandomHourlyCookieSales();
console.log (Dubai.hourlySales);
console.log (Dubai.dailyCookieSales());


const Paris = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  phoneNumber: '123-456-7890',
  address: '2901 3rd Ave #300, Seattle, WA 98121',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hourlySales: [],
  getRandomHourlyCookieSales: function() {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  },
  dailyCookieSales: function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    return sumSales;
  },
}

Paris.getRandomHourlyCookieSales();
console.log (Paris.hourlySales);
console.log (Paris.dailyCookieSales());


const Lima = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  phoneNumber: '123-456-7890',
  address: '2901 3rd Ave #300, Seattle, WA 98121',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hourlySales: [],
  getRandomHourlyCookieSales: function() {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  },
  dailyCookieSales: function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    return sumSales;
  },
}

Lima.getRandomHourlyCookieSales();
console.log (Lima.hourlySales);
console.log (Lima.dailyCookieSales());


const areaSales = document.getElementById("root");

const seattleSales = document.createElement("section");
areaSales.appendChild(seattleSales);
const seattleSalesHeader = document.createElement("h2");
seattleSalesHeader.textContent = 'Seattle';
seattleSales.appendChild(seattleSalesHeader);
const seattleSalesList = document.createElement("ul");
seattleSalesList.textcontent = `${Seattle.hoursOpen}: ${Seattle.hourlySales}`
seattleSales.appendChild(seattleSalesList);

