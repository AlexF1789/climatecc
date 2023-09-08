/* EXIT CODE SEARCHER */

window.addEventListener("load",function(event) {
	var urlParams = new URLSearchParams(window.location.search);
	if(urlParams!=0) {
  		if(urlParams.get('sent')=="yes")
  		Swal.fire({
  			icon: 'success',
  			title: 'Email sent',
  			text: 'The email containing the link to the article was successfully sent!',
		})
  	else if(urlParams.get('sent')=="no")
  		Swal.fire({
  			icon: 'error',
  			title: 'Email not sent',
  			text: 'An error occured and the mail wasn\'t sent; check the email address you inserted or try later.',
  			footer: 'If the problem persists ask help at&ensp;<a href="mailto:info@climatecc.eu">info@climatecc.eu</a>'
		})
	}

	
}, false);

/* SHOW/HIDE MAIL DIV */

function sendArticle() {
	Swal.fire({
		titleText: 'Send by email',
  		html:
    		'<form method="POST" action="/sources/php/mail.php"><input type="text" name="link" value="'+link+'" readonly="readonly" style="display: none;"/><input type="text" name="pdf" value="'+pdf+'" readonly="readonly" style="display: none;"/><input type="text" name="mail" placeholder="Email address" required/></br></br><label>Type of link:</label></br></br><input type="radio" name="content" value="link" id="link" checked required/><label for="link">Link to the article</label></br><input type="radio" name="content" value="pdf" id="pdf" required/><label for="pdf">PDF article</label></br></br><input type="submit" value="Send" class="swal2-confirm swal2-styled" title="Send the article by email"/>&emsp;<input type="button" value="Close" class="swal2-cancel swal2-styled" title="Close this form" onclick="Swal.clickCancel()"/></form>',
  		showCloseButton: true,
  		showConfirmButton: false,
  		showCancelButton: false
	})
}

//swal2-cancel swal2-styled
