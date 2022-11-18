import "./assets/css/style.css";
import "./assets/scss/style.scss";
import logo from "./assets/images/logo.png";

import myFunction from "./render/nav.js";
import showImg from "./render/first-img.js";
import { creatImgLeft, creatImgRight } from "./render/appIntro.js";
import slider from "./render/slide.js";

myFunction();
showImg();
creatImgLeft();
creatImgRight();
slider();
