
function cell_info(cellID){
	let owner = 'none';
	let cell = document.getElementById(cellID);
	let image = cell.querySelector('img');
	function add_image(name){
		image.setAttribute('src', `../images/${name}.${name == 'me'? 'png' : 'jpg'}`);
		image.setAttribute('alt', name);
		image.classList.toggle('seen');
	}
	return {owner, cell, add_image, image};
}

function player_info(name){
	let cells_owned = [];
	return {name, cells_owned};
}

function getAvailableCells(cells){
	let availableCells = [];
	cells.forEach((cell, index) => {
		if(cell.owner == 'none'){
			availableCells.push(index);
		}
	});
	return availableCells;
}

function isOver(cells){
	if(getAvailableCells(cells).length == 0) return true;
	return false;
}

function checkWinner(cells){

	if(cells[0].owner != 'none' && cells[0].owner == cells[1].owner && cells[1].owner == cells[2].owner){
		return cells[0].owner == 'me' ? 'me' : 'you';
	}
	if(cells[3].owner != 'none' && cells[3].owner == cells[4].owner && cells[4].owner == cells[5].owner){
		return cells[3].owner == 'me' ? 'me' : 'you';
	}
	if(cells[6].owner != 'none' && cells[6].owner == cells[7].owner && cells[7].owner == cells[8].owner){
		return cells[6].owner == 'me' ? 'me' : 'you';
	}

	if(cells[0].owner != 'none' && cells[0].owner == cells[3].owner && cells[3].owner == cells[6].owner){
		return cells[0].owner == 'me' ? 'me' : 'you';
	}
	if(cells[1].owner != 'none' && cells[1].owner == cells[4].owner && cells[4].owner == cells[7].owner){
		return cells[1].owner == 'me' ? 'me' : 'you';
	}
	if(cells[2].owner != 'none' && cells[2].owner == cells[5].owner && cells[5].owner == cells[8].owner){
		return cells[2].owner == 'me' ? 'me' : 'you';
	}

	if(cells[0].owner != 'none' && cells[0].owner == cells[4].owner && cells[4].owner == cells[8].owner){
		return cells[0].owner == 'me' ? 'me' : 'you';
	}
	if(cells[2].owner != 'none' && cells[2].owner == cells[4].owner && cells[4].owner == cells[6].owner){
		return cells[2].owner == 'me' ? 'me' : 'you';
	}

	if(isOver(cells)) return 'draw';
	return 'none';
}

function bestMove(myTurn, copyCells, depth){

	if(myTurn){
		let best = -100;
		let cell_no = -1;
		let possible_values = [];
		for(let cell_index of getAvailableCells(copyCells)){
			let cell_value = {value: -100, index: cell_index};
			copyCells[cell_index].owner = 'me';
			if(checkWinner(copyCells) == 'none'){
				let copy = copyCells;
				possible_values.push({value: bestMove(false, copy, depth+1).value, index: cell_index});
				copyCells[cell_index].owner = 'none';
			}
			else if(checkWinner(copyCells) == 'me'){
				copyCells[cell_index].owner = 'none';
				cell_value.value = 100;
				return cell_value;
			}
			else {
				copyCells[cell_index].owner = 'none';
				cell_value.value = 0;
				return cell_value;
			}
		}
			
		for(let move of possible_values){
			if(move.value > best){
				best = move.value;
				cell_no = move.index
			}
		}
		return {value: best, index: cell_no};
	}
	else{
		let best = 100;
		let cell_no = -1;
		let possible_values = [];
		for(let cell_index of getAvailableCells(copyCells)){
			let cell_value = {value: 100, index: cell_index};
			copyCells[cell_index].owner = 'you';
			if(checkWinner(copyCells) == 'none'){
				let copy = copyCells;
				possible_values.push({value: bestMove(true, copy, depth+1).value, index: cell_index});
				copyCells[cell_index].owner = 'none';
			}
			else if(checkWinner(copyCells) == 'you'){
				copyCells[cell_index].owner = 'none';
				cell_value.value = -100;
				return cell_value;
			}
			else {
				copyCells[cell_index].owner = 'none';
				cell_value.value = 0;
				return cell_value;
			}

		}
		for(let move of possible_values){
			if(move.value < best){
				best = move.value;
				cell_no = move.index
			}
		}
		return {value: best, index: cell_no};
	}
	
}

module.exports = {bestMove, cell_info, player_info, getAvailableCells, isOver, checkWinner};