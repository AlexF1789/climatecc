<?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;
 require '/web/htdocs/www.climatecc.eu/home/sources/php/mailer/vendor/autoload.php';
 
function send_mail($email, $oggetto, $messaggio, $path_debug_allegato){
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = ""; // smtp server address
        $mail->SMTPDebug = 0;
        $mail->Port = 0; // smtp port
 	    $mail->SMTPAuth = true;
        $mail->SMTPAutoTLS = false;
	    $mail->SMTPSecure = ''; // ssl or tls according to your provider's settings
        $mail->Username = ""; // your email address
        $mail->Password = ""; // your email password
        $mail->Priority    = 0; // the message priority (1 = High, 3 = Normal, 5 = low)
        $mail->setFrom('', ''); // from infos (email address, name)
        $mail->AddAddress($email);
        $mail->IsHTML(true); 
        $mail->Subject  =  $oggetto;
        $mail->Body     =  $messaggio;
        $mail->AltBody  =  "";
        $mail->AddAttachment($path_debug_allegato);  
        if(!$mail->Send()){
                echo "an error occured sending the email: ".$mail->ErrorInfo;
                return false;
        }else{
                return true;
        }
        //echo !extension_loaded('openssl')?"Not Available":"Available";
}
?>
