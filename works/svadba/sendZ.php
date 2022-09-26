<?php
	//Получаем данные из глобальной переменной $_GET, так как мы передаем данные методом GET
    $token = '555602504:AAGjufVKr0s3CPvcpLgZh5SIqDa4hi7Ra_4';
    $chatId = 530772248;
    //$chatId = 189521030;
	$name = $_GET['name']; // Вытаскиваем имя в переменную
	$email = $_GET['phone']; // Вытаскиваем почту в переменную
	$type = $_GET['type']; // Вытаскиваем почту в переменную
	$message = "Имя: $name | Телефон: $email | Вариант: $type"; // Формируем сообщение, отправляемое на почту

    $text = ('Заявка' .PHP_EOL. 'Имя: '.$_GET['name']) .PHP_EOL. ('Телефон: '. $_GET['phone']) .PHP_EOL. ('Вариант: '. $_GET['type']);

    $parameters = array('chat_id' => $chatId, 'text' => $text);
    $url = 'https://api.telegram.org/bot' .  $token . '/sendMessage?' . http_build_query($parameters);
	$to = "zakaz.baza-sosny@mail.ru"; // Задаем получателя письма
	//$to = "work.webden41k@gmail.com"; // Задаем получателя письма
	$from = "svadba-v-sosnax.ru/"; // От кого пришло письмо
	$subject = "Заявка с сайта svadba-v-sosnax "; // Задаем тему письма
	$headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n"; // Формируем заголовок письма (при неправильном формировании может ломаться кодировка и т.д.)
	if (mail($to, $subject, $message, $headers) ) { // При помощи функции mail, отправляем сообщение, проверяя отправилось оно или нет

        file_get_contents($url);
        sleep(1);
        echo header('Location: http://svadba-v-sosnax.ru/thanks.html');
        exit;
	}
	else {
		echo "<p>Что-то пошло не так, как планировалось</p>"; // Письмо не отправилось
	}
?>
