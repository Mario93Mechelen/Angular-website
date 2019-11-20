<?php
    require_once './vendor/autoload.php';
    use PHPMailer\PHPMailer\PHPMailer;    
    include('./generateEmail.php');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type', "Application/json");
	if(!empty($_POST['fields'])){
        $mail = new PHPMailer;
        $fields = json_decode($_POST['fields']);
        $message = '';
        foreach($fields as $key => $field){
            $message.='<h2>'.$key.'</h2><p>'.$field.'</p>';
            if($key === 'email') $email = $field;
            if($key === 'firstname') $name = $field;
            if($key === 'subject') $subject = $field;
        };
        $mail->setFrom($email, $name);
        $mail->addAddress('info@mariosamison.be');
        $mail->Subject = 'Mail from '.$name.': '.$email.' about '.$subject;
        $mail->Body = returnTemplate($fields);
        $mail->isHTML(true);
        //Send
        try{
            $mail->send();
            $feedback = [
                "success" => true,
                "code" => 200,
                "message" => $message
            ];
            echo json_encode($feedback);
        }catch(Exception $error) {
            $feedback = [
                "success" => false,
                "code" => 400,
                "message" => $error
            ];
            echo json_encode($feedback);
        }
	}
?>