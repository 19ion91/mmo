var base = 100;
//attacco
var valTestaAttacco = 0;
var valBustoAttacco = 0;
var valBraccioDXAttacco = 0;
var valBraccioSXAttacco = 0;
var valGambeAttacco = 0;
var valTotaleAttacco = 0;
//difesa
var valTestaDifesa = 0;
var valBustoDifesa = 0;
var valBraccioDXDifesa = 0;
var valBraccioSXDifesa = 0;
var valGambeDifesa = 0;
var valTotaleDifesa = 0;
//forza
var valTestaForza = 0;
var valBustoForza = 0;
var valBraccioDXForza = 0;
var valBraccioSXForza = 0;
var valGambeForza = 0;
var valTotaleForza = 0;
//intelligenza
var valTestaIntel = 0;
var valBustoIntel = 0;
var valBraccioDXIntel = 0;
var valBraccioSXIntel = 0;
var valGambeIntel = 0;
var valTotaleIntel = 0;
//raggio
var valTestaRaggio = 0;
var valBustoRaggio = 0;
var valBraccioDXRaggio = 0;
var valBraccioSXRaggio = 0;
var valGambeRaggio = 0;
var valTotaleRaggio = 0;
//variabile per tenere traccia energia
var energy = 100;

function cambiaT(){
	if(energy < 20) {
		alert("energia insufficiente");
		document.getElementById("testa").value=0;
		return;
	}
	energy = energy -20;
	document.getElementById("progress-energia").style.width=energy+'%';
	switch(document.getElementById("testa").value){
		case "1": document.getElementById("etichetta1").innerHTML = "ATK+10 INT+20 RAG+5";
		break;
		case "2":	document.getElementById("etichetta1").innerHTML ="ATK+15 INT+25 RAG+15";
		break;
		case "3":	document.getElementById("etichetta1").innerHTML ="ATK+20 INT+70 RAG+35";
		break;
		case "4": document.getElementById("etichetta1").innerHTML ="ATK+30 INT+50 RAG+15";
		break;
		case "5":	document.getElementById("etichetta1").innerHTML ="ATK+50 INT+40 RAG-5";
		break;
	}
}

function cambiaB(){
	if(energy < 35) {
		alert("energia insufficiente");
		document.getElementById("busto").value=0;
		return;
	}
	energy = energy -35;
	document.getElementById("progress-energia").style.width=energy+'%';
	switch(document.getElementById("busto").value){
		case "1": document.getElementById("etichetta2").innerHTML = "ATK+5 DIF+50 RAG-20";
							break;
		case "2":	document.getElementById("etichetta2").innerHTML = "ATK+5 DIF+60 RAG-20";
							break;
		case "3":	document.getElementById("etichetta2").innerHTML ="ATK+5 DIF+70 RAG-30";
							break;
		case "4": document.getElementById("etichetta2").innerHTML ="ATK+5 DIF+100 RAG-40";
							break;
		case "5": document.getElementById("etichetta2").innerHTML ="ATK+5 DIF+150 RAG-20";
							break;
	}
}

function cambiaMD(){
	if(energy < 15) {
		alert("energia insufficiente");
		document.getElementById("braccioD").value=0;
		return;
	}
	energy = energy -15;
	document.getElementById("progress-energia").style.width=energy+'%';
	switch(document.getElementById("braccioD").value){
		case "1": document.getElementById("etichetta3").innerHTML = "ATK+5 DIF+5 RAG+5";
							break;
		case "2":	document.getElementById("etichetta3").innerHTML ="ATK+5 DIF+25 RAG+5";
							break;
		case "3":	document.getElementById("etichetta3").innerHTML ="ATK+25 DIF+55 RAG+5";
							break;
		case "4": document.getElementById("etichetta3").innerHTML ="ATK+15 DIF+75 RAG+15";
							break;
		case "5": document.getElementById("etichetta3").innerHTML ="ATK+15 DIF+155 RAG+25";
							break;
	}
}

