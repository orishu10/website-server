window.addEventListener('load', dataExtreact())

async function random() {
    let data = await fetch("http://localhost:3000/cards");
    data = await data.json();
    console.log(data);
    return data;
  }
const arrCards = [];
const main = document.getElementsByClassName("main")[0];
async function dataExtreact() {
   let arr =  await random();
    arr.forEach((product) => {
      console.log("test" , product);
      const card = document.createElement("div");
      const image = document.createElement("img");
      const title = document.createElement("p");
      const pencil = document.createElement("img");
      const garbage = document.createElement("img");
      const divImg = document.createElement("div");
      const divTitle = document.createElement("div");
      const divIcon = document.createElement("div");
      card.id = product.id;
      divImg.className = "divImg";
      image.className = "image";
      title.className = "title";
      divTitle.className = "divTitle";
      card.className = "card";
      divIcon.className = "divIcon";
      image.src = product.image;
      divImg.appendChild(image);
      divTitle.appendChild(title);
      card.appendChild(divImg);
      title.innerText = product.title;
      card.appendChild(divTitle);
      pencil.src = "https://shorturl.at/hkuzY";
      pencil.style.height = "20px";
      pencil.style.width = "20px";
      garbage.src = "https://shorturl.at/isAJR";
      garbage.style.height = "20px";
      garbage.style.width = "20px";
      divIcon.appendChild(pencil);
      divIcon.appendChild(garbage);
      card.appendChild(divIcon);
      main.appendChild(card);
      iconHover(garbage);
      iconHover(pencil);
      arrCards.push(card);
    });
    function iconHover(icon) {
      icon.addEventListener("mouseover", () => {
        icon.style.backgroundColor = "#F9F5EB";
        icon.style.borderRadius = "8px";
        icon.style.padding = "2px";
      });
      icon.addEventListener("mouseout", () => {
        icon.style.backgroundColor = "#FFBF9B";
        icon.style.borderRadius = "1px";
      });
    }
  }
  // const plus = get("plusIcon");
  function hover(icon) {
    icon.addEventListener("mouseover", () => {
      icon.style.height = "45px";
    });
    icon.addEventListener("mouseout", () => {
      icon.style.height = "35px";
    });
  }
  // hover(house);
  // hover(plus);
     