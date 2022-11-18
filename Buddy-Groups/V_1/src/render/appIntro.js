import leftImg from "../assets/images/leftImg.png";
import rightImg from "../assets/images/rightIng.png";

export function creatImgLeft() {
  const appleftImg = document.querySelector(".app-intro_left");
  const img = document.createElement("img");
  img.alt = "Buddy Project";
  img.src = leftImg;
  img.classList.add("inteo_left-img");
  appleftImg.appendChild(img);
  return img;
}
export function creatImgRight() {
  const appRightImg = document.querySelector(".app-intro_right");
  const img = document.createElement("img");
  img.alt = "Buddy Project";
  img.width = "720";
  img.src = rightImg;
  img.classList.add("inteo_right-img");
  appRightImg.appendChild(img);
  return img;
}
