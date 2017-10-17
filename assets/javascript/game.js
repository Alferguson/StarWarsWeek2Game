$(document).ready(function(){
	// global variable declarations and initialization 
	var userChar = "";
	var userCharText = "";
	var userCharId = "";
	var userCharAtk = "";
	var userCharHP = "";

	var enemyChar = "";
	var enemyCharId = "";
	var enemyCharAtk = "";
	var enemyCharHP = "";
	var enemyPresent = false;

	// object of characters with first number is HP and last number is attack
	var charObj = {
			"bobaFett": [200, 26],
			"darthVader": [500, 20],
			"hanSolo": [110, 11],
			"jarJarBinks": [40, 3]
	}
	// game over function
	gameOver = function() {

		userChar = "";
		$("#userChar").html("Your chosen character here");
		userCharText = "";
		userCharId = "";
		userCharHP = "";
		$("#userCharHP").html("");
		userCharAtk = "";
		$("#userCharAtk").html("");


		enemyChar = "";
		$("#enemyChar").html("Your oppenent here");
		enemyCharId = "";
		enemyCharHP = "";
		$("#enemyCharHP").html("");
		enemyCharAtk = "";
		$("#enemyCharAtk").html("");
		$("#win-loss").html("<h1>Sorry but you lost big time</h1>");
	}

	// game win function
	gameWin = function () {
		
		$("#win-loss").html("<h1>Eyyyyy, you won</h1>");
	}

	// When image is clicked, start the game 
	$("img").on("click", function() {

		// var to check if there is text in the right box and do funcs off of that
		var userCharText = $("#userChar").text();
				
		// if an img is clicked and the html of userChar is the default, then move clicked img there
		if (userCharText == "Your chosen character here") {
			
			userChar = this;
			// add img to html of id userChar
			$("#userChar").html(userChar);
			userCharId = $(userChar).attr("id");
			
			// HP and atk are chosen and displayed
			debugger;
			$("<h5>" + charObj[userCharId][0] + "</h5>").appendTo("#userCharHP");
			userCharHP = charObj[userCharId][0];
			$("<h5>" + charObj[userCharId][1] + "<h5>").appendTo("#userCharAtk");
			userCharAtk = charObj[userCharId][1];
			$("<h2>Versus</h2>").appendTo("#userCharAtk");

			// text for choose your oppenent 
			$("#chooseChar").html("Choose your oppenent");
			

		}
		// if user is selected and if there is no oppenent selected, select an oppenent and button is active
		else if (enemyPresent == false) {
			debugger;
			enemyChar = this;
			// add img to html of id enemyChar
			$("#enemyChar").html(enemyChar);
			enemyCharId = $(enemyChar).attr("id");

			// HP and atk are chosen and displayed
			$("<h5>" + charObj[enemyCharId][0] + "</h5>").appendTo("#enemyCharHP");
			enemyCharHP = charObj[enemyCharId][0];
			debugger;
			$("<h5>" + charObj[enemyCharId][1] + "</h5>").appendTo("#enemyCharAtk");
			enemyCharAtk = charObj[enemyCharId][1];

			// makes Atk button active
			$("button").removeClass("disabled").addClass("active");

			// variable to ensure no more than 2 opponents can be chosen
			enemyPresent = true;
		}
	})

	// when attack button is clicked func
	$("#attackId").on("click", function() {
		
		// enemy loses HP by how much userAtk
		enemyCharHP -= userCharAtk;
		$("#enemyCharHP").html("<h5>" + enemyCharHP + "</h5>");

		// User HP is decreased by enemy char atk
		userCharHP -= enemyCharAtk; 
		$("#userCharHP").html("<h5>" + userCharHP + "</h5>");
			

		// to gain atk after every click
		userCharAtk += userCharAtk;
		$("#userCharAtk").html("<h5>" + userCharAtk + "</h5>");

						
		// when userHP is 0 or less, run gameOver()
		if (userCharHP <= 0) {
			gameOver();
		}

		//  when enemyHP is 0 or less, move enemy img to defeated and set enemy hp and atk to blank and set atk button to disabled
		else if (enemyCharHP <= 0) {
			$("button").removeClass("active").addClass("disabled");		
			$("#" + enemyCharId + " ").appendTo("#defeatedId");
			enemyCharHP = "";
			$("#enemyCharHP").html("<h5>" + enemyCharHP + "</h5>");
			enemyCharAtk = "";
			$("#enemyCharAtk").html("<h5>" + enemyCharAtk + "</h5>");

			// Game win is where 3 enemies are in the defeated section
			var countOfClasses = $("#defeatedId img").length;
			enemyPresent = false;
			if (countOfClasses >= 3) {
				gameWin();
			}
		} 
	})	
})

