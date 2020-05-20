let toss = window.location.hash.substring(1);
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
if(toss == 'false'){
	h1.innerHTML = 'Congratulations!!!';
	h2.innerHTML = 'You Won The Toss';
}
else{
	h1.innerHTML = 'I won the toss!!!';
}

document.querySelector('.restart').addEventListener('click', ()=> {
	window.location.href = 'ttt-1.html';
});