function cambiaMS(){
	if(energy < 30) {
		alert("energia insufficiente");
		document.getElementById("braccioS").value=0;
		return;
	}
	energy = energy -30;
	document.getElementById("progress-energia").style.width=energy+'%';
	switch(document.getElementById("braccioS").value){
		case "1": document.getElementById("etichetta4").innerHTML = "ATK+50 FRZ+10";
							break;
		case "2":	document.getElementById("etichetta4").innerHTML ="ATK+50 FRZ+50";
							break;
		case "3":	document.getElementById("etichetta4").innerHTML ="ATK+50 FRZ+80";
							break;
		case "4": document.getElementById("etichetta4").innerHTML ="ATK+150 FRZ+30";
							break;
		case "5": document.getElementById("etichetta4").innerHTML ="ATK+250 FRZ+20";
							break;
	}
}

function cambiaG(){
	if(energy < 50) {
		alert("energia insufficiente");
		document.getElementById("gambe").value=0;
		return;
	}
	energy = energy -50;
	document.getElementById("progress-energia").style.width=energy+'%';
	switch(document.getElementById("gambe").value){
		case "1": document.getElementById("etichetta5").innerHTML = "FRZ+5 INT+5 RAG+100";
							break;
		case "2":	document.getElementById("etichetta5").innerHTML ="FRZ+10 INT+25 RAG+150";
							break;
		case "3":	document.getElementById("etichetta5").innerHTML ="FRZ+15 INT+45 RAG+200";
							break;
		case "4": document.getElementById("etichetta5").innerHTML ="FRZ+50 INT+35 RAG+125";
							break;
		case "5": document.getElementById("etichetta5").innerHTML ="FRZ+100 INT+25 RAG+80";
							break;
	}
}

