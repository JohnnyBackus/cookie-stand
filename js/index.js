function renderStoreInfo() {
  let storeInfoColumn = document.getElementById("storeInfo");
  for (let i = 0; i < allStores.length; i++) {
    let individualStoreInfo = document.createElement("div");
      storeInfoColumn.appendChild(individualStoreInfo);
    let storeCity = document.createElement("h2");
      storeCity.textContent = `${allStores[i].city}`;
      individualStoreInfo.appendChild(storeCity);
    let storeHours = document.createElement("p");
      storeHours.textContent = `Hours Open: ${allStores[i].hoursOpen[0]}-${allStores[i].hoursOpen.slice(-1)[0]}`;
      individualStoreInfo.appendChild(storeHours);
    let storePhone = document.createElement("p");
      storePhone.textContent = `Contact Info: ${allStores[i].phoneNumber}`;
      individualStoreInfo.appendChild(storePhone);
    let storeLocation = document.createElement("p");
      storeLocation.textContent = `Location: ${allStores[i].address}`;
      individualStoreInfo.appendChild(storeLocation);
  };
};

renderStoreInfo();
