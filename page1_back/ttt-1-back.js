let your_sign = document.querySelector(`.sign`);
let opp_marker = your_sign.querySelector(`img`);
let imgsrc = window.location.hash.substring(1)
opp_marker.src = `../images/${imgsrc}.jpg`;
opp_marker.alt = imgsrc;