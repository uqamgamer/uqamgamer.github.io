function ResetLoginWhenRefresh() 
{
	document.getElementById("LoginButton").disabled=false;
}

function LoginBox()
{
	document.getElementById("LoginMessage").innerHTML="";
	var bd=new Array();
	bd["Mathieu"]="pass";
	
	var oForm=document.forms["loginForm"];
	var login=oForm.elements["login"].value;
	var pass=oForm.elements["PassWord"].value;
	var tentative = 0;
	
	if((login==null) || (login==""))
	{
		document.getElementById("LoginMessage").innerHTML="<font color=red>Veuillez entrer votre nom d'utilisateur ou votre courriel.</font>";
	}
	else if((pass==null) || (pass==""))
	{
		document.getElementById("LoginMessage").innerHTML="<font color=red>Le mot de passe est vide.</font>";
	}
	else
	{
		if(pass==bd[login])
		{
			// When Password is valid
			return (true);
		}
		else
		{
			if(LoginBox.tentative<3)
			{
				document.getElementById("LoginMessage").innerHTML="<font color=red>Le nom d'utilisateur ou le mot de passe est invalide.</font>";
				LoginBox.tentative++;
			}
			else
			{
				document.getElementById("LoginMessage").innerHTML="<font color=red>" + LoginBox.tentative + " tentatives d'échecs. Le compte est verrouillé.</font>";
				document.getElementById("LoginButton").disabled=true;
			}
		}
	}
	
	return(false);
}

// Static
LoginBox.tentative = 1;