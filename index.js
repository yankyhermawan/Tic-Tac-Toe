var turn = 0;

function checkWinner(id) {
	var listLowPlayer1 = [];
	var listMidPlayer1 = [];
	var listHighPlayer1 = [];
	var listPlayer1 = [];
	var listLowPlayer2 = [];
	var listMidPlayer2 = [];
	var listHighPlayer2 = [];
	var listPlayer2 = [];
	var player1 = document.getElementsByClassName("player1");
	var player2 = document.getElementsByClassName("player2");
	for (let i = 0; i < player1.length; i++) {
		var num = Number(player1[i].id);
		listPlayer1.push(num);
		if (num <= 3) {
			listLowPlayer1.push(num);
		} else if (num > 3 && num <= 6) {
			listMidPlayer1.push(num);
		} else if (num > 6) {
			listHighPlayer1.push(num);
		}
	}
	for (let i = 0; i < player2.length; i++) {
		var num = Number(player2[i].id);
		listPlayer2.push(num);
		if (num <= 3) {
			listLowPlayer2.push(num);
		} else if (num > 3 && num <= 6) {
			listMidPlayer2.push(num);
		} else if (num > 6) {
			listHighPlayer2.push(num);
		}
	}
	for (let i = 0; i < listPlayer1.length; i++) {
		let status = checkPattern(
			listPlayer1[i],
			listLowPlayer1,
			listMidPlayer1,
			listHighPlayer1
		);
		if (status == "Win") {
			var r = confirm("Player 1 Win");
			if (r == true) {
				window.location.reload();
			}
		}
	}
	for (let i = 0; i < listPlayer2.length; i++) {
		let status = checkPattern(
			listPlayer2[i],
			listLowPlayer2,
			listMidPlayer2,
			listHighPlayer2
		);
		if (status == "Win") {
			var r = confirm("Player 1 Win");
			if (r == true) {
				window.location.reload();
			}
		}
	}
}

function checkPattern(int, listLow, listMid, listHigh) {
	if (listMid.includes(int - 4) && listLow.includes(int - 8)) {
		return "Win";
	} else if (listMid.includes(int - 3) && listLow.includes(int - 6)) {
		return "Win";
	} else if (listMid.includes(int - 2) && listLow.includes(int - 4)) {
		return "Win";
	} else if (
		listHigh.length == 3 ||
		listMid.length == 3 ||
		listLow.length == 3
	) {
		return "Win";
	}
}

// document.addEventListener("click", (e) => {
// 	let elementId = e.target.id;
// 	if (document.getElementById(`${elementId}`).classList.length == 1) {
// 		if (elementId != "") {
// 			turn += 1;
// 			if (turn % 2 == 0) {
// 				player = "X";
// 				playerName = "player2";
// 			} else {
// 				player = "O";
// 				playerName = "player1";
// 			}
// 			document.getElementById(`${elementId}`).innerHTML = player;
// 			document.getElementById(`${elementId}`).classList.add(playerName);
// 		}
// 	}
// });

function reply_click(id) {
	turn += 1;
	if (turn % 2 == 0) {
		player = "X";
		playerName = "player2";
	} else {
		player = "O";
		playerName = "player1";
	}
	document.getElementById(`${id}`).innerHTML = player;
	document.getElementById(`${id}`).classList.add(playerName);
}
