<?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;
 require '/sources/php/mailer/vendor/autoload.php'; //complete with the path
 
function send_mail($email, $oggetto, $messaggio, $path_allegato){
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = ""; //indirizzo del server di posta in uscita
        $mail->SMTPDebug = 0;
        $mail->Port = ; //porta del server di posta in uscita
 	    $mail->SMTPAuth = ;
        $mail->SMTPAutoTLS = ;
	    $mail->SMTPSecure = ''; //tls o ssl informarsi presso il provider del vostro server di posta
        $mail->Username = ""; //la vostra mail
        $mail->Password = ""; //password per accedere alla vostra mail
        $mail->Priority    = ; //(1 = High, 3 = Normal, 5 = low)
        $mail->setFrom('', ''); //impostazione del mittente
        $mail->AddAddress($email);
        $mail->IsHTML(true); 
        $mail->Subject  =  $oggetto;
        $mail->Body     =  $messaggio;
        $mail->AltBody  =  "";
        $mail->AddAttachment($path_allegato);  
        if(!$mail->Send()){
                echo "errore nell'invio della mail: ".$mail->ErrorInfo;
                return false;
        }else{
                return true;
        }
        //echo !extension_loaded('openssl')?"Not Available":"Available";
}
?>
