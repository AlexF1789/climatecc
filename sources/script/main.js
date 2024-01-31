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
	var path = ''
	if(window.location.href[11]=='-') {
		path = window.location.href.substring(39, window.location.href.search(".html")+5);
		window.location.replace("https://www.climatecc.eu"+path);
	} else {
		path = window.location.href.substring(24);
		if(path=='/')
			path = '/index.html';
		window.location.replace("https://www-climatecc-eu.translate.goog"+path+"?_x_tr_sl=auto&_x_tr_tl="+reconizeLanguage()+"&_x_tr_hl="+reconizeLanguage()+"&_x_tr_pto=wapp");
	}
}

function contactMe() {
	Swal.fire({
		  title: 'Contact me',
		  icon: 'info',
		  html:
			'<div class="contacts" onclick="redirect(1)">' +
				'<img src="https://www.climatecc.eu/sources/images/telegramLogo.svg" type="image/svg" alt="Telegram"/><a>Contact me on Telegram</a>' +
			'</div>' +
			'<div class="contacts" onclick="redirect(2)">' +
				'<img src="https://www.climatecc.eu/sources/images/blueMail.png" type="image/png" alt="Mail"/><a>Send me an email</a>' +
			'</div>' +
			'<div class="contacts" onclick="redirect(4)">' +
				'<img src="https://www.climatecc.eu/sources/images/insta.png" type="image/png" alt="Instagram"/><a>Follow me on Instagram</a>' +
			'</div>' +
			'<div class="contacts" onclick="redirect(3)">' +
				'<img src="https://www.climatecc.eu/sources/images/gitMark.png" type="image/png" alt="GitHub"/><a>Visit the GitHub repo</a>' +
			'</div>',
		  showCloseButton: true,
		  imageHeight: 500
		})
}

function redirect(a) {
	var link;
	switch(a) {
		case 1:
			link = "https://t.me/AlexF1789";
			break;
		case 2:
			link = "mailto:alex@climatecc.eu";
			break;
		case 3:
			link = "https://www.github.com/AlexF1789/climatecc";
			break;
		case 4:
			link = "https://www.instagram.com/pr35.flo/";
			break;
		default:
			link = "";
			break;
	}
	
	window.open(link, '_blank');
}