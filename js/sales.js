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

seattleStore.renderTable();
dubaiStore.renderTable();
tokyoStore.renderTable();
parisStore.renderTable();
limaStore.renderTable();

function createTableFooter () {
  let table = document.getElementById("salesTable");
  let existingTableFooter = table.querySelector("tfoot");
    if (existingTableFooter) {
      table.removeChild(existingTableFooter);
    };
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
const storeLocation = document.getElementById("city");

for( let i = 0; i < inputs.length; i++ ) {
  inputs[i].addEventListener("change", function(event) {
    console.log(event.target.name, event.target.value);
    newStoreEntry[event.target.name] = event.target.value;
  });
}

storeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  storeForm.reset();
  storeLocation.focus();
  // console.log(newStoreEntry);
  let store = new Store( newStoreEntry.city, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], "", "",newStoreEntry.minCust, newStoreEntry.maxCust, newStoreEntry.avgCookie);
  store.getRandomHourlySales();
  store.totalDailyCookieSales();
  store.renderTable();
  // console.log(allStores);
  createTableFooter();
  }
);