function applica(){
//////////////////////// modifiche alla TESTA
	switch(document.getElementById("testa").value){
		case "1":	document.getElementById("part1").src = "img/gundam/testaB.png";
							valTestaAttacco = 10;
							valTestaDifesa = 0;
							valTestaForza = 0;
							valTestaIntel = 20;
							valTestaRaggio = 5;
							document.getElementById("attaccoMtesta").innerHTML =parseInt(valTestaAttacco);
							document.getElementById("difesaMtesta").innerHTML =parseInt(valTestaDifesa);
							document.getElementById("forzaMtesta").innerHTML =parseInt(valTestaForza);
							document.getElementById("intelMtesta").innerHTML =parseInt(valTestaIntel);
							document.getElementById("raggioMtesta").innerHTML =parseInt(valTestaRaggio);
							break;
		case "2":	document.getElementById("part1").src = "img/gundam/testaR.png";
							valTestaAttacco = 15;
							valTestaDifesa = 0;
							valTestaForza = 0;
							valTestaIntel = 25;
							valTestaRaggio = 15;
							document.getElementById("attaccoMtesta").innerHTML =parseInt(valTestaAttacco);
							document.getElementById("difesaMtesta").innerHTML =parseInt(valTestaDifesa);
							document.getElementById("forzaMtesta").innerHTML =parseInt(valTestaForza);
							document.getElementById("intelMtesta").innerHTML =parseInt(valTestaIntel);
							document.getElementById("raggioMtesta").innerHTML =parseInt(valTestaRaggio);
							break;
		case "3":	document.getElementById("part1").src = "img/gundam/testaN.png";
							valTestaAttacco = 20;
							valTestaDifesa = 0;
							valTestaForza = 0;
							valTestaIntel = 70;
							valTestaRaggio = 35;
							document.getElementById("attaccoMtesta").innerHTML =parseInt(valTestaAttacco);
							document.getElementById("difesaMtesta").innerHTML =parseInt(valTestaDifesa);
							document.getElementById("forzaMtesta").innerHTML =parseInt(valTestaForza);
							document.getElementById("intelMtesta").innerHTML =parseInt(valTestaIntel);
							document.getElementById("raggioMtesta").innerHTML =parseInt(valTestaRaggio);
							break;
		case "4": document.getElementById("part1").src = "img/gundam/testaV.png";
							valTestaAttacco = 30;
							valTestaDifesa = 0;
							valTestaForza = 0;
							valTestaIntel = 50;
							valTestaRaggio = 15;
							document.getElementById("attaccoMtesta").innerHTML =parseInt(valTestaAttacco);
							document.getElementById("difesaMtesta").innerHTML =parseInt(valTestaDifesa);
							document.getElementById("forzaMtesta").innerHTML =parseInt(valTestaForza);
							document.getElementById("intelMtesta").innerHTML =parseInt(valTestaIntel);
							document.getElementById("raggioMtesta").innerHTML =parseInt(valTestaRaggio);
							break;
		case "5":	document.getElementById("part1").src = "img/gundam/testaO.png";
							valTestaAttacco = 50;
							valTestaDifesa = 0;
							valTestaForza = 0;
							valTestaIntel = 40;
							valTestaRaggio = -5;
							document.getElementById("attaccoMtesta").innerHTML =parseInt(valTestaAttacco);
							document.getElementById("difesaMtesta").innerHTML =parseInt(valTestaDifesa);
							document.getElementById("forzaMtesta").innerHTML =parseInt(valTestaForza);
							document.getElementById("intelMtesta").innerHTML =parseInt(valTestaIntel);
							document.getElementById("raggioMtesta").innerHTML =parseInt(valTestaRaggio);
							break;
		}
//////////////////////// modifiche al BUSTO
	switch(document.getElementById("busto").value){
		case "1":	document.getElementById("part2").src = "img/gundam/corpoB.png";
							valBustoAttacco = 5;
							valBustoDifesa = 50;
							valBustoForza = 0;
							valBustoIntel = 0;
							valBustoRaggio = -20;
							document.getElementById("attaccoMbusto").innerHTML =parseInt(valBustoAttacco);
							document.getElementById("difesaMbusto").innerHTML =parseInt(valBustoDifesa);
							document.getElementById("forzaMbusto").innerHTML =parseInt(valBustoForza);
							document.getElementById("intelMbusto").innerHTML =parseInt(valBustoIntel);
							document.getElementById("raggioMbusto").innerHTML =parseInt(valBustoRaggio);
							break;
		case "2":	document.getElementById("part2").src = "img/gundam/corpoR.png";
							valBustoAttacco = 5;
							valBustoDifesa = 60;
							valBustoForza = 0;
							valBustoIntel = 0;
							valBustoRaggio = -20;
							document.getElementById("attaccoMbusto").innerHTML =parseInt(valBustoAttacco);
							document.getElementById("difesaMbusto").innerHTML =parseInt(valBustoDifesa);
							document.getElementById("forzaMbusto").innerHTML =parseInt(valBustoForza);
							document.getElementById("intelMbusto").innerHTML =parseInt(valBustoIntel);
							document.getElementById("raggioMbusto").innerHTML =parseInt(valBustoRaggio);
							break;
		case "3":	document.getElementById("part2").src = "img/gundam/corpoN.png";
							valBustoAttacco = 5;
							valBustoDifesa = 70;
							valBustoForza = 0;
							valBustoIntel = 0;
							valBustoRaggio = -30;
							document.getElementById("attaccoMbusto").innerHTML =parseInt(valBustoAttacco);
							document.getElementById("difesaMbusto").innerHTML =parseInt(valBustoDifesa);
							document.getElementById("forzaMbusto").innerHTML =parseInt(valBustoForza);
							document.getElementById("intelMbusto").innerHTML =parseInt(valBustoIntel);
							document.getElementById("raggioMbusto").innerHTML =parseInt(valBustoRaggio);
							break;
		case "4": document.getElementById("part2").src = "img/gundam/corpoV.png";
							valBustoAttacco = 5;
							valBustoDifesa = 100;
							valBustoForza = 0;
							valBustoIntel = 0;
							valBustoRaggio = -40;
							document.getElementById("attaccoMbusto").innerHTML =parseInt(valBustoAttacco);
							document.getElementById("difesaMbusto").innerHTML =parseInt(valBustoDifesa);
							document.getElementById("forzaMbusto").innerHTML =parseInt(valBustoForza);
							document.getElementById("intelMbusto").innerHTML =parseInt(valBustoIntel);
							document.getElementById("raggioMbusto").innerHTML =parseInt(valBustoRaggio);
							break;
		case "5":	document.getElementById("part2").src = "img/gundam/corpoO.png";
							valBustoAttacco = 5;
							valBustoDifesa = 150;
							valBustoForza = 0;
							valBustoIntel = 0;
							valBustoRaggio = -20;
							document.getElementById("attaccoMbusto").innerHTML =parseInt(valBustoAttacco);
							document.getElementById("difesaMbusto").innerHTML =parseInt(valBustoDifesa);
							document.getElementById("forzaMbusto").innerHTML =parseInt(valBustoForza);
							document.getElementById("intelMbusto").innerHTML =parseInt(valBustoIntel);
							document.getElementById("raggioMbusto").innerHTML =parseInt(valBustoRaggio);
							break;
		}
		//////////////////////// modifiche al BRACCIO DX
			switch(document.getElementById("braccioD").value){
				case "1":	document.getElementById("part3").src = "img/gundam/manoDB.png";
									valBraccioDXAttacco = 5;
									valBraccioDXDifesa = 5;
									valBraccioDXForza = 0;
									valBraccioDXIntel = 0;
									valBraccioDXRaggio = 5;
									document.getElementById("attaccoMbraccioDX").innerHTML =parseInt(valBraccioDXAttacco);
									document.getElementById("difesaMbraccioDX").innerHTML =parseInt(valBraccioDXDifesa);
									document.getElementById("forzaMbraccioDX").innerHTML =parseInt(valBraccioDXForza);
									document.getElementById("intelMbraccioDX").innerHTML =parseInt(valBraccioDXIntel);
									document.getElementById("raggioMbraccioDX").innerHTML =parseInt(valBraccioDXRaggio);
									break;
				case "2":	document.getElementById("part3").src = "img/gundam/manoDR.png";
									valBraccioDXAttacco = 5;
									valBraccioDXDifesa = 25;
									valBraccioDXForza = 0;
									valBraccioDXIntel = 0;
									valBraccioDXRaggio = 5;
									document.getElementById("attaccoMbraccioDX").innerHTML =parseInt(valBraccioDXAttacco);
									document.getElementById("difesaMbraccioDX").innerHTML =parseInt(valBraccioDXDifesa);
									document.getElementById("forzaMbraccioDX").innerHTML =parseInt(valBraccioDXForza);
									document.getElementById("intelMbraccioDX").innerHTML =parseInt(valBraccioDXIntel);
									document.getElementById("raggioMbraccioDX").innerHTML =parseInt(valBraccioDXRaggio);
									break;
				case "3":	document.getElementById("part3").src = "img/gundam/manoDN.png";
									valBraccioDXAttacco = 25;
									valBraccioDXDifesa = 55;
									valBraccioDXForza = 0;
									valBraccioDXIntel = 0;
									valBraccioDXRaggio = 5;
									document.getElementById("attaccoMbraccioDX").innerHTML =parseInt(valBraccioDXAttacco);
									document.getElementById("difesaMbraccioDX").innerHTML =parseInt(valBraccioDXDifesa);
									document.getElementById("forzaMbraccioDX").innerHTML =parseInt(valBraccioDXForza);
									document.getElementById("intelMbraccioDX").innerHTML =parseInt(valBraccioDXIntel);
									document.getElementById("raggioMbraccioDX").innerHTML =parseInt(valBraccioDXRaggio);
									break;
				case "4": document.getElementById("part3").src = "img/gundam/manoDV.png";
									valBraccioDXAttacco = 15;
									valBraccioDXDifesa = 75;
									valBraccioDXForza = 0;
									valBraccioDXIntel = 0;
									valBraccioDXRaggio = 15;
									document.getElementById("attaccoMbraccioDX").innerHTML =parseInt(valBraccioDXAttacco);
									document.getElementById("difesaMbraccioDX").innerHTML =parseInt(valBraccioDXDifesa);
									document.getElementById("forzaMbraccioDX").innerHTML =parseInt(valBraccioDXForza);
									document.getElementById("intelMbraccioDX").innerHTML =parseInt(valBraccioDXIntel);
									document.getElementById("raggioMbraccioDX").innerHTML =parseInt(valBraccioDXRaggio);
									break;
				case "5":	document.getElementById("part3").src = "img/gundam/manoDO.png";
									valBraccioDXAttacco = 15;
									valBraccioDXDifesa = 155;
									valBraccioDXForza = 0;
									valBraccioDXIntel = 0;
									valBraccioDXRaggio = 25;
									document.getElementById("attaccoMbraccioDX").innerHTML =parseInt(valBraccioDXAttacco);
									document.getElementById("difesaMbraccioDX").innerHTML =parseInt(valBraccioDXDifesa);
									document.getElementById("forzaMbraccioDX").innerHTML =parseInt(valBraccioDXForza);
									document.getElementById("intelMbraccioDX").innerHTML =parseInt(valBraccioDXIntel);
									document.getElementById("raggioMbraccioDX").innerHTML =parseInt(valBraccioDXRaggio);
									break;
	}
	//////////////////////// modifiche al BRACCIO SX
		switch(document.getElementById("braccioS").value){
			case "1":	document.getElementById("part4").src = "img/gundam/manoSB.png";
								valBraccioSXAttacco = 50;
								valBraccioSXDifesa = 0;
								valBraccioSXForza = 10;
								valBraccioSXIntel = 0;
								valBraccioSXRaggio = 0;
								document.getElementById("attaccoMbraccioSX").innerHTML =parseInt(valBraccioSXAttacco);
								document.getElementById("difesaMbraccioSX").innerHTML =parseInt(valBraccioSXDifesa);
								document.getElementById("forzaMbraccioSX").innerHTML =parseInt(valBraccioSXForza);
								document.getElementById("intelMbraccioSX").innerHTML =parseInt(valBraccioSXIntel);
								document.getElementById("raggioMbraccioSX").innerHTML =parseInt(valBraccioSXRaggio);
								break;
			case "2":	document.getElementById("part4").src = "img/gundam/manoSR.png";
								valBraccioSXAttacco = 50;
								valBraccioSXDifesa = 0;
								valBraccioSXForza = 50;
								valBraccioSXIntel = 0;
								valBraccioSXRaggio = 0;
								document.getElementById("attaccoMbraccioSX").innerHTML =parseInt(valBraccioSXAttacco);
								document.getElementById("difesaMbraccioSX").innerHTML =parseInt(valBraccioSXDifesa);
								document.getElementById("forzaMbraccioSX").innerHTML =parseInt(valBraccioSXForza);
								document.getElementById("intelMbraccioSX").innerHTML =parseInt(valBraccioSXIntel);
								document.getElementById("raggioMbraccioSX").innerHTML =parseInt(valBraccioSXRaggio);
								break;
			case "3":	document.getElementById("part4").src = "img/gundam/manoSN.png";
								valBraccioSXAttacco = 50;
								valBraccioSXDifesa = 0;
								valBraccioSXForza = 80;
								valBraccioSXIntel = 0;
								valBraccioSXRaggio = 0;
								document.getElementById("attaccoMbraccioSX").innerHTML =parseInt(valBraccioSXAttacco);
								document.getElementById("difesaMbraccioSX").innerHTML =parseInt(valBraccioSXDifesa);
								document.getElementById("forzaMbraccioSX").innerHTML =parseInt(valBraccioSXForza);
								document.getElementById("intelMbraccioSX").innerHTML =parseInt(valBraccioSXIntel);
								document.getElementById("raggioMbraccioSX").innerHTML =parseInt(valBraccioSXRaggio);
								break;
			case "4": document.getElementById("part4").src = "img/gundam/manoSV.png";
								valBraccioSXAttacco = 150;
								valBraccioSXDifesa = 0;
								valBraccioSXForza = 30;
								valBraccioSXIntel = 0;
								valBraccioSXRaggio = 0;
								document.getElementById("attaccoMbraccioSX").innerHTML =parseInt(valBraccioSXAttacco);
								document.getElementById("difesaMbraccioSX").innerHTML =parseInt(valBraccioSXDifesa);
								document.getElementById("forzaMbraccioSX").innerHTML =parseInt(valBraccioSXForza);
								document.getElementById("intelMbraccioSX").innerHTML =parseInt(valBraccioSXIntel);
								document.getElementById("raggioMbraccioSX").innerHTML =parseInt(valBraccioSXRaggio);
								break;
			case "5":	document.getElementById("part4").src = "img/gundam/manoSO.png";
								valBraccioSXAttacco = 250;
								valBraccioSXDifesa = 0;
								valBraccioSXForza = 20;
								valBraccioSXIntel = 0;
								valBraccioSXRaggio = 0;
								document.getElementById("attaccoMbraccioSX").innerHTML =parseInt(valBraccioSXAttacco);
								document.getElementById("difesaMbraccioSX").innerHTML =parseInt(valBraccioSXDifesa);
								document.getElementById("forzaMbraccioSX").innerHTML =parseInt(valBraccioSXForza);
								document.getElementById("intelMbraccioSX").innerHTML =parseInt(valBraccioSXIntel);
								document.getElementById("raggioMbraccioSX").innerHTML =parseInt(valBraccioSXRaggio);
								break;
}
//////////////////////// modifiche alle GAMBE
	switch(document.getElementById("gambe").value){
		case "1":	document.getElementById("part5").src = "img/gundam/gambeB.png";
							valGambeAttacco = 0;
							valGambeDifesa = 0;
							valGambeForza = 5;
							valGambeIntel = 5;
							valGambeRaggio = 100;
							document.getElementById("attaccoMgambe").innerHTML =parseInt(valGambeAttacco);
							document.getElementById("difesaMgambe").innerHTML =parseInt(valGambeDifesa);
							document.getElementById("forzaMgambe").innerHTML =parseInt(valGambeForza);
							document.getElementById("intelMgambe").innerHTML =parseInt(valGambeIntel);
							document.getElementById("raggioMgambe").innerHTML =parseInt(valGambeRaggio);
							break;
		case "2":	document.getElementById("part5").src = "img/gundam/gambeR.png";
							valGambeAttacco = 0;
							valGambeDifesa = 0;
							valGambeForza = 10;
							valGambeIntel = 25;
							valGambeRaggio = 150;
							document.getElementById("attaccoMgambe").innerHTML =parseInt(valGambeAttacco);
							document.getElementById("difesaMgambe").innerHTML =parseInt(valGambeDifesa);
							document.getElementById("forzaMgambe").innerHTML =parseInt(valGambeForza);
							document.getElementById("intelMgambe").innerHTML =parseInt(valGambeIntel);
							document.getElementById("raggioMgambe").innerHTML =parseInt(valGambeRaggio);
							break;
		case "3":	document.getElementById("part5").src = "img/gundam/gambeN.png";
							valGambeAttacco = 0;
							valGambeDifesa = 0;
							valGambeForza = 15;
							valGambeIntel = 45;
							valGambeRaggio = 200;
							document.getElementById("attaccoMgambe").innerHTML =parseInt(valGambeAttacco);
							document.getElementById("difesaMgambe").innerHTML =parseInt(valGambeDifesa);
							document.getElementById("forzaMgambe").innerHTML =parseInt(valGambeForza);
							document.getElementById("intelMgambe").innerHTML =parseInt(valGambeIntel);
							document.getElementById("raggioMgambe").innerHTML =parseInt(valGambeRaggio);
							break;
		case "4": document.getElementById("part5").src = "img/gundam/gambeV.png";
							valGambeAttacco = 0;
							valGambeDifesa = 0;
							valGambeForza = 50;
							valGambeIntel = 35;
							valGambeRaggio = 125;
							document.getElementById("attaccoMgambe").innerHTML =parseInt(valGambeAttacco);
							document.getElementById("difesaMgambe").innerHTML =parseInt(valGambeDifesa);
							document.getElementById("forzaMgambe").innerHTML =parseInt(valGambeForza);
							document.getElementById("intelMgambe").innerHTML =parseInt(valGambeIntel);
							document.getElementById("raggioMgambe").innerHTML =parseInt(valGambeRaggio);
							break;
		case "5":	document.getElementById("part5").src = "img/gundam/gambeO.png";
							valGambeAttacco = 0;
							valGambeDifesa = 0;
							valGambeForza = 100;
							valGambeIntel = 25;
							valGambeRaggio = 80;
							document.getElementById("attaccoMgambe").innerHTML =parseInt(valGambeAttacco);
							document.getElementById("difesaMgambe").innerHTML =parseInt(valGambeDifesa);
							document.getElementById("forzaMgambe").innerHTML =parseInt(valGambeForza);
							document.getElementById("intelMgambe").innerHTML =parseInt(valGambeIntel);
							document.getElementById("raggioMgambe").innerHTML =parseInt(valGambeRaggio);
							break;
    }
		valTotaleAttacco = base + valTestaAttacco + valBustoAttacco + valBraccioDXAttacco + valBraccioSXAttacco + valGambeAttacco;
		document.getElementById("attaccoTotale").innerHTML = valTotaleAttacco ;
		valTotaleDifesa = base + valTestaDifesa + valBustoDifesa + valBraccioDXDifesa + valBraccioSXDifesa + valGambeDifesa;
		document.getElementById("difesaTotale").innerHTML = valTotaleDifesa;
		valTotaleForza = base + valTestaForza + valBustoForza + valBraccioDXForza + valBraccioSXForza + valGambeForza;
		document.getElementById("forzaTotale").innerHTML = valTotaleForza ;
		valTotaleIntel = base + valTestaIntel + valBustoIntel + valBraccioDXIntel + valBraccioSXIntel + valGambeIntel;
		document.getElementById("intelTotale").innerHTML = valTotaleIntel;
		valTotaleRaggio = base + valTestaRaggio + valBustoRaggio + valBraccioDXRaggio + valBraccioSXRaggio + valGambeRaggio;
		document.getElementById("raggioTotale").innerHTML = valTotaleRaggio;

}

