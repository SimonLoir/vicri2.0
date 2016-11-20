<?php
require 'vendor/autoload.php';

session_start();

if (isset($_SESSION['user_id'])) {
  exit("déjà connecté"); 
}

$client = new Google_Client();
$client->setAuthConfigFile('client_secret.json');
$client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'].'/vicri/google');
$client->setScopes('email');

if (isset($_REQUEST['logout'])) {

  unset($_SESSION['id_token_token']);

}

if (isset($_GET['code'])) {

  $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);

  $client->setAccessToken($token);

  $_SESSION['id_token_token'] = $token;

  header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));

}
if (

  !empty($_SESSION['id_token_token'])

  && isset($_SESSION['id_token_token']['id_token'])

) {

  $client->setAccessToken($_SESSION['id_token_token']);

} else {

  $authUrl = $client->createAuthUrl();

}

if ($client->getAccessToken()) {

  $token_data = $client->verifyIdToken();

}

if (isset($authUrl)){
  echo $authUrl;
  header("Location: " . $authUrl);
}else{
	$user_email = $token_data["email"];

  if (strpos($user_email, "@indse.be")) {
    include '../api/Class/db.php';
    /* --- --- --- --- --- --- --- --- --- --- */
    /*  => */include "../../config.php"; /* <= */
    /* --- --- --- --- --- --- --- --- --- --- */
    $db = new db($db__base, $db__user , $db__pass, $db__host);

    $user_infos = $db->query('SELECT * FROM users WHERE mail = :email', [

      "prepare" => [":email" => $user_email]

    ]);

    if ($user_infos != null) {

        $_SESSION['user_id'] = $user_infos[0]->id;

        header("Location: ../");

    }else{

      exit(json_encode("L'utilisateur est introuvable"));

    }
  }else{
    echo "Désolé, cette adresse email n'est pas valide";
  }
}

?>