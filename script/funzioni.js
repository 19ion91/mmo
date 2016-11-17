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
	document.getElementById("inv").style.opacity="1";
	document.getElementById("testa").disabled=false;
	document.getElementById("busto").disabled=false;
	document.getElementById("braccioD").disabled=false;
	document.getElementById("braccioS").disabled=false;
	document.getElementById("gambe").disabled=false;
	document.getElementById("skill1").disabled=false;
	document.getElementById("skill2").disabled=false;
}


(function($) {
    $(document).ready(function() {
        $("option.atr").hover(function() {
            console.log($(this)[0].value);
            $("div#desc").text = $(this)[0].value;
        }, function() {
            console.log("esce");
            $("div#desc").text = "Qui ci va la descrizione."
        });
    });
    $(window).load(function() {
        console.log('load');
        setSettings();
    });
    $(window).resize(function() {
        console.log('resize');
    });
})(window.jQuery);
