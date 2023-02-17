var turn = 0;

function checkWinner() {
	var listPlayer1 = [];
	var listPlayer2 = [];
	var player1 = document.getElementsByClassName("player1");
	var player2 = document.getElementsByClassName("player2");
	for (let i = 0; i < player1.length; i++) {
		listPlayer1.push(Number(player1[i].id));
	}
	for (let i = 0; i < player2.length; i++) {
		listPlayer2.push(Number(player2[i].id));
	}
	console.log(`List 1 = ${listPlayer1}`);
	console.log(`List 2 = ${listPlayer2}`);
}
window.onload = checkWinner();
document.addEventListener("click", (e) => {
	let elementId = e.target.id;
	if (document.getElementById(`${elementId}`).classList.length == 1) {
		if (elementId != "") {
			turn += 1;
			if (turn % 2 == 0) {
				player = "X";
				playerName = "player1";
			} else {
				player = "O";
				playerName = "player2";
			}
			document.getElementById(`${elementId}`).innerHTML = player;
			document.getElementById(`${elementId}`).classList.add(playerName);
		}
	}
});
