import food1 from "../assets/images/food1.webp";

const firstImg = document.querySelector(".first-img");
function showImg() {
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = food1;
  img.alt = "food1";
  firstImg.appendChild(img);
}

export default showImg;
