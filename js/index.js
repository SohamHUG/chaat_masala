import { boxTali, aLaCarte } from "./menu.js";

console.log(aLaCarte["Plats Indiens"]);

// Box Tali Section
const boxTaliContainer = document.getElementById("box-tali");

boxTali.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("menu-item");

    const titleElement = document.createElement("h3");
    titleElement.textContent = item.nom;
    itemElement.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.description;
    itemElement.appendChild(descriptionElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = `${item.minPrix > 0 ? item.minPrix + "€ -" : ""} ${item.maxPrix}€`;
    itemElement.appendChild(priceElement);

    boxTaliContainer.appendChild(itemElement);
});

// Plats Indiens Section
const platsIndiensContainer = document.getElementById("plats-indiens");

aLaCarte["Plats Indiens"].forEach(item => {
    if (!item.type) {
        platsIndiensContainer.innerHTML += `
      <div class="menu-item">
        <h5>${item.nom}</h5>
        <p>${item.description}</p>
        <p><strong>Prix :</strong> ${item.prix} €</p>
      </div>
    `;
    } else {
        platsIndiensContainer.innerHTML += `
        <p class="menu-supplement">${item.type}</p>
        <p class="menu-supplement">${item.text}</p>
        `;
    }
});

