const heroGenerator = (title, description, btnText) => {
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const descriptionEl = document.createElement("p");
  const btnEl = document.createElement("button");

  btnEl.setAttribute("class", "buttonOne");
  wrapperEl.setAttribute("class", "Hero");
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  btnEl.textContent = btnText;
  wrapperEl.append(titleEl, descriptionEl, btnEl);

  return wrapperEl;
};

document.body.append(
  heroGenerator(
    "Welcome to the Official Nike Air Store",
    "I am Michael Jordan and these are my shoes",
    "Buy your pair NOW"
  )
);

const imgOne = "./Resources/img1.webp";

const element = document.querySelector(".Hero");

element.style.backgroundImage = `url(${imgOne})`;

const ButtonToDeactivate = document.querySelector(".buttonOne");

ButtonToDeactivate.addEventListener("click", () => {
  element.style.display = "none";
});

const imageGenerator = (imgLocation, alt, classe, id) => {
  const imgToBeCreated = document.createElement("img");
  imgToBeCreated.setAttribute("src", imgLocation);
  imgToBeCreated.setAttribute("alt", alt);
  imgToBeCreated.setAttribute("class", classe);
  imgToBeCreated.setAttribute("id", id);

  return imgToBeCreated;
};

const gallery = document.querySelector(".galleria1");

gallery.append(
  imageGenerator(
    "https://picsum.photos/200/200?1",
    "Immagine alternativa 1",
    "immagineOne",
    "1"
  )
);
