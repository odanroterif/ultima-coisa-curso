<?php
$PRICE = $_POST["price"];


if($PRICE > 50){
    $PRICE = $PRICE + ( $PRICE * 0.10);
}

echo "VALOR A PAGAR: ",round(($PRICE + ($PRICE * 0.08)),2),"<br>","FAZ O L";
?>