const searchGen = (imgLink, alt) => {
  const searchEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const inputEl = document.createElement("input");

  searchEl.className = "search";

  imgEl.src = imgLink;
  imgEl.alt = alt;

  inputEl.type = "text";
  inputEl.placeholder = "Search";

  searchEl.append(imgEl, inputEl);
  return searchEl;
};

const arrayList = ["TV Shows", "Movies"];

const linksGEn = (arrayName) => {
  const linksEl = document.createElement("div");
  const listEl = document.createElement("ul");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");
  const elementsInList = arrayName.map((element) => {
    let lesserListEl = document.createElement("li");
    lesserListEl.textContent = element;
    listEl.append(lesserListEl);
  });

  linksEl.className = "links";
  listEl.className = "links-list";

  labelEl.for = "categories";
  labelEl.textContent = "Categories";
  selectEl.name = "categories";
  selectEl.id = "categories";
  optionEl.value = "";

  listEl.append(labelEl, selectEl, optionEl);
  linksEl.append(listEl);
  return listEl;
};

const navBarGen = () => {
  const navBarEl = document.createElement("div");
  navBarEl.className = "navbar";

  navBarEl.append(
    searchGen(
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
      "image"
    )
  );

  navBarEl.append(linksGEn(arrayList));

  return navBarEl;
};

document.body.append(navBarGen());
