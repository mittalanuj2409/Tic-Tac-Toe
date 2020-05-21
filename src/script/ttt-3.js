let m = require('./ttt-3-modules.js');
let data = window.location.hash.substring(1).split("#");
let turn;

(document.querySelector(`#opp-marker`)).querySelector(`img`).setAttribute(`src`, `../images/${data[0]}.jpg`);
(document.querySelector(`#opp-marker`)).querySelector(`img`).setAttribute(`alt`, data[0]);

document.querySelector('.reset').addEventListener('click', () => {
	location.reload(true);
});

document.querySelector('.restart').addEventListener('click', () => {
	window.location.href = '../../ttt-1.html';
});

let cells = [];
for(let i = 0; i<9; i++){
	cells[i] = m.cell_info(`cell${i}`);

}

let you = m.player_info(data[0]);
let me = m.player_info('me');

let oppCard = (document.querySelector('#opp-card')).querySelector('p');
let myCard = (document.querySelector('#my-card')).querySelector('p');

if(data[1] == 'true'){
	turn = 'me';
	makeMove({value: 100, index: Math.floor(Math.random() * 9)});
}
else {
	oppCard.classList.toggle('seen');
	turn = 'you';
}
cells.forEach(box => {
	box.cell.addEventListener('click', ()=>{
		if(box.owner == 'none' && turn == 'you'){
			oppCard.classList.toggle('seen');
			box.owner = 'you';
			turn = 'me';
			box.add_image(you.name);
			let copyCells = cells;
			if(m.checkWinner(cells) == 'none') makeMove(m.bestMove(true, copyCells, 0));
			else display(m.checkWinner(cells));
		}
	});
});

function makeMove(move){
	myCard.classList.toggle('seen');
	window.setTimeout(() => {
		cells[move.index].owner = 'me';
		cells[move.index].add_image(me.name);
		if(m.checkWinner(cells) == 'none') {
			oppCard.classList.toggle('seen');
			turn = 'you';
		}
		else display(m.checkWinner(cells));
		myCard.classList.toggle('seen');
	}, Math.floor(Math.random() + 0.5));
}

function display(winner){
	let mr = document.querySelector("#my-result").querySelector('p');
	let yr = document.querySelector("#your-result").querySelector('p');
	if(winner == 'me'){
		mr.innerHTML = 'I Won';
		yr.innerHTML = 'You Lost';
	}
	else if(winner == 'you'){
		yr.innerHTML = 'You Won';
		mr.innerHTML = 'I Lost';
	}
	else {
		yr.innerHTML = 'Match Draw';
		mr.innerHTML = 'Match Draw';
	}
}