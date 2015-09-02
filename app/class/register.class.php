<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Register extends DB{
	
	private $db;
	private $password;
	private $id;

	public function __construct() {
		$this->db = DB::getInstance();
	}



	/** insertNew
	 *  Save new user information to database, registion
	 *
	 *  @param object - the user data
	 *  @return bool
	 *
	 */
	public function insertNew($data){
		$password=md5($data->password);
		$firstName=strip_tags($data->firstname);
		$firstName = $this->db->real_escape_string($firstName);
		$lastName=strip_tags($data->lastname);
		$lastName = $this->db->real_escape_string($lastName);
		$sql="INSERT INTO users ( user_email, user_password, user_firstname, user_lastname) VALUES
			('$data->email','$password','$firstName','$lastName')";
		$answer=$this->db->query($sql);
		return $answer;
	}


	/** createSession
	 *  Create new session with the server
	 *
	 *  @param sting,string- the user email and user password
	 *  @return voide
	 *
	 */
	public function createSession($email){
		$_SESSION['email']=$email;
		$_SESSION['password']=$this->password;
		$_SESSION['id']=$this->id;
	}


	/** checkFbRegister
	 *  Checking if the user is registerd using facebook before
	 *
	 *  @param int- facebook id
	 *  @return bool
	 *
	 */
	public function checkFbRegister($fbId){
		$sql="SELECT * FROM fb_users INNER JOIN users ON users.user_id=fb_users.user_id WHERE user_fb_uid='$fbId' ";
		$answer=$this->db->query($sql);
		if(mysqli_num_rows($answer)>0){
			$row = $answer->fetch_assoc();
			$this->password=$row['user_password'];
			$this->id=$row['user_password'];
			$this->createSession($row['user_email']);
			return true;
		}
		return false;
	}


	/** register
	 *  Saveing new user to database, using facebook
	 *
	 *  @param int- facebook id
	 *  @return array
	 *
	 */
	public function register($FBInfo){
		$this->password=md5(mt_rand(20,30));
		$firstName=$this->db->real_escape_string($FBInfo->firstname);
		$lastName=$this->db->real_escape_string($FBInfo->lastname);
		$sql="INSERT INTO users ( user_email,user_password ,user_firstname, user_lastname)
			 VALUES('$FBInfo->email','$this->password','$firstName','$lastName')";
		$answer=$this->db->query($sql);
		if($answer){
			$userId=$this->db->insert_id;
			$sql="INSERT INTO  fb_users(user_id,user_fb_uid) VALUES('$userId','$FBInfo->fbId')";
			$answer=$this->db->query($sql);
			$this->id=$this->db->insert_id;
			return $answer;
		}
		return false;
	}


}