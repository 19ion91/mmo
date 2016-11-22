var colore = ["", "B", "R", "N", "V", "O"];
var energia = 100;
var dizionario = {
	testa : {
		"valori": [
			{ "ATK":  0, "DIF": 0, "FRZ": 0, "INT":  0, "RAG" :  0},
			{ "ATK": 10, "DIF": 0, "FRZ": 0, "INT": 20, "RAG" :  5},
			{ "ATK": 15, "DIF": 0, "FRZ": 0, "INT": 25, "RAG" : 15},
			{ "ATK": 20, "DIF": 0, "FRZ": 0, "INT": 70, "RAG" : 35},
			{ "ATK": 30, "DIF": 0, "FRZ": 0, "INT": 50, "RAG" : 15},
			{ "ATK": 50, "DIF": 0, "FRZ": 0, "INT": 40, "RAG" : -5}
		],
		"energy": 20,
		"diff_energ": 0,
		"parte" : 1
	},
	busto : {
		"valori": [
			{ "ATK": 0, "DIF":   0, "FRZ": 0, "INT": 0, "RAG" :   0},
			{ "ATK": 5, "DIF":  50, "FRZ": 0, "INT": 0, "RAG" : -20},
			{ "ATK": 5, "DIF":  60, "FRZ": 0, "INT": 0, "RAG" : -20},
			{ "ATK": 5, "DIF":  70, "FRZ": 0, "INT": 0, "RAG" : -30},
			{ "ATK": 5, "DIF": 100, "FRZ": 0, "INT": 0, "RAG" : -40},
			{ "ATK": 5, "DIF": 150, "FRZ": 0, "INT": 0, "RAG" : -20}
		],
		"energy": 35,
		"diff_energ": 0,
		"parte" : 2
	},
	braccioD : {
		"valori": [
			{ "ATK":  0, "DIF":   0, "FRZ": 0, "INT": 0, "RAG" :  0},
			{ "ATK":  5, "DIF":   5, "FRZ": 0, "INT": 0, "RAG" :  5},
			{ "ATK":  5, "DIF":  25, "FRZ": 0, "INT": 0, "RAG" :  5},
			{ "ATK": 25, "DIF":  55, "FRZ": 0, "INT": 0, "RAG" :  5},
			{ "ATK": 15, "DIF":  75, "FRZ": 0, "INT": 0, "RAG" : 15},
			{ "ATK": 15, "DIF": 155, "FRZ": 0, "INT": 0, "RAG" : 25}
		],
		"energy": 15,
		"diff_energ": 0,
		"parte" : 3
	},
	braccioS : {
		"valori": [
			{ "ATK":   0, "DIF": 0, "FRZ":  0, "INT": 0, "RAG" : 0},
			{ "ATK":  50, "DIF": 0, "FRZ": 10, "INT": 0, "RAG" : 0},
			{ "ATK":  50, "DIF": 0, "FRZ": 50, "INT": 0, "RAG" : 0},
			{ "ATK":  50, "DIF": 0, "FRZ": 80, "INT": 0, "RAG" : 0},
			{ "ATK": 150, "DIF": 0, "FRZ": 30, "INT": 0, "RAG" : 0},
			{ "ATK": 250, "DIF": 0, "FRZ": 20, "INT": 0, "RAG" : 0},
		],
		"energy": 30,
		"diff_energ": 0,
		"parte" : 4
	},
	gambe : {
		"valori": [
			{ "ATK":   0, "DIF": 0, "FRZ": 0, "INT":  0, "RAG" :   0},
			{ "ATK":   5, "DIF": 0, "FRZ": 0, "INT":  5, "RAG" : 100},
			{ "ATK":  10, "DIF": 0, "FRZ": 0, "INT": 25, "RAG" : 150},
			{ "ATK":  15, "DIF": 0, "FRZ": 0, "INT": 45, "RAG" : 200},
			{ "ATK":  50, "DIF": 0, "FRZ": 0, "INT": 35, "RAG" : 125},
			{ "ATK": 100, "DIF": 0, "FRZ": 0, "INT": 25, "RAG" :  80}
		],
		"energy": 50,
		"diff_energ": 0,
		"parte" : 5
	},
	getDesc : function (id, index) {
		var str = "", op;
		var l = this[id].valori[index];
		for (op in l)
			if (l[op] != 0) {
				str += op + (l[op]<0?'':'+') + l[op] + " ";
			}
		if (str.length == 0) {
			return "---";
		}
		return str.trim();
	},
	updateTable : function (id, index) {
		for (let r of $(".rightTd")) {
			if (r.id.includes(id)) {
				var l = this[id].valori[index];
				for (op in l)
					if (l[op] != 0 && r.id.startsWith(op[0].toLowerCase())){
						r.innerHTML = l[op];
					}
					else if (r.id.startsWith(op[0].toLowerCase())) {
						r.innerHTML = "-";
					}
			}
		}
	}
};

