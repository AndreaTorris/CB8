const staticToDinamic = (sectionClass, title, divClass) => {
  const sectionEl = document.createElement("section");
  const titleEl = document.createElement("h3");
  const divEl = document.createElement("div");

  sectionEl.className = sectionClass;
  titleEl.textContent = title;
  divEl.className = divClass;

  sectionEl.append(titleEl, divEl);

  return sectionEl;
};

document.body.append(
  staticToDinamic("recommended", "Recommended 4 you", "robo-list")
);

const roboProdGen = (roboData) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h4");

  wrapperEl.className = "robo";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "$";
  nameEl.textContent = roboData.roboName;
  textEl.append(priceEl, nameEl);
  wrapperEl.append(textEl, imgEl);

  return wrapperEl;
};

const mockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 445,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Pippo",
    price: 30,
    imageUrl: "https://robohash.org/pippo",
  },
];

const roboListEl = document.querySelector(".robo-list");

try {
  mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));
} catch (error) {
  alert(
    `Si è verificato un errore nell'esecuzione della funzione roboProdGen: ${error.message}`
  );
}
