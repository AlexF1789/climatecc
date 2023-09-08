window.onload = (event) => {
  if(getCookie("opendyslexic")=="yes")
		changeFont();
  if(getCookie("cookies")!="yes")
		document.getElementById("cookies").style.display="block";
		
  if(innerLink)
  	document.getElementById("pdfLink").href=pdf;
  	
};


function reconizeLanguage() {
	var i = -1;
	var temp;
	do {
		i++;
		temp=navigator.languages[i];
	} while(temp.length!=2 && i<navigator.languages.length);
	
	return temp;
}


function menuToggleAnimation(x) { // for the menu three lines to X transition
 	x.classList.toggle("change");
 	var y = document.getElementById("hiddenMenu");
 	if(y.style.display=="none" || y.style.display=="") {
 		y.style.display="block";
 		x.title="Close the navigation menu";
 	} else {
 		y.style.display="none";
 		x.title="Open the navigation menu";
 	}
}

function changeFont() {
	if(document.body.style.fontFamily!="OpenDyslexic") {
		document.body.style.fontFamily = "OpenDyslexic";
		document.getElementById("accessibility").title="Switch the font to Open Sans";
		if(getCookie("opendyslexic")=="")
			setCookie("opendyslexic","yes",1);
		
	} else {
		document.body.style.fontFamily = "";
		deleteCookie("opendyslexic");
		document.getElementById("accessibility").title="Switch the font to OpenDyslexic";
	}
}

// COOKIES: used to keep the OpenDyslexic font while surfing the pages, credits w3schools.com

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(name) {
	setCookie(name,"",0);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function closeCookies() {
	setCookie("cookies","yes",7);
	document.getElementById("cookies").style.display="none";
}

function changeLanguage() {
	if(window.location.href[11]=='-') {
		window.location.replace("https://www.climatecc.eu"+path);
	} else {
		window.location.replace("https://www-climatecc-eu.translate.goog"+path+"?_x_tr_sl=auto&_x_tr_tl="+reconizeLanguage()+"&_x_tr_hl="+reconizeLanguage()+"&_x_tr_pto=wapp");
	}
}

