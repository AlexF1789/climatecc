<?php

	require '/web/htdocs/www.climatecc.eu/home/sources/php/mailer/mailsender.php';
	
	
	if($_SERVER['REQUEST_METHOD']=="POST") {
		$mail = $_POST['mail']; //mail address
		$type = $_POST['content']; //type of link: pdf or article
		$link = $_POST['link']; //page link
		$pdf = $_POST['pdf']; //pdf link
		
		if($mail=="" || $type=="" || $link=="" || $pdf=="") {
			header("location: https://duckduckgo.com");
			die;
		} else { 
		
			echo "mail: ".$mail."</br>content: ".$type."</br>page: ".$link."</br>pdf: ".$pdf."</br></br>"; //used to debug
			
			if($type=="link") {
		
				$content='
			
			 
			<div class="xam_msg_class">
			<div class="xam_msg_class">
			<span style="font-family: Arial; font-size: medium;" xam-editor-container="true"><a href="https://www.climatecc.eu" style="margin: 5% 1% 1% 5%; text-align: center;" target="_blank">
			<img src="https://www.climatecc.eu/sources/images/meltLogo.jpg" style="width: 90%; margin-top: 0;" type="image/jpg" />
		</a>
		<div style="background-color: #035ba5; height: 10px; margin: 5% 0 5% 0; width: 100%;"></div>
		
		<h1 style="margin: 5%; font-family: sans-serif; color: #035ba5; text-decoration: underline;	text-decoration-thickness: 3px;">Shared article</h1>
		
		<p style="margin: 5%; font-family: sans-serif; width: 90%;">You have received this article from Climate Change Challenge website. Here\'s the link to read it:
		
		</br></br>
		
		<a href="'.$link.'">'.$link.'</a>
		
		</br></br>
		
		For any problem you can email us at <a href="mailto:info@climatecc.eu">info@climatecc.eu</a>. Please do not reply to this email, the address it was sent from is not checked and you won\'t receive any reply.
		
		</p>
		
		<br />
		
		<p style="color: grey; font-family: sans-serif; margin: 1% 5% 1% 5%;">---<br />Best regards,<br />Climate Change Challenge</p>
		<label style="color: grey; font-size: 80%; font-family: sans-serif; margin: 0 5% 0 5%;"><a href="https://www.climatecc.eu" target="_blank">climatecc.eu</a><a> - </a><a href="mailto:info@climatecc.eu">info@climatecc.eu</a></label>
	<div style="background-color: #035ba5; height: 10px; margin: 5% 0 5% 0; width: 100%;"></div></span>
</div>
</div>

			
			
			';
			
				$res = send_mail($mail, "Shared article", $content, null); //without attachment
				
			} else if($type="pdf") {
				
				$content='
			
			 
			<div class="xam_msg_class">
			<div class="xam_msg_class">
			<span style="font-family: Arial; font-size: medium;" xam-editor-container="true"><a href="https://www.climatecc.eu" style="margin: 5% 1% 1% 5%; text-align: center;" target="_blank">
			<img src="https://www.climatecc.eu/sources/images/meltLogo.jpg" style="width: 90%; margin-top: 0;" type="image/jpg" />
		</a>
		<div style="background-color: #035ba5; height: 10px; margin: 5% 0 5% 0; width: 100%;"></div>
		
		<h1 style="margin: 5%; font-family: sans-serif; color: #035ba5; text-decoration: underline;	text-decoration-thickness: 3px;">Shared article</h1>
		
		<p style="margin: 5%; font-family: sans-serif; width: 90%;">You have received this article from Climate Change Challenge website. You can click the following link to open it in your browser or you can read it opening the PDF attached to this email.
		
		</br></br>
		
		<a href="'.$link.'">'.$link.'</a>.
		
		</br></br>
		
		For any problem you can email us at <a href="mailto:info@climatecc.eu">info@climatecc.eu</a>. Please do not reply to this email, the address it was sent from is not checked and you won\'t receive any reply.
		
		</p>
		
		<br />
		
		<p style="color: grey; font-family: sans-serif; margin: 1% 5% 1% 5%;">---<br />Best regards,<br />Climate Change Challenge</p>
		<label style="color: grey; font-size: 80%; font-family: sans-serif; margin: 0 5% 0 5%;"><a href="https://www.climatecc.eu" target="_blank">climatecc.eu</a><a> - </a><a href="mailto:info@climatecc.eu">info@climatecc.eu</a></label>
	<div style="background-color: #035ba5; height: 10px; margin: 5% 0 5% 0; width: 100%;"></div></span>
</div>
</div>

			
			
			';
			
				$path_debug = "/web/htdocs/www.climatecc.eu/home".$pdf;
				$res = send_mail($mail, "Shared article", $content, $path_debug); //with attachment
				
			} else {
				echo "</br></br>ERROR!";
			}
			
			echo "</br></br>".$res;
			
			if($res) {
				header("location: ".$link."?sent=yes");
			} else {
				header("location: ".$link."?sent=no");
			}
				
		}
		
	} else {
		//header("location: https://bing.com"); //in case of error
	}

?>
