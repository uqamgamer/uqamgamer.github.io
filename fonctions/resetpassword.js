function ResetPass()
{
	document.getElementById("ResetPassMessage").innerHTML="";
	
	var oForm=document.forms["resetPassForm"];
	var rPassBox=oForm.elements["resetPasswordBox"].value;
	
	if((rPassBox==null) || (rPassBox==""))
	{
		document.getElementById("ResetPassMessage").innerHTML="Veuillez entrer votre nom d'utilisateur ou votre courriel.";
	}
	else
	{
		document.getElementById("ResetPassMessage").innerHTML="Un nouveau mot de passe a été envoyé à votre adresse courriel.";
		document.getElementById("resetPass").disabled=true;
	}
	
	return(false);
}