function abilita3(){
	if(energy < 100) {
		alert("energia insufficiente");
		return;
	}
	energy = 0;
		document.getElementById("progress-energia").style.width=0;
		document.getElementById("part1").src ="";
		document.getElementById("part2").src ="";
		document.getElementById("part3").src ="";
		document.getElementById("part4").src ="";
		document.getElementById("part5").src ="";
		document.getElementById("fiamma").src ="";
		document.getElementById("trasform").src ="img/e.png";
		document.getElementById("testa").disabled=true;
		document.getElementById("busto").disabled=true;
		document.getElementById("braccioD").disabled=true;
		document.getElementById("braccioS").disabled=true;
		document.getElementById("gambe").disabled=true;
		document.getElementById("skill1").disabled=true;
		document.getElementById("skill2").disabled=true;
		document.getElementById("center").style.opacity="1";
		azzera();
		document.getElementById("attaccoTotale").innerHTML = 999 ;
		document.getElementById("difesaTotale").innerHTML = 999;
		document.getElementById("forzaTotale").innerHTML = 999 ;
		document.getElementById("intelTotale").innerHTML = 999;
		document.getElementById("raggioTotale").innerHTML = 999;

}
function auraS(){
	//document.getElementById("fiamma").src ="img/gundam/fiammaVerde.png";
	var x = document.getElementById("attaccoTotale").innerHTML;
	var a = document.getElementById("fiamma");
	if (a.src.endsWith("png")) {
		a.src = "";
		document.getElementById("attaccoTotale").innerHTML = parseInt(x)-200;
	}
	else {
		a.src = "./img/gundam/fiammaVerde2.png";
		document.getElementById("attaccoTotale").innerHTML = parseInt(x)+200 ;
	}

}
function invisibile(){
	var a = document.getElementById("center");
if (a.style.opacity == "0.7") {
	a.style.opacity = "1";
} else {
	a.style.opacity="0.70";
}

}

