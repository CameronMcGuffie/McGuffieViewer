<?php   
	header("Access-Control-Allow-Origin: *");

    function fnGetPage($url) {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $fileContents = curl_exec($ch);
        curl_close($ch);

        return $fileContents;
    }

    $find_one = "theImageNames[0] = \"";
    $find_two = "theImageNames[1] = \"";
    $find_three = "theImageNames[2] = \"";
    $find_four = "theImageNames[3] = \"";

    $bom_content = fnGetPage("http://www.bom.gov.au/products/IDR733.loop.shtml");

    $loop_one = substr($bom_content, strpos($bom_content, $find_one) + strlen($find_one), 53);
    $loop_two = substr($bom_content, strpos($bom_content, $find_two) + strlen($find_two), 53);
    $loop_three = substr($bom_content, strpos($bom_content, $find_three) + strlen($find_three), 53);
    $loop_four = substr($bom_content, strpos($bom_content, $find_four) + strlen($find_four), 53);

    echo "{\"content\": {\"1\": \"";
    echo $loop_one;
    echo "\", \"2\": \"";
    echo $loop_two;
    echo "\", \"3\": \"";
    echo $loop_three;
    echo "\", \"4\": \"";
    echo $loop_four;
    echo "\"}}";
?>