<?php
include_once(dirname(__FILE__) . '/search.class.php');


class searchController{
	private $search;

	public function __construct() {
		$this->search = new Search();
	}
	
	public function getMatching ($word){

		if (!empty($word)) {
			$success = $this->search->getMatching($word);
			if( mysqli_num_rows($success) > 0 ) {
				while ($row = $success->fetch_assoc()) {
					$rows[] = $row['song_name'];
				}
				echo json_encode($rows);

			}
			else{
				echo false;
			}
		}


	}


}//close searchController class
