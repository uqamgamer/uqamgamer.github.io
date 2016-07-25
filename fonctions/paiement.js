function paiementAdresse()
{
	var postalRegex = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
	var fname = document.paieAdresseForm.prenom.value;
	var lname = document.paieAdresseForm.nom.value;
	var fadresseliv = document.paieAdresseForm.adresseLiv.value;
	
	var fcity = document.paieAdresseForm.ville.value;
	var fprovince = document.paieAdresseForm.province.value;
	var fcountry = document.paieAdresseForm.pays.value;
	var fpostal = document.paieAdresseForm.codePostal.value;
	
	if( lname.length < 3 )
	{
		document.paieAdresseForm.nom.focus() ;
		document.getElementById("errorBox").innerHTML = "Votre nom doit contenir au moins 3 caractères.";
		return false;
	}
	if( fname.length < 3 )
	{
		document.paieAdresseForm.prenom.focus() ;
		document.getElementById("errorBox").innerHTML = "Votre prénom doit contenir au moins 3 caractères.";
		return false;
	}
	
	if( fadresseliv == "" )
	{
		document.paieAdresseForm.adresseLiv.focus() ;
		document.getElementById("errorBox").innerHTML = "L'adresse de livraison ne peut pas être vide.";
		return false;
	}
	if( fcity == "" )
	{
		document.paieAdresseForm.ville.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Ville ne peut pas être vide.";
		return false;
	}
	if( fprovince == "" )
	{
		document.paieAdresseForm.province.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Province ne peut pas être vide.";
		return false;
	}
	if( fcountry == "" )
	{
		document.paieAdresseForm.pays.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Pays ne peut pas être vide.";
		return false;
	}
	
	if(!postalRegex.test(fpostal))
	{
		document.paieAdresseForm.codePostal.focus();
		document.getElementById("errorBox").innerHTML = "Votre code postal doit suivre cette format : A1B2C3";
		return false;
	}
	else
	{
		document.getElementById("errorBox").innerHTML = "&nbsp;";
	}

}

function paiementOption()
{
	var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
	var foptionCC = document.paieForm.optionCC.value;
	var femail = document.paieForm.email.value;
	var fnumeroCC = document.paieForm.numeroCC.value;
	var fmonth = document.paieForm.mois.value;
	var fday = document.paieForm.jour.value;
	var fyear = document.paieForm.annee.value;
	var fCVV = document.paieForm.CVV.value;		
	
	if (foptionCC == "" )
	{
		document.paieForm.optionCC.focus();
		document.getElementById("errorBox2").innerHTML = "Veuillez choisir un option de paiement.";
		return false;
	}
	
	if (femail == "" )
	{
		document.paieForm.email.focus();
		document.getElementById("errorBox2").innerHTML = "Entrer votre adresse courriel.";
		return false;
	}
	else if(!emailRegex.test(femail))
	{
		document.paieForm.email.focus();
		document.getElementById("errorBox2").innerHTML = 
		"Votre adresse courriel n'est pas valide. Entrer votre adresse courriel valide.";
		return false;
	}
	
	if (fnumeroCC == "" )
	{
		document.paieForm.numeroCC.focus();
		document.getElementById("errorBox2").innerHTML = "Veuillez entrer votre numéro de carte de crédit.";
		return false;
	}
	
	if (fmonth == "") 
	{
		document.paieForm.mois.focus();
		document.getElementById("errorBox2").innerHTML = "Veuillez entrer la date d'échéance.";
		return false;
	}
	
	if (fday == "") 
	{
		document.paieForm.jour.focus();
		document.getElementById("errorBox2").innerHTML = "Veuillez entrer la date d'échéance.";
		return false;
	}
	
	if (fyear == "") 
	{
		document.paieForm.annee.focus();
		document.getElementById("errorBox2").innerHTML = "Veuillez entrer la date d'échéance.";
		return false;
	}
	
	if (fCVV == "") 
	{
		document.paieForm.CVV.focus();
		document.getElementById("errorBox2").innerHTML = "Le champ CVV est vide.";
		return false;
	}

	if(document.getElementById("confirmation").checked == false)
	{
		document.getElementById("errorBox2").innerHTML = "Veuillez cocher pour confirmer et terminer le processus du paiement.";
		return false;
	}
	else
	{
		document.getElementById("errorBox2").innerHTML = "&nbsp;";
		window.location.href = "paiementcomplete.html";
	}

}