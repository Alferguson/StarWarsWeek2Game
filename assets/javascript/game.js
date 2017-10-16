$(document).ready(function(){
	// global variable declarations and initialization 
	gameOver = function() {

		userChar = "";
		$("#userChar").html("Your chosen character here");
		userCharHTML = "";
		userCharId = "";
		userCharHP = "";
		$("#userCharHP").html("");
		userCharAtk = "";
		$("#userCharAtk").html("");


		enemyChar = "";
		$("#enemyChar").html("Your oppenent here");
		enemyCharHTML = "";
		enemyCharId = "";
		enemyCharHP = "";
		$("#enemyCharHP").html("");
		enemyCharAtk = "";
		$("#enemyCharAtk").html("");
		alert("You lose, loser");
	}
	// object of characters with first number is HP and last number is attack
	charObj = {
			"bobaFett": [150, 11],
			"darthVader": [250, 20],
			"hanSolo": [180, 15],
			"jarJarBinks": [20, 3]
		}
	userChar = "";
	userCharHTML = "";
	userCharId = "";
	userCharAtk = "";
	userCharHP = "";

	enemyChar = "";
	enemyCharHTML = "";
	enemyCharId = "";
	enemyCharAtk = "";
	enemyCharHP = "";

	// when img is clicked func
	$("img").on("click", function() {
		var userCharHTML = $("#userChar").text();
		var enemyCharHTML = $("#enemyChar").text();
		
		// if an img is clicked and the html of userChar is the default, then move clicked img there
		if (userCharHTML == "Your chosen character here") {
			
			userChar = this;
			// add img to html of id userChar
			$("#userChar").html(userChar);
			userCharId = $(userChar).attr("id");
			
			// HP and atk are chosen and displayed
			$("<h5>" + charObj[userCharId][0] + "</h5>").appendTo("#userCharHP");
			userCharHP = charObj[userCharId][0];
			$("<h5>" + charObj[userCharId][1] + "<h5>").appendTo("#userCharAtk");
			userCharAtk = charObj[userCharId][1];
			$("<h2>Versus</h2>").appendTo("#userCharAtk");
			

		}
		
		else {
			
			enemyChar = this;
			$("#enemyChar").html(enemyChar);
			enemyCharId = $(enemyChar).attr("id");
			
			
			$("<h5>" + charObj[enemyCharId][0] + "</h5>").appendTo("#enemyCharHP");
			enemyCharHP = charObj[enemyCharId][0];
			
			$("<h5>" + charObj[enemyCharId][1] + "</h5>").appendTo("#enemyCharAtk");
			enemyCharAtk = charObj[enemyCharId][1];
			

		}

	})

//:contains
	// when attack button is clicked func
	$("#attackId").on("click", function() {
		// Game win is where 3 enemies are in the defeated section
		var countOfClasses = $("#defeatedId[img-fluid*='countOfClasses']").length;
		debugger;
		if (countOfClasses < 3	) {
			debugger;

		
			userCharHP -= enemyCharAtk; 
			$("#userCharHP").html("<h5>" + userCharHP + "</h5>");
			


			// to gain atk after every click
			userCharAtk += userCharAtk;
			$("#userCharAtk").html("<h5>" + userCharAtk + "</h5>");

			enemyCharHP -= userCharAtk;
			$("#enemyCharHP").html("<h5>" + enemyCharHP + "</h5>");
			
			// when userHP is 0 or less, run gameOver()
			if (userCharHP <= 0) {
				gameOver();
			}

			//  when enemyHP is 0 or less, move enemy img to defeated and set enemy hp and atk to blank
			else if (enemyCharHP <= 0) {
				
				$("#" + enemyCharId + "").appendTo("#defeatedId");
				enemyCharHP = "";
				$("#enemyCharHP").html("<h5>" + enemyCharHP + "</h5>");
				
				enemyCharAtk = "";
				$("#enemyCharAtk").html("<h5>" + enemyCharAtk + "</h5>");



			}

		} 
		else {
			alert("You're a winner, winner winner chicken dinner, eyyy a pubg reference, so cool, I would def play that game if I could but my computer blows so yeah. Congrats on winning.");
		}


		


	})	
		




})

