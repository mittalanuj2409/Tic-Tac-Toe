let m = require('./ttt-3-modules.js');

let data = window.location.hash.substring(1).split("#");
let turn;

(document.querySelector(`.opp-card`)).querySelector(`img`).setAttribute(`src`, `../src/images/${data[0]}.jpg`);
(document.querySelector(`.opp-card`)).querySelector(`img`).setAttribute(`alt`, data[0]);

let cells = [];
for(let i = 0; i<9; i++){
	cells[i] = m.cell_info(`cell${i}`);

}

let you = m.player_info(data[0]);
let me = m.player_info('me');

if(data[1] == 'true'){
	turn = 'me';
	cells[4].owner = 'me';
	cells[4].add_image(me.name);
	turn = 'you';
}
else turn = 'you';

cells.forEach(box => {
	box.cell.addEventListener('click', ()=>{
		if(box.owner == 'none' && turn == 'you'){
			box.owner = 'you';
			turn = 'me';
			box.add_image(you.name);
			let copyCells = cells;
			if(m.checkWinner(cells) == 'none') makeMove(m.bestMove(true, copyCells, 0));
			else console.log(m.checkWinner(cells));
		}
	});
});

function makeMove(move){
	cells[move.index].owner = 'me';
	cells[move.index].add_image(me.name);
	if(m.checkWinner(cells) == 'none') turn = 'you';
	else console.log(m.checkWinner(cells));
}