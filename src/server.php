<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];




$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);



$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$message = urldecode($message);



$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$message = trim($message);


if (mail("nana@nanana", "Заявка с сайта", "Имя:".$name.". Номер телефона: ".$phone.". Email: ".$email.". Текст сообщения: ".$message ,"From: nana@nanananna \r\n"))
    {     echo "Сообщение успешно отправлено"; 
    } else { 
    echo "Сообщение успешно отправлено";
    }
    ?>
    <html>
<body>
    <br>
    <br>
<a href="index.html">Назад</a> 
</body>
</html>
