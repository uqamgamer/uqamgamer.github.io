function inscription()
{
	var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
	var postalRegex = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
	var fname = document.registerForm.prenom.value;
	var lname = document.registerForm.nom.value;
	var femail = document.registerForm.email.value;
	var fpassword = document.registerForm.PassWord.value;
	var frepassword = document.registerForm.RePassWord.value;
	var fadresseliv = document.registerForm.adresseLiv.value;
	
	var fcity = document.registerForm.ville.value;
	var fprovince = document.registerForm.province.value;
	var fcountry = document.registerForm.pays.value;
	var fpostal = document.registerForm.codePostal.value;
	var fmonth = document.registerForm.mois.value;
	var fday = document.registerForm.jour.value;
	var fyear = document.registerForm.annee.value;

	if (femail == "" )
	{
		document.registerForm.email.focus();
		document.getElementById("errorBox").innerHTML = "Entrer votre adresse courriel.";
		return false;
	}
	else if(!emailRegex.test(femail))
	{
		document.registerForm.email.focus();
		document.getElementById("errorBox").innerHTML = 
		"Votre adresse courriel n'est pas valide. Entrer votre adresse courriel valide.";
		return false;
	}

	if(fpassword.length < 6)
	{
		document.registerForm.PassWord.focus();
		document.getElementById("errorBox").innerHTML = "Votre mot de passe doit contenir au moins 6 caractères.";
		return false;
	}

	if(frepassword == "")
	{
		document.registerForm.RePassWord.focus();
		document.getElementById("errorBox").innerHTML = "Confirmer votre mot de passe.";
		return false;
	}
	if(frepassword != fpassword)
	{
		document.registerForm.RePassWord.focus();
		document.getElementById("errorBox").innerHTML = "Votre mot de passe ne correspond pas. Re-essayer encore.";
		return false;
	}
	
	if( lname.length < 3 )
	{
		document.registerForm.nom.focus() ;
		document.getElementById("errorBox").innerHTML = "Votre nom doit contenir au moins 3 caractères.";
		return false;
	}
	if( fname.length < 3 )
	{
		document.registerForm.prenom.focus() ;
		document.getElementById("errorBox").innerHTML = "Votre prénom doit contenir au moins 3 caractères.";
		return false;
	}
		
	if( fadresseliv == "" )
	{
		document.registerForm.adresseLiv.focus() ;
		document.getElementById("errorBox").innerHTML = "L'adresse de livraison ne peut pas être vide.";
		return false;
	}
	
	
	if( fcity == "" )
	{
		document.registerForm.ville.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Ville ne peut pas être vide.";
		return false;
	}
	if( fprovince == "" )
	{
		document.registerForm.province.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Province ne peut pas être vide.";
		return false;
	}
	if( fcountry == "" )
	{
		document.registerForm.pays.focus() ;
		document.getElementById("errorBox").innerHTML = "Le champ pour Pays ne peut pas être vide.";
		return false;
	}
	
	if(!postalRegex.test(fpostal))
	{
		document.registerForm.codePostal.focus();
		document.getElementById("errorBox").innerHTML = "Votre code postal doit suivre cette format : A1B2C3";
		return false;
	}

	if (fmonth == "") 
	{
		document.registerForm.mois.focus();
		document.getElementById("errorBox").innerHTML = "Choisir le mois de votre naissance.";
		return false;
	}
	
	if (fday == "") 
	{
		document.registerForm.jour.focus();
		document.getElementById("errorBox").innerHTML = "Choisir le jour de votre naissance.";
		return false;
	}
	
	if (fyear == "") 
	{
		document.registerForm.annee.focus();
		document.getElementById("errorBox").innerHTML = "Choisir l'année de votre naissance.";
		return false;
	}
	
	if(document.registerForm.radiobutton[0].checked == false && document.registerForm.radiobutton[1].checked == false)
	{
		document.getElementById("errorBox").innerHTML = "Choisir votre sexe.";
		return false;
	}
	else
	{
		window.location.href = "indexLogged.html";
	}
	
}