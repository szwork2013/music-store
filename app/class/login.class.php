<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Login extends DB{

	private $db;
	private $id;

	public function __construct() {
		$this->db = DB::getInstance();
	}




	/** checking
	 *  Checking if the is already registered before
	 *
	 *  @param sting,string- the user email and user password
	 *  @return object-the query data
	 *
	 */
	public function checking($email,$password){
		$sql="SELECT * FROM users WHERE  user_email='$email' AND user_password='$password' ";
		$answer=$this->db->query($sql);
		if(mysqli_num_rows($answer)>0){
			$this->id=$this->db->insert_id;
			return $answer;
		}
		else{
			return false;
		}
	}



	/** createSession
	 *  Create new session with the server
	 *
	 *  @param sting,string- the user email and user password
	 *  @return voide
	 *
	 */
	public function createSession($email,$password){
		$_SESSION['email']=$email;
		$_SESSION['password']=$password;
		$_SESSION['id']=$this->id;
	}


	/** logout
	 *  Delete the session with the server
	 *
	 *  @param voide
	 *  @return voide
	 *
	 */
	public function logout(){
		unset($_SESSION['name'] );
		unset($_SESSION['password'] );
		unset($_SESSION['id'] );
	}









}//close Login class