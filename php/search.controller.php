<?php
include_once(dirname(__FILE__) . '/search.class.php');


class searchController{
	private $search;

	public function __construct() {
		$this->search = new Search();
	}
	
	public function getMatching ($word) {
		$i=0;
		$arr=[];
		$success=$this->search->getMatching($word);
		while($row = $success->fetch_assoc()){
			
			$arr[$i]=$row['song_name'];
			$i++;
		}
		echo json_encode($arr);
	}
	
	public function getAlbum ($song) {
		$album_id=$this->search->getAlbum($song);
		echo $album_id;
	}

}