function azzera(){
	document.getElementById("attaccoMtesta").innerHTML ="-";
	document.getElementById("difesaMtesta").innerHTML ="-";
	document.getElementById("forzaMtesta").innerHTML ="-";
	document.getElementById("intelMtesta").innerHTML ="-";
	document.getElementById("raggioMtesta").innerHTML ="-";
	document.getElementById("attaccoMbusto").innerHTML ="-";
	document.getElementById("difesaMbusto").innerHTML ="-";
	document.getElementById("forzaMbusto").innerHTML ="-";
	document.getElementById("intelMbusto").innerHTML ="-";
	document.getElementById("raggioMbusto").innerHTML ="-";
	document.getElementById("attaccoMbraccioDX").innerHTML ="-";
	document.getElementById("difesaMbraccioDX").innerHTML ="-";
	document.getElementById("forzaMbraccioDX").innerHTML ="-";
	document.getElementById("intelMbraccioDX").innerHTML ="-";
	document.getElementById("raggioMbraccioDX").innerHTML ="-";
	document.getElementById("attaccoMbraccioSX").innerHTML = "-";
	document.getElementById("difesaMbraccioSX").innerHTML ="-";
	document.getElementById("forzaMbraccioSX").innerHTML ="-";
	document.getElementById("intelMbraccioSX").innerHTML ="-";
	document.getElementById("raggioMbraccioSX").innerHTML ="-";
	document.getElementById("attaccoMgambe").innerHTML ="-";
	document.getElementById("difesaMgambe").innerHTML ="-";
	document.getElementById("forzaMgambe").innerHTML ="-";
	document.getElementById("intelMgambe").innerHTML ="-";
	document.getElementById("raggioMgambe").innerHTML ="-";
	document.getElementById("attaccoTotale").innerHTML = base ;
	document.getElementById("difesaTotale").innerHTML = base;
	document.getElementById("forzaTotale").innerHTML = base ;
	document.getElementById("intelTotale").innerHTML = base;
	document.getElementById("raggioTotale").innerHTML = base;
	document.getElementById("etichetta1").innerHTML = "---";
	document.getElementById("etichetta2").innerHTML = "---";
	document.getElementById("etichetta3").innerHTML = "---";
	document.getElementById("etichetta4").innerHTML = "---";
	document.getElementById("etichetta5").innerHTML = "---";

}
function reset(){
	document.getElementById("part1").src ="img/gundam/testa.png";
  document.getElementById("testa").value="0";
	document.getElementById("part2").src ="img/gundam/corpo.png";
	document.getElementById("busto").value="0";
	document.getElementById("part3").src ="img/gundam/manoD.png";
	document.getElementById("braccioD").value="0";
	document.getElementById("part4").src ="img/gundam/manoS.png";
	document.getElementById("braccioS").value="0";
	document.getElementById("part5").src ="img/gundam/gambe.png";
	document.getElementById("gambe").value="0";
	document.getElementById("fiamma").src ="";
	document.getElementById("trasform").src ="";
	document.getElementById("center").style.opacity="1";
	document.getElementById("testa").disabled=false;
	document.getElementById("busto").disabled=false;
	document.getElementById("braccioD").disabled=false;
	document.getElementById("braccioS").disabled=false;
	document.getElementById("gambe").disabled=false;
	document.getElementById("skill1").disabled=false;
	document.getElementById("skill2").disabled=false;
azzera();
document.getElementById("progress-energia").style.width=100+'%';
energy = 100;
}

function newC(){
		document.getElementById("newConf").style.display="inline";
		document.getElementById("apriConf").style.display="none";
}

function apriC(){
		document.getElementById("apriConf").style.display="inline";
		document.getElementById("newConf").style.display="none";
}
