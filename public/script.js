console.log("js loaded");
let count = 0;
document.querySelector("#btnLoad").addEventListener("click", () => {
    if (document.querySelector("#dinoName") !== null) {
        document.querySelector("#dinoName").remove();
      }
      if (document.querySelector("#dinoImage") !== null) {
        document.querySelector("#dinoImage").remove();
      }
    getDinoName();

  getDinoImage();
});

async function getDinoName() {
  const response = await fetch("/dinoname");
  const data = await response.json();
  let dinoName = data[0].join(" ");
  console.log(dinoName);

  
  let dinoNameDiv = document.createElement("div");
  dinoNameDiv.id = 'dinoName'
  dinoNameDiv.textContent = dinoName;
  document.querySelector("body").appendChild(dinoNameDiv);
  
  
}

async function getDinoImage() {
  const response = await fetch("/dinoimage");
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  let dinoImageURL = dinoImage.thumbnailUrl;
  let dinoAlt = dinoImage.name;

  console.log(dinoImageURL);

  

  let img = document.createElement("img");
  img.id = "dinoImage";
  img.src = dinoImageURL;
  img.alt = dinoAlt;
  document.querySelector("body").appendChild(img);
}
