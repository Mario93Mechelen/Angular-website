<?php 
function returnTemplate($fields){ ob_start(); ?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Email from site form</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body style="margin: 0; padding: 0;">
                <table border="0px" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
                    <tr>
                        <td bgcolor="#262626" style="padding: 40px 0 30px 0; display:flex;justify-content:center;align-items:center">
                            <img src="https://mariosamison.be/assets/images/logo-white.svg" alt="mario samison logo" width="300" height="230" style="display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <table border="0px" cellpadding="0" cellspacing="0" width="100%">
                                    <?php foreach($fields as $key => $field){
                                        echo generateTitleWithText($field, $key);
                                    } ;?>
                                
                            </table>
                        </td>
                    </tr>
                    
                </table>
            </body>
        </html>

<?php return ob_get_clean(); } ?>
<?php function generateTitleWithText($field, $key){ ob_start() ;?>
    <tr>
        <td style="color: #262626; font-family: 'Open Sans', sans-serif; font-size: 14px;">
            <b><?php echo $key; ?></b>
            <?php echo $field; ?>
        </td>
    </tr>
<?php return ob_get_clean(); }?>