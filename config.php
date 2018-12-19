<?php
    $credentials = json_decode(file_get_contents("credentials.json"), true);

    $client_id = $credentials["installed"]["client_id"];
    $client_secret = $credentials["client_secret"];

?>