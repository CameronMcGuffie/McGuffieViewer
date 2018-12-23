<?php
	header("Access-Control-Allow-Origin: *");

    $dir    = './photos';
    $files1 = scandir($dir);

    $rand = rand(0, (sizeof($files1) - 1));
    while($files1[$rand] == "." || $files1[$rand] == "..") { $rand = rand(0, (sizeof($files1) - 1)); }

    echo "{ \"background\": \"" . $files1[$rand] . "\"}";
?>