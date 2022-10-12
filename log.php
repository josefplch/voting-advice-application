<?php
$dataset      = $_POST['dataset'];
$accented     = $_POST['accented'];
$response     = $_POST['response'];
$serialNumber = $_POST['serialNumber'];
$valid =
    preg_match    ('/([a-z]|[0-9]|-)+/', $dataset)
    && preg_match ('/[01]+/',            $accented)
    && preg_match ('/([1-9]|x)+/',       $response)
    && preg_match ('/[0-9]+/',           $serialNumber);

if ($valid === false)
{
    http_response_code (400);
    echo 'ERROR';
}
else
{
    date_default_timezone_set ('Europe/Prague');
    $time = date ('Y-m-d H:i:s');
    $ip   = $_SERVER ['REMOTE_ADDR'];
    
    $file = fopen ('./data/'.$dataset.'/responses.log', 'a');
    fwrite ($file, $time.'  '.$ip.'  '.$accented.'  '.$response.'  '.$serialNumber.PHP_EOL);
    fflush ($file);
    fclose ($file);
    
    echo 'OK';
}
