const repairStores = [
    {
        name: "Geek Squad",
        phone: "(123) 456-7890",
        url: "https://www.bestbuy.com/site/electronics/services/pcmcat1528819595254.c?id=pcmcat1528819595254",
        logo: ""
    },
    {
        name: "Apple Store",
        phone: "(123) 456-7890",
        url: "https://support.apple.com/repair",
        logo: ""
    },
    {
        name: "Staples",
        phone: "(123) 456-7890",
        url: "https://www.staples.com/tech-services/cat_SC5863",
        logo: ""
    },
    {
        name: "Tech Rescue",
        phone: "(123) 456-7890",
        url: "https://techrescuellc.com/",
        logo: ""
    }
];

const cardContainer = document.getElementById("repairCards");
for (let i = 0; i < repairStores.length; i++) {

    let card = document.createElement("div");

    card.classList.add("store-card");

    card.innerHTML = `
        <h3>${repairStores[i].name}</h3>
        <p><b>Phone:</b> ${repairStores[i].phone}</p>
        <a href = "${repairStores[i].url}" target = "_blank">
            <button>View Details</button>
        </a>
    `;

    cardContainer.appendChild(card);
}