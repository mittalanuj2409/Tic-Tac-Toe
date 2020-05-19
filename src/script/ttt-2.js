coin_div = document.querySelector(`.coin-div`);
coin_front = document.querySelector(`.coin-front`);
coin_back = document.querySelector(`.coin-back`);
let imgsrc = window.location.hash.substring(1);
coin_back.src = `../src/images/${imgsrc}.jpg`;
coin_back.alt=imgsrc;
let tossed = false;
let result;
Array.from([coin_front, coin_back]).forEach(face => {
	face.addEventListener(`click`, () =>{
		if(!tossed){
			tossed = true;
			coin_div.classList.toggle(`intro`);
			result = Math.random();
			if(result > 0.5){
				coin_div.classList.toggle(`me`);
				window.setTimeout(function(){
					coin_div.removeChild(coin_back);
				}, 4001);
				window.setTimeout(game, 5000);
			}
			else {
				coin_div.classList.toggle(`you`);
				window.setTimeout(function(){
					coin_div.removeChild(coin_front);
				}, 4001);
				window.setTimeout(game, 5000);
			}
			
		}
	});	
});

function game(){
	window.location.href = `ttt-3.html` + `#` + imgsrc + `#` + (result>0.5);
}

window.addEventListener( "pageshow", function ( event ) {
  let mode = event.persisted || 
  			 ( typeof window.performance != "undefined" && 
            window.performance.navigation.type === 2 );
  if ( mode ) {
    window.location=`ttt-2-back.html` + `#` + imgsrc + `#` + (result>0.5);
  }
});
