var description = {
	"testa" : "L'intelligenza aumenta di v1 unita",
	"busto" : "La forza aumenta di v1 unita",
	"braccioS" : "La forza aumenta di v1 unita",
	"braccioD" : "La diffesa aumenta di v1 unita",
	"gambe" : "Il raggio aumenta di v1 unita",
}
var colore = {
	"1" : "blue",
	"2" : "red",
	"3" : "black",
	"4" : "green",
	"5" : "orange"
}
function cambiaT(){
	if(document.getElementById("testa").value == "1"){
		document.getElementById("part1").src = "img/gundam/testaB.png";
	}else if(document.getElementById("testa").value=="2"){
		document.getElementById("part1").src = "img/gundam/testaR.png";
	}else if(document.getElementById("testa").value=="3"){
		document.getElementById("part1").src = "img/gundam/testaN.png";
	}else if(document.getElementById("testa").value=="4"){
		document.getElementById("part1").src = "img/gundam/testaV.png";
	}else if(document.getElementById("testa").value=="5"){
		document.getElementById("part1").src = "img/gundam/testaO.png";
	}
}
function cambiaB(){
	switch(document.getElementById("busto").value){
		case "1":	document.getElementById("part2").src = "img/gundam/corpoB.png";
		break;
		case "2":	document.getElementById("part2").src = "img/gundam/corpoR.png";
		break;
		case "3":	document.getElementById("part2").src = "img/gundam/corpoN.png";
		break;
		case "4":	document.getElementById("part2").src = "img/gundam/corpoV.png";
		break;
		case "5":	document.getElementById("part2").src = "img/gundam/corpoO.png";
		break;
	}
}
function cambiaMD(){
	switch(document.getElementById("braccioD").value){
		case "1":	document.getElementById("part3").src = "img/gundam/manoDB.png";
		break;
		case "2":	document.getElementById("part3").src = "img/gundam/manoDR.png";
		break;
		case "3":	document.getElementById("part3").src = "img/gundam/manoDN.png";
		break;
		case "4":	document.getElementById("part3").src = "img/gundam/manoDV.png";
		break;
		case "5":	document.getElementById("part3").src = "img/gundam/manoDO.png";
		break;
	}
}

function cambiaMS(){
	switch(document.getElementById("braccioS").value){
		case "1":	document.getElementById("part4").src = "img/gundam/manoSB.png";
		break;
		case "2":	document.getElementById("part4").src = "img/gundam/manoSR.png";
		break;
		case "3":	document.getElementById("part4").src = "img/gundam/manoSN.png";
		break;
		case "4":	document.getElementById("part4").src = "img/gundam/manoSV.png";
		break;
		case "5":	document.getElementById("part4").src = "img/gundam/manoSO.png";
		break;
	}
}

function cambiaG(){
	switch(document.getElementById("gambe").value){
		case "1":	document.getElementById("part5").src = "img/gundam/gambeB.png";
		break;
		case "2":	document.getElementById("part5").src = "img/gundam/gambeR.png";
		break;
		case "3":	document.getElementById("part5").src = "img/gundam/gambeN.png";
		break;
		case "4":	document.getElementById("part5").src = "img/gundam/gambeV.png";
		break;
		case "5":	document.getElementById("part5").src = "img/gundam/gambeO.png";
		break;
	}
}
function abilita3(){
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
}
function auraS(){
	var a = document.getElementById("fiamma")
	if (a.src.endsWith("png")) {
		a.src = "";
	}
	else {
		a.src = "./img/gundam/fiammaVerde2.png";
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
function reset(){
	console.log("dsfs");
	var opt = $("select");
	var j;
	for(j=0;j<opt.length;j++)
		opt[j].value="0"
	$("#desc").slideUp();
	$("#radioN")[0].checked = false;
	$("#radioL")[0].checked = false;
	$("#secNumber")[0].value = "3";
	var tab = $(".rightTd");
	for (j = 0; j < tab.length; j++) {
		tab[j].innerHTML = "200";
	}
	console.log("aksj");
}


$(window).on('load', function () {
    $("option.atr").hover(function() {
		var desc = $("#desc");
		desc.finish()
        desc[0].innerHTML = description[$(this).parent().attr("id")].replace("v1",parseInt([$(this)[0].value])*25);
		desc.css("background-color", colore[$(this)[0].value]);
		desc.slideDown(500);
    }, function() {
		var desc = $("#desc");
		desc.finish()
		$("div#desc")[0].innerHTML = ""
		$("#desc").slideUp(20);
    });
	console.log("sdfs");
	reset();
	console.log("sada");
});
