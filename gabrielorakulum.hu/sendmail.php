<?php
header("Content-Type: text/html; charset=utf-8");
//rövid változónevek létrehozása

$text=$_POST['textarea'];
$nev=$_POST['name'];
$email=$_POST['email'];

//statikus információk beállítása
$cimzett = "gabrielorakulum@gmail.com";

$targy = "Üzenet a honlapról";

$level_tartalma = 
                  "Feladó e-mail címe: ".$email."\r\n".$nev."\r\n".$text;
               
$felado = "Feladó: gabrielorakulum@gmail.com";

	if($text!=null){
	//mail() függvény meghívása az üzenet elküldésére+hozzáírás
	mail($cimzett, $targy,$level_tartalma,  $felado);
	echo "<script> location.href='index.html#contact'; alert('Köszönöm az üzenetedet, hamarosan válaszolok!');</script>";
	}
	else
	{
		echo "<script> location.href='index.html#contact'; alert('Kérlek minden szükséges adatodat add meg!');</script>";
	}
	
	
	


?>



