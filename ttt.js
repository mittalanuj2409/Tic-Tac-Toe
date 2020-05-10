function add_events(markers, selected){
	markers.forEach(mark => {
		mark.addEventListener(`click`, ()=>{
			if(!selected){
				selected = true;
				marker = mark;
				mark.classList.toggle('is-flipped');
				window.setTimeout(page2, 1000);
			}
		});
	});
}

function page1(){
	let sign_select = document.createElement("div");
	sign_select.classList.add("sign-select");
	body.appendChild(sign_select);

	let your_sign  = document.createElement("div");
	your_sign.classList.add("your-sign");
	sign_select.appendChild(your_sign);
	
	let select = document.createElement("p");
	select.innerHTML = "Select Your Marker";
	your_sign.appendChild(select);
	
	let bart = document.createElement("img");
	bart.setAttribute("src", "images/bart.jpg");
	bart.setAttribute("alt", "Bart");
	bart.classList.add("enabled");
	your_sign.appendChild(bart);
	
	let stewie = document.createElement("img");
	stewie.setAttribute("src", "images/stewie.jpg");
	stewie.setAttribute("alt", "Stewie");
	stewie.classList.add("enabled");
	your_sign.appendChild(stewie);
	
	let rick = document.createElement("img");
	rick.setAttribute("src", "images/rick.jpg");
	rick.setAttribute("alt", "Rick");
	rick.classList.add("enabled");
	your_sign.appendChild(rick);
	
	let my_sign = document.createElement("div");
	my_sign.classList.add("my-sign");
	sign_select.appendChild(my_sign);
	
	let my = document.createElement("p");
	my.innerHTML = "My Marker";
	my_sign.appendChild(my);
	my_sign.appendChild(brain);

	add_events(Array.from([bart, stewie, rick]), selected);


}

function page2(){
	let sign_select = document.querySelector(`.sign-select`);
	sign_select.classList.toggle(`end`);
	window.setTimeout(head, 1000);
	
	function head(){
		body.removeChild(sign_select);
		
		let head = document.createElement(`div`);
		head.classList.add("head");
		body.insertBefore(head, document.querySelector(`.toss`));
		
		let opp = document.createElement(`div`);
		opp.classList.add("opp-score");
		head.appendChild(opp);
		
		let my = document.createElement(`div`);
		my.classList.add("my-score");
		head.appendChild(my);
		
		opp.appendChild(opp_card);
		
		marker.classList.remove("enabled", "is-flipped");
		opp.appendChild(marker);
		my.appendChild(brain);
		my.appendChild(my_card);
		
		toss(marker);
	}

}

function toss(marker){
	let toss_div = document.createElement(`div`);
	toss_div.classList.add(`toss`);
	body.appendChild(toss_div);
	
	let coin_div = document.createElement(`div`);
	coin_div.classList.add(`coin`);
	toss_div.appendChild(coin_div);
	
	let desc = document.createElement(`p`);
	desc.classList.add(`toss-desc`);
	desc.innerHTML = `Toss this coin to decide who plays first`;
	toss_div.appendChild(desc);
	
	let desc2 = document.createElement(`p`);
	desc2.classList.add(`toss-desc2`);
	desc2.innerHTML = `(Click on coin)`;
	toss_div.appendChild(desc2);
	
	let coin_front = document.createElement("img");
	coin_front.setAttribute("src", "images/me.png");
	coin_front.setAttribute("alt", "AI");
	coin_front.classList.add(`coin-front`);
	coin_div.appendChild(coin_front);
	
	let coin_back = marker.cloneNode(true);
	coin_back.classList.add(`coin-back`);
	coin_div.appendChild(coin_back);
	
	coin_div.classList.toggle(`intro`);
	let tossed = false;
	Array.from([coin_front, coin_back]).forEach(face => {
		face.addEventListener(`click`, () =>{
			if(!tossed){
				tossed = true;
				coin_div.classList.toggle(`intro`);
				let result = Math.random();
				if(result > 0.5){
					coin_div.classList.toggle(`me`);
					window.setTimeout(function(){
						coin_div.removeChild(coin_back);
					}, 4001);
					window.setTimeout(game.bind(null, coin_front), 5000);
				}
				else {
					coin_div.classList.toggle(`you`);
					window.setTimeout(function(){
						coin_div.removeChild(coin_front);
					}, 4001);
					window.setTimeout(game.bind(null, coin_back), 5000);
				}
				
			}
		});	
	});
}

function game(result){
	result.className = '';
	let coin_div = document.querySelector(`.coin`);
	coin_div.classList.remove(`intro`);
	coin_div.classList.toggle(`show-toss`);
}

let body = document.querySelector("body");
let marker;
let selected = false;

let brain = document.createElement("img");
brain.setAttribute("src", "images/me.png");
brain.setAttribute("alt", "AI");

let opp_card = document.createElement(`div`);
opp_card.classList.add(`opp-card`)
for(let i = 1; i<6; i++){
	let card = document.createElement('div');
	card.classList.add(`card-point`);
	card.setAttribute[`id`, `opp-card-${6-i}`];
	opp_card.appendChild(card);
}

let my_card = document.createElement(`div`);
my_card.classList.add(`my-card`);
for(let i = 1; i<6; i++){
	let card = document.createElement('div');
	card.classList.add(`card-point`);
	card.setAttribute[`id`, `my-card-${i}`];
	my_card.appendChild(card);
}

page1();
