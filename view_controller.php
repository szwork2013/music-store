<?php

include_once(dirname(__FILE__) . '/app/class/login.class.php');


Class viewController{

    public function __construct() {
        $this->login = new Login();
    }

    public function checkLogin(){
        if ( isset($_SESSION['email']) && isset($_SESSION['password']) ) {
            $success = $this->login->checking($_SESSION['email'], $_SESSION['password']);
            if (mysqli_num_rows($success) > 0) {
                header('Location: ../../index.html');
            }
        }
    }//close checkLogin function


}
?>