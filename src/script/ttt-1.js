let container = document.querySelector(`.container`);
let your_sign = document.querySelector(`.your-sign`);
let options = your_sign.querySelectorAll(`img`);
let me = document.querySelector(`#me`);
let selected = false;
let selected_image;
localStorage.clear();
options.forEach(image => {
	// console.log(image.src);
	image.onclick = () =>{
		if(!selected){
			selected = true;
			selected_image = image;
			options.forEach(opt => {
				opt.classList.remove(`before-click`);
			});
			image.classList.add(`after-click`);
			me.classList.add(`after-click`);
			window.setTimeout(() => {
				container.classList.add(`end`);
			}, 250);
			window.setTimeout(() => {
				image.classList.remove(`after-click`);
				window.location.href=`dist/script/ttt-2.html`+`#`+selected_image.alt;
			}, 1000);
		}
	};
});
window.addEventListener( "pageshow", function ( event ) {
  let mode = event.persisted || 
  			 ( typeof window.performance != "undefined" && 
            window.performance.navigation.type === 2 );
  if ( mode ) {
    window.location=`dist/script/ttt-1-back.html` + `#` + selected_image.alt;
  }
});