<?php
$weight = $_POST["peso"];
$height = $_POST["altura"];


echo "seu imc é ",round(($weight / ($height * $height)),2);
?>