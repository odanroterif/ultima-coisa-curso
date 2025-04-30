<?php

$Password = "2346946121435";
$CryptoPassword = password_hash($Password,PASSWORD_DEFAULT);
$CryptoPassword2 = sha1($Password);

echo $CryptoPassword,'<br>';
echo $CryptoPassword2;
?>