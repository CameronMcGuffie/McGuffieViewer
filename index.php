<?php
    error_reporting( E_ALL ); // TEMPORARY - REMOVE ON PROD
    
    include("config.php");
?>
<html>
    <head>
        <title>McGuffie Viewer</title>
        <style type="text/css">
            body {
                font-family: Calibri;
                margin: 0;
                padding: 0;
                height: 100%;
            }
            .container {
                min-height: 100%;
                position: relative;
            }
            .ticker {
                position: fixed; 

                bottom: 0px;
                right: 0px;
                width: 50em;
                height: 1.3em;
                padding: 0.2em;
                margin-bottom: 0.25em;
                border-radius: 13px 0px 0px 13px;

                background-color: rgba(51, 51, 51, 0.7);
                border: 1px solid #eee;
                border-right: 0px;

                font-size: 2em;
                overflow: hidden;
            }
            @keyframes slide {
                from { left: 100%;}
                to { left: -100%;}
            }
            @-webkit-keyframes slide {
                from { left: 100%;}
                to { left: -100%;}
            }
            .scroll {
                color: #fff;
                opacity: 1;
                position: absolute;
                animation-name: slide;
                animation-duration: 20s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                -webkit-animation-name: slide;
                -webkit-animation-duration: 20s;
                -webkit-animation-timing-function:linear;
                -webkit-animation-iteration-count: infinite;
            }
            .radar {
                position: fixed; 
                bottom: 0px;
                width: 18em;
                height: 18em;
                z-index: 30;
                margin: 0.5em;

                border-radius: 13px;

                background-color: rgba(51, 51, 51, 0.7);
                border: 1px solid #eee;
            }
            .radarbg {
                width: 16em;
                height: 16em;
                margin: 1em;

                background-image: url("http://www.bom.gov.au/products/radar_transparencies/IDR733.background.png");
                background-size: cover;
            }
            .radarlocations {
                width: 16em;
                height: 16em;

                background-image: url("http://www.bom.gov.au/products/radar_transparencies/IDR733.locations.png");
                background-size: cover;
            }
            .radarlocations img {
                width: 16em;   
                height: 16em;
            }
        </style>
    </head>
    <body>
            <div class="container">
                <div class="radar">
                    <div class="radarbg">
                        <div class="radarlocations"><img src="http://www.bom.gov.au/radar/IDR733.T.201812191200.png" /></div>
                    </div>
                </div>
                <div class="ticker">
                    <div class="scroll">Testing</div>
                </div>
            </div>
    </body>
</html>