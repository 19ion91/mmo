function cambiaT(){
	if(document.getElementById("testa").value == "1"){
		document.getElementById("part1").src = "img/gundam/testaB.png"
	}else if(document.getElementById("testa").value=="2"){
		document.getElementById("part1").src = "img/gundam/testaR.png"
	}else if(document.getElementById("testa").value=="3"){
		document.getElementById("part1").src = "img/gundam/testaN.png"
	}else if(document.getElementById("testa").value=="4"){
		document.getElementById("part1").src = "img/gundam/testaV.png"
	}else if(document.getElementById("testa").value=="5"){
		document.getElementById("part1").src = "img/gundam/testaO.png"
	}
}
function cambiaB(){
	switch(document.getElementById("busto").value){
		case "1":	document.getElementById("part2").src = "img/gundam/corpoB.png"
		break;
		case "2":	document.getElementById("part2").src = "img/gundam/corpoR.png"
		break;
		case "3":	document.getElementById("part2").src = "img/gundam/corpoN.png"
		break;
		case "4":	document.getElementById("part2").src = "img/gundam/corpoV.png"
		break;
		case "5":	document.getElementById("part2").src = "img/gundam/corpoO.png"
		break;
		default: break;
	}
}
function cambiaMD(){
	switch(document.getElementById("braccioD").value){
		case "1":	document.getElementById("part3").src = "img/gundam/manoDB.png"
		break;
		case "2":	document.getElementById("part3").src = "img/gundam/manoDR.png"
		break;
		case "3":	document.getElementById("part3").src = "img/gundam/manoDN.png"
		break;
		case "4":	document.getElementById("part3").src = "img/gundam/manoDV.png"
		break;
		case "5":	document.getElementById("part3").src = "img/gundam/manoDO.png"
		break;
		default: break;
	}
}
function cambiaMS(){
	switch(document.getElementById("braccioS").value){
		case "1":	document.getElementById("part4").src = "img/gundam/manoSB.png"
		break;
		case "2":	document.getElementById("part4").src = "img/gundam/manoSR.png"
		break;
		case "3":	document.getElementById("part4").src = "img/gundam/manoSN.png"
		break;
		case "4":	document.getElementById("part4").src = "img/gundam/manoSV.png"
		break;
		case "5":	document.getElementById("part4").src = "img/gundam/manoSO.png"
		break;
		default: break;
	}
}

function cambiaG(){
	switch(document.getElementById("gambe").value){
		case "1":	document.getElementById("part5").src = "img/gundam/gambeB.png"
		break;
		case "2":	document.getElementById("part5").src = "img/gundam/gambeR.png"
		break;
		case "3":	document.getElementById("part5").src = "img/gundam/gambeN.png"
		break;
		case "4":	document.getElementById("part5").src = "img/gundam/gambeV.png"
		break;
		case "5":	document.getElementById("part5").src = "img/gundam/gambeO.png"
		break;
		default: break;
	}
}
