<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type', "Application/json");
	if(!empty($_POST['fields'])){
        $fields = json_decode($_POST['fields']);
        $message = '';
        foreach($fields as $key => $field){
            $message.='<h2>'.$key.'</h2><p>'.$field.'</p>';
            if($key === 'email') $email = $field;
            if($key === 'firstname') $name = $field;
            if($key === 'subject') $subject = $field;
        };
		// In case any of our lines are larger than 70 characters, we should use wordwrap()
		$message = wordwrap($message, 70, "\r\n");

        //Send
        try{
            mail('marioql197@mariosamison.be', 'Mail from '.$name.': '.$email.' about '.$subject, $message);
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