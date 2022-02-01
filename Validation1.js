const formValidation = () =>
{
	let uid = document.registration.userid;
	let passid = document.registration.passid;
	let uzip = document.registration.zip;
	let uemail = document.registration.email;
	let uname = document.registration.username;
	let uaddress = document.registration.address;
	let ucountry = document.registration.country;
	 
	if(userid_validation(uid, 5, 12))
	{
		if(passid_validation(passid, 7, 12))
		{
			if(allLetter(uname))
			{
				if(alphanumeric(uaddress))
				{
					if(country_input(ucountry))
					{
						if(allnumeric(uzip, 6))
						{
							if(email_validation(uemail))
							{
								alert("Form Successfully Submitted");
							}
						}
					}
				}
			}
		}
	}
								
	return false;
}
const userid_validation = (uid, m_low, m_high) =>
{
	let uid_len = uid.value.length;
	if (uid_len == 0 || uid_len > m_high || uid_len < m_low)
	{
		alert("Invalid Input. Please make sure that you're following the following constraints-\n 1) User ID field cannot be empty\n 2) Length of User ID should be between "+m_low+" to "+m_high);
		uid.focus();
		return false;
	}
	return true;
}
const passid_validation = (passid, m_low, m_high) =>
{
	let passid_len = passid.value.length;
	if (passid_len == 0 || passid_len > m_high || passid_len < m_low)
	{
		alert("Invalid Input. Please make sure that you're following the following constraints-\n 1) Password field cannot be empty\n 2) Length of password should be between "+m_low+" to "+m_high);
		passid.focus();
		return false;
	}
	return true;
}
const allLetter = (uname) =>
{
	let letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert("Invalid Input. Note-\n 1) Username field cannot be blank\n 2) Username must have alphabets only");
		uname.focus();
		return false;
	}
}
const alphanumeric = (uaddress) =>
{
	let letters = /^[0-9a-zA-Z]+$/;
	if(uaddress.value.match(letters))
	{
		return true;
	}
	else
	{
		alert("Invalid Input. Note-\n 1) Address field cannot be empty\n 2) User address must have alphanumeric characters only");
		uaddress.focus();
		return false;
	}
}
const country_input = (ucountry) =>
{
	if(ucountry.value == "Default")
	{
		alert("Please select your country from the given list");
		ucountry.focus();
		return false;
	}
	else
	{
		return true;
	}
}
const allnumeric = (uzip, len) =>
{
	let numbers = /^[0-9]+$/;
	let uzip_len = uzip.value.length;
	if(uzip.value.match(numbers) && uzip_len == len)
	{
		return true;
	}
	else
	{
		alert("Invalid Input. Note-\n 1) ZIP code field cannot be empty\n 2) ZIP code must have numeric characters only\n 3) ZIP code must strictly have "+len+" digits");
		uzip.focus();
		return false;
	}
}
const email_validation = (uemail) =>
{
	let pattern = /^([a-zA-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-z]{2,3}$)/;
	if(uemail.value.match(pattern))
	{
	return true;
	}
	else
	{
		alert("Invalid Email-ID");
		uemail.focus();
		return false;
	}
} 

