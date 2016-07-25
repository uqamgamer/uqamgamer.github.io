var ItemTotal = 0;
var PrixTotal = 0;
var qte1 = 0;
var qte2 = 0;
var qte3 = 0;

function ajouter()
{
	qte1 = parseInt(document.getElementById("qte1").value);
	qte2 = parseInt(document.getElementById("qte2").value);
	qte3 = parseInt(document.getElementById("qte3").value);
	
	ItemTotal = qte1 + qte2 + qte3;
	document.getElementById("nombreItem").value=ItemTotal;
}

function Update()
{
	var prix1 = parseFloat(document.getElementById("Prix1").textContent);
	var soustotal1 = qte1 * prix1;
	
	var prix2 = parseFloat(document.getElementById("Prix2").textContent);
	var soustotal2 = qte2 * prix2;
	
	var prix3 = parseFloat(document.getElementById("Prix3").textContent);
	var soustotal3 = qte3 * prix3;

	
	document.getElementById("SousTotal1").innerHTML=soustotal1;
	document.getElementById("SousTotal2").innerHTML=soustotal2;
	document.getElementById("SousTotal3").innerHTML=soustotal3;

	
	document.getElementById("PrixTotal").value=soustotal1+soustotal2+soustotal3 + "$";
}