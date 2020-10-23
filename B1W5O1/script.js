var randomimage = new Array();

randomimage[0] = "image/memes/meme1.jpg";
randomimage[1] = "image/memes/meme2.jpg";
randomimage[2] = "image/memes/meme3.jpg";


function getRandomImage(){
	var number = Math.floor(Math.random()*randomimage.length);
	document.write('<img src="'+randomimage[number]+'"/>');
}



function startTraining(){

var weapon = prompt("you opponent have sword.\nwitch is the best weapon to use?\nSword,Lance or Axe");
weapon = weapon.toLowerCase();

if(weapon == "lance"){
	alert("you won the first round!");
	var round2 = prompt("you opponent have Axe.\nwitch is the best weapon to use?\nSword,Lance or Axe");
	round2 = round2.toLowerCase();
		if (round2 == "sword"){
			alert("Good job, keep going.");
				var round3 = prompt("you opponent have Lance.\nwitch is the best weapon to use?\nSword,Lance or Axe");
				round3 = round3.toLowerCase()
					if (round3 == "axe"){
						alert("Well done, now we going a bit diffrent this time.");
						var round4 = prompt("opponent have now heavy armor. \nwitch is best option to use? \n Melee , Magic or Range weapen");
						round4 = round4.toLowerCase();
							if (round4 == "magic") {
								alert(" wow impressive, now up to the final opponent.");
								var last = prompt("you're final opponent is the DeathKnight.\nto make a bit easier i give you this weapons.\n DarkSpikeT , TomeOfNaga or ArmorSmasher");
								last = last.toLowerCase();
									if (last == "darkspiket"){
										alert("Congratulations you won this Training, as a price here a meme");
										getRandomImage();
									}else if (last == "tomeofnaga"){
										alert("you lost agianst him but you get the meme anyway");
										getRandomImage();
									} else if (last == "armorsmasher"){
										alert("you lost agianst him but you get the meme anyway");
										getRandomImage();
									}
									else {
										alert("eeehhhhmmmm what?");
									}
									
							}else if (round4 == "melee"){
								alert("Armor has to high defense didn't give any damage");
							}else if (round4 == "range"){
								alert("Armor has to high defense didn't give any damage");
							}else {
								alert("eeehhhhmmmm what?");
							}
							
					} else if(round3 =="lance"){
						alert("it a draw game");
					} else if(round3 == "sword"){
						alert("opponent is a bit to strong \nbut nice try");
					}
		} else if (round2 == "axe"){
			alert("it a draw game");
		} else if (round2 == "lance"){
			alert("opponent is a bit to strong \nbut nice try");
		} else{
			alert("eeehhhhmmmm what?");
		}
}else if (weapon == "sword"){
	alert("it a draw game");

}else if(weapon == "axe"){
	alert("opponent is a bit to strong \nbut nice try");
}else{
	alert("eeehhhhmmmm what?");
}





}	
//else if (last == "TomeOfNaga"){
//										alert("you lost agianst him but you get the meme anyway");
//										getRandomImage();	
//									}else if (last == "ArmorSmasher"){
	//									alert("you lost agianst him but you get the meme anyway");
	//									getRandomImage();
	//								}