function abilita3(){
	var prog = $("#progress-energia");
	if(energia < 100) {
		alert("Energia insufficiente!");
		return false;
	}
	energia = 0;
	prog.width(energia + "%");
	for (let p of $("img[id^="+"part"+"]"))
		p.src = "";
	document.getElementById("fiamma").src ="";
	document.getElementById("trasform").src ="img/e.png";
	for (let s of $("div[class=partList] select"))
		s.disabled = true;
	document.getElementById("skill1").disabled=true;
	document.getElementById("skill2").disabled=true;
	document.getElementById("skill3").disabled=true;
	document.getElementById("center").style.opacity="1";
	for (let t of $(".totale"))
		t.innerHTML = "999";
	$("#newC")[0].checked = false;
	$("#loadC")[0].checked = false;
	$("#newC")[0].disabled = true;
	$("#loadC")[0].disabled = true;
	var time = parseInt(document.trasformF.time.value);
	$("#timer").text(""+ time + " sec...");
	$("#timer").slideDown();
	setTimer(time);
	return false;
}

function setTimer(i) {
	setTimeout(function () {
		$("#timer").text("" + (i-1) + " sec...");
		if (i != 1) {
			setTimer(i-1);
		} else {
			reset();
			document.trasformF.time.value = "";
			$("#timer").slideUp();
		}
	},1000);
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

function reset(){
	for (let o of $("div[class=partList] select")) {
		o.disabled = false;
		o.value = '0';
		$("#"+o.id).trigger("change");
	}
	$("#newConfDiv").slideUp();
	$("#apriConf").slideUp();
	document.getElementById("fiamma").src ="";
	document.getElementById("trasform").src ="";
	document.getElementById("center").style.opacity="1";
	document.getElementById("skill1").disabled=false;
	document.getElementById("skill2").disabled=false;
	document.getElementById("skill3").disabled=false;
	$("#newC")[0].disabled = false;
	$("#loadC")[0].disabled = false;
	$("#newC")[0].checked = false;
	$("#loadC")[0].checked = false;
	$("#nomeConf").val("");
}

function newC(){
	$("#apriConf").slideUp();
	$("#newConfDiv").slideDown();
}

function apriC(){
	$("#newConfDiv").slideUp();
	$("select[id=confList] option").remove();
	var op = "<option value=nome>nome</option>"
	$("#confList").append('<option value="nessuna">')
	for (var i = 0; i < localStorage.length; i++) {
		var nome = localStorage.key(i);
		$("#confList").append(op.split("nome").join(nome));
	}
	if (localStorage.length == 0) {
		$("#notification").text("Non ci sono configurazioni salvate.");
		$("#notification").slideDown(600);
		setTimeout(function () {
			$("#notification").slideUp(600);
			},3500);
	} else {
		$("#apriConf").slideDown();
	}
}

function putC() {
	var nome = document.myForm.confList.value;
	if (nome == "nessuna") {
		return;
	}
	var conf = JSON.parse(localStorage.getItem(nome));
	energia = 100;
	for (let o of $("div[class=partList] select")) {
		o.value = conf[o.id];
		dizionario[o.id].diff_energ = 0;
		$("#"+o.id).trigger("change");
	}
}
$(window).on('load', function () {
	$("div[class=partList] select").change(this, changePart);
	$("#newC").on("change", newC);
	$("#loadC").on("change", apriC);
	$("#confList").on("change", putC)
	reset();
	rigeneraEnergia();
});

function rigeneraEnergia() {
	setTimeout(function () {
		if (energia < 97) {
			energia +=3;
		} else {
			energia = 100;
		}
		$("#progress-energia").width(energia + "%");
		rigeneraEnergia();
	},1000);
}
function updateTotali() {
	for (let t of $(".totale")) {
		var tot = 0;
		for (let r of $('td[id^='+t.id.slice(0,3)+']')) {
			if (! isNaN(r.innerHTML) && r != t) {
				tot += parseInt(r.innerHTML);
			}
		}
		if (t.id == "attaccoTotale" && $("#fiamma")[0].src.endsWith(".png")) {
			tot += 200;
		}
		t.innerHTML = tot;
	}
}
function changePart(e) {
	var parte = e.target.id;
	var valore = e.target.value;
	var prog = $("#progress-energia");
	if (valore == 0) {
		if (dizionario[parte].diff_energ != 0){
			energia += dizionario[parte].diff_energ;
			dizionario[parte].diff_energ = 0;
		}
	}
	else if(dizionario[parte].diff_energ == 0) {
			if (energia < dizionario[parte].energy) {
				alert("Energia insufficiente!");
				e.target.value = "0";
				return;
			}
			else {
				energia -= dizionario[parte].energy;
				dizionario[parte].diff_energ = dizionario[parte].energy;
			}
		}
	energia = (energia > 100 ? 100 : energia);
	prog.width(energia + "%");
	var img = "./img/gundam/" + parte + colore[valore] + ".png";
	img = img.replace("busto", "corpo");
	img = img.replace("braccio", "mano");
	$("#etichetta"+dizionario[parte].parte).text(dizionario.getDesc(parte, parseInt(valore)));
	$("#part"+dizionario[parte].parte).attr("src", img);
	dizionario.updateTable(parte, parseInt(valore));
	updateTotali();
}

function saveConf() {
	var nome = document.myForm.nomeConf.value;
	var valori = ["{"];
	for (let o of $("div[class=partList] select")) {
		valori.push('"' + o.id + '":"' + o.value + '",');
	}
	valori = valori.join("");
	valori = valori.slice(0, -1) + "}";
	localStorage.setItem(nome, valori);
	$("#notification").text("La configurazione è stata salvata con successo.");
	$("#notification").slideDown(600);
	setTimeout(function () {
		$("#notification").slideUp(600);
	},3500);
	reset();
	return false;
}
