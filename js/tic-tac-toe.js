
//This allows the JS to load AFTER the DOM has loaded.
window.onload = function(){
	var body = document.querySelector('body');
	var playerTurnHeadline = body.querySelector('#playerText');
	var turn = 0;
	var globalGameBoard = [];

	function Board() {
		this.gameBoard = [];
		this.resetButton = body.querySelector('.resetButton');
	}

	Board.prototype = {
		start: function(){
			this.setGameBoard();
			this.addClickCheck();
			this.addResetCheck();
		},
		setGameBoard: function(){
			for (i=0; i < 9; i++){
				var box = body.querySelectorAll('.box')[i];
				this.gameBoard.push(box);
			}
			globalGameBoard = this.gameBoard;
		},
		addClickCheck: function(){
			for (var i=0; i < this.gameBoard.length; i++) {
				this.gameBoard[i].addEventListener('click', function(){
					var boxClicked = this;
					runPlayerMove(boxClicked);
				});
			}
		},
		addResetCheck: function(){
			this.resetButton.addEventListener('click', resetBoard);
		}
	};

	new Board().start();

	// runPlayerMove()
	// If turn is zero or even - this should run playerOneMove()
		// Change headline "Its Player Two's Turn"
	// If turn is odd - this should run playerTwoMove()
		// Change headline "Its Player One's Turn"
	// This should add one to var 'turn'
	function runPlayerMove(boxClicked) {
		if (turn%2 ===0 && boxClicked.innerHTML.length === 0) {
			playerOneMove(boxClicked);
			playerTurnHeadline.textContent = "Player Two's Turn - You are O's";
			playerTurnHeadline.setAttribute('class', 'playerTurnTwo');
		} else if (turn%2 !==0 && boxClicked.innerHTML.length === 0) {
			playerTwoMove(boxClicked);
			playerTurnHeadline.textContent = "Player One's Turn - You are X's";
			playerTurnHeadline.setAttribute('class', 'playerTurnOne');
		} else {
			alert("That square has already been played!");
		}
	}

	// Run playerOneMove()
	// This should create a variable for <div> of box that was clicked
	// This should add a child <p> to <div> of box that was clicked
	// This should add a class to <p> with styling for X's
	// This should add textContent to <p> with letter X
	// For tht variable, remove event listener
		// System will now wait for another click.
		// System now has var 'turns' = 1 (which is odd)
		// Ststem will wait for another click, then run playerMove();
	function playerOneMove(boxClicked){
		var selectedBox = boxClicked;
		var xMove = document.createElement('div');
		xMove.innerHTML = "X";
		xMove.setAttribute('class', 'x');
		selectedBox.appendChild(xMove);
		turn += 1;
		
		if (turn === 9) {
			alert ("It's a draw! Click the reset button to start a new game.");
		}
	}

	// Run playerTwoMove()
	// This should create a variable for <div> of box that was clicked
	// This should add a child <p> to <div> of box that was clicked
	// This should add a class to <p> with styling for O's
	// This should add textContent to <p> with letter O
	// This should (somehow) make this spot unavailable.
	function playerTwoMove(boxClicked){
		var selectedBox = boxClicked;
		var yMove = document.createElement('div');
		yMove.innerHTML = "O";
		yMove.setAttribute('class', 'o');
		selectedBox.appendChild(yMove);
		turn += 1;
		
		if (turn === 9) {
			alert ("It's a draw! Click the reset button to start a new game");
		}
	}

	// resetGame()
	// set gameBoard array to [ ]
	// set var turn = 0
	function resetBoard() {
		for (var i=0; i < globalGameBoard.length; i++) {
			globalGameBoard[i].innerHTML = ""; }
		turn = 0;
		playerTurnHeadline.textContent = "Player One's Turn - You are X's";
		playerTurnHeadline.setAttribute('class', 'playerTurnOne');
	}

};