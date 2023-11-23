// Endpoint: https://picsum.photos/v2/list

const objectOne = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

const getImg = async (getImgFrom) => {
  const res = await fetch(getImgFrom);
  const data = await res.json();
  return data;
};

getImg("https://picsum.photos/v2/list").then((images) => {
  console.log(images.map((image) => image.download_url));
});

const createImageNText = (object) => {
  const wrapperEl = document.createElement("div");
  const imgEL = document.createElement("img");
  const titleEl = document.createElement("h1");

  wrapperEl.className = "imageAndText";
  imgEL.className = "img";
  imgEL.src = object.download_url;
  imgEL.alt = "image";
  titleEl.textContent = "ecco il contenuto del titolo";

  wrapperEl.append(titleEl, imgEL);

  return wrapperEl;
};

document.body.append(createImageNText(objectOne));
