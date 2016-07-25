var ItemTotal = 0;
var PrixTotal = 0;
var qte1 = 0;
var qte2 = 0;

function ajouter()
{
	qte1 = parseInt(document.getElementById("qte1").value);
	qte2 = parseInt(document.getElementById("qte2").value);
	
	if( (qte1 >= 1) )
	{
		document.getElementById("effectuePaiement").disabled=false;
		document.getElementById("errorBox").innerHTML = "&nbsp;";
	}
	else if( (qte1 < 1) )
	{
		document.getElementById("errorBox").innerHTML = "La quantité ne peut pas être nulle ou négative.";
		document.getElementById("effectuePaiement").disabled=true;
		return false;
	}
	else
	{
		document.getElementById("errorBox").innerHTML = "Veuillez entrer un chiffre.";
		document.getElementById("effectuePaiement").disabled=true;
		return false;
	}
	
	if( (qte2 >= 1) )
	{
		document.getElementById("effectuePaiement").disabled=false;
		document.getElementById("errorBox").innerHTML = "&nbsp;";
	}
	else if( (qte2 < 1) )
	{
		document.getElementById("errorBox").innerHTML = "La quantité ne peut pas être nulle ou négative.";
		document.getElementById("effectuePaiement").disabled=true;
		return false;
	}
	else
	{
		document.getElementById("errorBox").innerHTML = "Veuillez entrer un chiffre.";
		document.getElementById("effectuePaiement").disabled=true;
		return false;
	}
	
	ItemTotal = qte1 + qte2;
	document.getElementById("nombreItem").value=ItemTotal;
}

function Update()
{
	var prix1 = parseFloat(document.getElementById("Prix1").textContent);
	var soustotal1 = qte1 * prix1;
	
	var prix2 = parseFloat(document.getElementById("Prix2").textContent);
	var soustotal2 = qte2 * prix2;

	
	document.getElementById("SousTotal1").innerHTML=soustotal1;
	document.getElementById("SousTotal2").innerHTML=soustotal2;

	
	document.getElementById("PrixTotal").value=soustotal1+soustotal2 + "$";
}