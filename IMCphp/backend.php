<?php

$weight = $_POST['peso'];
$height = $_POST['altura'];
$gender = $_POST['genero'];
$imc;

if (strtolower($gender) !== 'homem' && strtolower($gender) !== "mulher") {
    echo "Gênero inválido, favor inserir gênero válido";
} else {
    $imc = round(($weight / ($height * $height)),1);

    if (strtolower($gender) === "homem") {
        if ($imc < 18.5) {
            echo "seu imc é ",$imc," você esta ","Abaixo do peso";
        } else if ($imc >= 18.5 && $imc < 29.9) {
            echo "seu imc é ",$imc," você esta ","Peso ideal";
        } else if ($imc >= 25 && $imc < 30) {
            echo "seu imc é ",$imc," você esta ","Sobrepeso";
        } else {
            echo "seu imc é ",$imc," você esta ","Obesidade";
        }
    } else if (strtolower($gender) === "mulher") {
        if ($imc < 18.5) {
            echo "seu imc é ",$imc," você esta ","Abaixo do peso";
        } else if ($imc >= 18.5 && $imc < 25.9) {
            echo "seu imc é ",$imc," você esta ","Peso ideal";
        } else if ($imc >= 25 && $imc < 30) {
            echo "seu imc é ",$imc," você esta ","Sobrepeso";
        } else {
            echo "seu imc é ",$imc," você esta ","Obesidade";
        }
    }
}
?>