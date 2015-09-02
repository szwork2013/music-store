<?php
include_once(dirname(__FILE__) . '/search.class.php');


class searchController{
	private $search;

	public function __construct() {
		$this->search = new Search();
	}


	/** Controlller getMatching
	 *  Get a word , check if it has more than 2 characters.
	 *  Check the data base result query , if there is any metch it "rows" it and echo it.
	 *
	 *  @param sting $word - the word for search for matching
	 *  @return void the "rows" query result, if there is any.
	 *
	 */
	public function getMatching ($word) {
		
			$success = $this->search->getMatching($word);
			if (mysqli_num_rows($success) > 0) {
				while ($row = $success->fetch_assoc()) {
					$rows[] = $row['song_name'];
				}
				echo json_encode($rows);
			}
			
		
	}

	/**Controlller getAlbum
	 *  Get a song name and find the his album's id
	 *
	 *  @param sting $song - the song name
	 *  @return void  album id
	 *
	 */
	public function getAlbum ($song) {
		$album_id=$this->search->getAlbum($song);
		echo $album_id;
	}


}//close searchController class
