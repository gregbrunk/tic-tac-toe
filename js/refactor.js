window.onload = function(){

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
				globalGameBoard = this.gameBoard;
			}
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
};