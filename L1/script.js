function order(){
alert("voor dat u wilt bestellen, type yes or no invullen")
var Kaas = prompt("is de kaas geel?");
Kaas = Kaas.toLowerCase();

if (Kaas == "yes"){
	var gaten = prompt("Zitten er gaten in?");
	gaten = gaten.toLowerCase();
	if (gaten == "yes") {
		var duur = prompt("Is de kaas belachelijk duur?");
		duur.duur.toLowerCase();
		if ( duur == "yes"){
			alert("Emmenhaler");
		}else if (duur == "no"){
			alert("Leerdammer");
		}else{
		alert("error please try agian");
	}
		
	}else if (gaten =="no"){
		var hard = prompt("is de kaas hard als steen?");
		hard = hard.toLowerCase();
		if (hard == "yes"){
			alert("Pamnigiano Reggiano");
		}else if(hard == "no"){
			alert("Goudse kaas");
		}else{
			alert("error please try agian");
		}


}else if (Kaas == "no"){
	var schimmels = prompt("Heeft de kaas blauwe schimmels?");
	schimmels.schimmels.toLowerCase();
	if (schimmels == "yes"){
		var korst = prompt("Heeft de kaas korst?");
		if (korst == "yes"){
			alert("Blau de Rochbaron");
		}else if(korst == "no"){
			alert("Founme D'Ambert");
		}else{
		alert("error please try agian");
	}
	}else if (schimmels == "no"){
		var korst = prompt("Heeft de kaas korst?");
		if (korst == "yes"){
			alert("Camembert");
		} else if(korst == "no"){
			alert("Mozzarella");
		}else{
		alert("error please try agian");
	}
	}else{
		alert("error please try agian");
	}
}else{
	alert("error please try agian");
}

}

