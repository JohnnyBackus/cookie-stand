function Store(city, hoursOpen, phoneNumber, address, minCustomer, maxCustomer, avgCookieSale) {
  this.city = city;
  this.hoursOpen = hoursOpen;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.dailySales = undefined;
  this.getRandomHourlySales = function () {
    for (let i=0; i <this.hoursOpen.length; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  };
  this.totalDailyCookieSales = function() {
    let sumSales = 0;
    for (let i=0; i <this.hourlySales.length; i++) {
      sumSales += this.hourlySales[i];
    };
    this.dailySales = sumSales;
  };
};


const seattleStore = new Store('Seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121', 23, 65, 6.3);
seattleStore.getRandomHourlySales();
seattleStore.totalDailyCookieSales();
console.log(seattleStore);

const tokyoStore = new Store('Tokyo', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], '222-222-2222', '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634', 3, 24, 1.2);
tokyoStore.getRandomHourlySales();
tokyoStore.totalDailyCookieSales();
console.log(tokyoStore);

const dubaiStore = new Store('Dubai', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai', 11, 38, 3.7);
dubaiStore.getRandomHourlySales();
dubaiStore.totalDailyCookieSales();
console.log(dubaiStore);

const parisStore = new Store('Paris', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], '444-444-4444', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', 20, 38, 2.3);
parisStore.getRandomHourlySales();
parisStore.totalDailyCookieSales();
console.log(parisStore);

const limaStore = new Store('Lima', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], '555-555-5555', 'Ca. Gral. Borgono cuadra 8, Miraflores 15074', 2, 16, 4.6);
limaStore.getRandomHourlySales();
limaStore.totalDailyCookieSales();
console.log(limaStore);

allStores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

Store.prototype.renderTable = function() {
  let tableBody = document.getElementById("salesTableBody");
  let tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);

  let locationCell = document.createElement("td");
  locationCell.textContent = `${this.city}`;
  tableRow.appendChild(locationCell);

  for (let i = 0; i < this.hoursOpen.length; i++) {
    let hourlySaleCell = document.createElement("td");
    hourlySaleCell.textContent = `${this.hourlySales[i]}`;
    tableRow.appendChild(hourlySaleCell);
  };

  let locationTotalCell = document.createElement("td");
  locationTotalCell.textContent = `${this.dailySales}`;
  tableRow.appendChild(locationTotalCell);

};
// Later, I can create a single renderTable function with the allStores array and a for loop.
seattleStore.renderTable();
dubaiStore.renderTable();
tokyoStore.renderTable();
parisStore.renderTable();
limaStore.renderTable();

function createTableFooter () {
  let table = document.getElementById("salesTable");
  let tableFooter = document.createElement("tfoot");
  table.appendChild(tableFooter);
  let footerRow = document.createElement("tr");
  tableFooter.appendChild(footerRow);

  let firstCell = document.createElement("td");
  firstCell.textContent = 'Hourly Totals for All locations';
  footerRow.appendChild(firstCell);

  // totalHourlyCookieSales = function() {
    //   let sumSales = 0;
    //   for (let i=0; i < 14; i++) {
      //     sumSales += allStores[i].hourlySales[i];
      //   };
      //   return sumSales;
      // };

      // let hourlyTotalCell = document.createElement("td");
      // hourlyTotalCell.textContent = `${totalHourlyCookieSales()}`;
      // footerRow.appendChild(hourlyTotalCell);

      for (let i = 0; i < allStores[0].hourlySales.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < allStores.length; j++) {
          hourlyTotal += allStores[j].hourlySales[i];
        }
        let hourlyTotalCell = document.createElement("td");
        hourlyTotalCell.textContent = `${hourlyTotal}`;
        footerRow.appendChild(hourlyTotalCell);
      };

      totalDailyCookieSales = function() {
        let sumSales = 0;
        for (let i=0; i <allStores.length; i++) {
          sumSales += allStores[i].dailySales;
        };
        return sumSales;
      };
      let totalCell = document.createElement("td");
      totalCell.textContent = `${totalDailyCookieSales()}`;
      footerRow.appendChild(totalCell);
    };
    createTableFooter();

// Later, I will create another function to display store info on the home page.
    renderStoreInfo = function() {
    };
