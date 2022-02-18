<?php

$contacto = $_POST['contacto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$mensaje_completo = "Nombre: ".$contacto."<br>"."Email: ".$email."<br>"."Mensaje :".$mensaje."<br>";


echo $contacto. " ha enviado el siguiente mensaje <br>
<br>". $mensaje."</b>";

if(mail("tewxauqsvrkubtaeeq@kvhrs.com", "PRESUPUESTO", $mensaje_completo)){
    echo " <br><br> Mensaje enviado con exito!";

}else{
    echo " <br><br> Hay un error al enviar el l msj";

}