 <?php

if(isset($_COOKIE['AboutVisit']))
{
  $last = $_COOKIE['AboutVisit'];
}

//this adds one year to the current time, for the cookie expiration
$year = 31536000 + time();

setcookie("AboutVisit", time(), $year, "/");

echo "<h2>Copyright &copy; 1999-" . date("Y") . " W3Schools.com</h2>";

if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}

if (isset($last))
{
  $change = time() - $last;

  if ( $change > 86400)
  {
    echo "Welcome back! <br> You last visited on ". date("d/m/y",$last);
    // Tells the user when they last visited if it was over a day ago
  }
  else
  {
    echo "Thanks for using our site!";
    //Gives the user a message if they are visiting again in the same day
  }
}
else
{
  echo "Welcome to our site";
  //Greets a first time user
}

?> 