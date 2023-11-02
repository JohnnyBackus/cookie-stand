

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


let storeForm = document.getElementById("storeForm");
let inputs = document.querySelectorAll("input");
let newStoreEntry = {};


for( let i = 0; i < inputs.length; i++ ) {
  inputs[i].addEventListener("change", function(event) {
    console.log(event.target.name, event.target.value);
    newStoreEntry[event.target.name] = event.target.value;
  });
}

function NewStore(location, minCust, maxCust, avgCookie) {
  this.city = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlySales = [];
  this.dailySales = undefined;
  this.getRandomHourlySales = function () {
    for (let i=0; i <14; i++) {
      let hourCookieSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCookieSale;
      this.hourlySales.push(Math.floor(hourCookieSales));
    };
  };
  this.totalDailyCookieSales = function() {
    let sumSales = 0;
    for (let i=0; i <14; i++) {
      sumSales += this.hourlySales[i];
    };
    this.dailySales = sumSales;
  };
};

renderNewStoreRow = function() {
  let tableBody = document.getElementById("salesTableBody");
  let tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);

  let locationCell = document.createElement("td");
  locationCell.textContent = `${this.city}`;
  tableRow.appendChild(locationCell);

  for (let i = 0; i < 14; i++) {
    let hourlySaleCell = document.createElement("td");
    hourlySaleCell.textContent = `${this.hourlySales[i]}`;
    tableRow.appendChild(hourlySaleCell);
  };

  let locationTotalCell = document.createElement("td");
  locationTotalCell.textContent = `${this.dailySales}`;
  tableRow.appendChild(locationTotalCell);

};

storeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(newStoreEntry);
  let store = new NewStore( newStoreEntry.location, newStoreEntry.minCust, newStoreEntry.maxCust, newStoreEntry.avgCookie);
  allStores.push(store);
  console.log(allStores);
  seattleStore.renderTable();
  renderNewStoreRow();
  createTableFooter();
  }
);
