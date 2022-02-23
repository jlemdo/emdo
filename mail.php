<?php  
 if (isset($_POST['submit'])) {  
      //print_r($_POST);  
      $email=$_POST['email'];  
      smtp_mailer($email, 'TEST', "Thank you for watching my video");  
 }  
      function smtp_mailer($to, $subject, $msg){  
           require_once("smtp/PHPMailerAutoload.php");  
           $mail = new PHPMailer;  
           $mail->isSMTP();  
           //$mail->SMTPDebug = 3;  
           $mail->SMTPAuth = true;  
           $mail->SMTPSecure = 'TLS';  
           $mail->Host = "1b.ncomputers.org";  
           $mail->Port = 587;  
           $mail->IsHTML(true);  
           $mail->CharSet = 'UTF-8';  
           $mail->Username = 'info@emdo.digital';   
           $mail->Password = 'Asdeases1.';   
           $mail->setFrom('info@emdo.digital', 'Test');  
           $mail->Subject = $subject;  
           $mail->Body = $msg;  
           $mail->AddAddress($to);  
           if(!$mail->send()) {  
             echo 'Message could not be sent.';  
             echo 'Mailer Error: ' . $mail->ErrorInfo;  
           } else {  
             echo 'send';  
           }  
      }  
 ?>  