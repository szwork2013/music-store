<?php 


class DB {
	private static $instance = NULL;

	
	/** getInstance
	 *  make an  access to the project database
	 *
	 *  @param void
	 *  @return object - mysqli object for access the project database
	 *
	 */
    public static function getInstance() {
		if ( !self::$instance )
			self::$instance = new mysqli( 'localhost', 'root', '', 'musicstore' );

		return self::$instance;
    }


}
?>