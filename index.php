<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "happybytes";

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Username, Password FROM users";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
       console_log("Name: " . $row["Username"]. " " . $row["Password"]);
    }

$conn->close();
?>
<html>
<head>
    <link rel="stylesheet" href="welcomeScreens.css">
    <link rel="stylesheet" href="lib/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="lib/js/jquery.js"></script>
    <script src="lib/js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
    <title>HappyBytes Login</title>
</head>

    <body class="allContent">
        <div class="logo">
            <img src="img/logo.png">
        </div>
        <h3 class=text-center> Welcome To HappyBytes!</h3>
        <div class="loginInfo text-center">
            <form action="login.html">
                <div><input type="text" name="Username" placeholder="Username" class="text" id="uNameInput"></div>
                <div><input type="password" name="password" placeholder="Password" class="text" id="pWordInput"></div>
                <div id="loginIssue" class="container"></div>
            </form>
        </div>

        <div class="text-center">
            <button class="btn btn-outline-success" id="loginBtn">Login</button>
        </div>
        
        <div class="text-center">
            <a href="signup.html"><button type="button" class="btn btn-outline-secondary sign" id="signupBtn">Sign Up!</button></a>
        </div>

        <div class="container description">
            <p>We give you <q>bytes</q> of information to help improve your day. This is an app to help you get through dark or troubling times. We will give you advice, inspirational messages, and resources to help you get through life.</p>
        </div>
    </body>

</html>