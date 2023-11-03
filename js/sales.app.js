
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
let newStoreEntryObject = {};
let newStoreEntry = [];


for( let i = 0; i < inputs.length; i++ ) {
  inputs[i].addEventListener("change", function(event) {
    console.log(event.target.name, event.target.value);
    newStoreEntryObject[event.target.name] = event.target.value;
  });
}

storeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(newStoreEntryObject);
  // function Store(city, hoursOpen, phoneNumber, address, minCustomer, maxCustomer, avgCookieSale) {

  let store = new Store( newStoreEntryObject.location, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], "", "",newStoreEntryObject.minCust, newStoreEntryObject.maxCust, newStoreEntryObject.avgCookie);
  store.getRandomHourlySales();
  store.totalDailyCookieSales();
  store.renderTable();
  console.log(allStores);

  // seattleStore.renderTable();
  // renderNewStoreRow();
  // createTableFooter();
  }
);
