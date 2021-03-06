<?php 
Class db{

	private $db_name;
	
	private $db_user;
	
	private $db_pass;
	
	private $db_host;
	
	private $pdo;

	/**
	 * Creates a new database object
	 * @param db_name the name of the database
	 * @param db_user the username (default is root)
	 * @param db_pass the password (default is "")
	 * @param db_host the host (default is localhost)
	 */
	public function __construct($db_name, $db_user = "root", $db_pass = "", $db_host = "localhost"){

		$this->db_name = $db_name;

		$this->db_user = $db_user;

		$this->db_pass = $db_pass;

		$this->db_host = $db_host;

	}
	/**
	 * Creates a new database connection or use the one that has already been initialized
	 */
	private function getPDO(){

		if ($this->pdo === null) {
			$pdo = new \PDO('mysql:host='.$this->db_host.';dbname=' . $this->db_name, $this->db_user , $this->db_pass);
			$this->pdo = $pdo;
		}
		return $this->pdo;

	}
	/**
	 * Performs a sql query
	 * @param statement the sql statement to execute
	 * @param options the options
	 */
	public function query($statement, $options = null){

		if ($options == null) {

			$request = $this->getPDO()->query($statement);

			$result = $request->fetchAll(PDO::FETCH_OBJ);

			return $result;

		}else{

			if (isset($options['prepare']) && is_array($options['prepare'])) {
				
				$request = $this->getPDO()->prepare($statement);

				$request->execute($options['prepare']);

			}else{

				$request = $this->getPDO()->query($statement);

			}

			if (isset($options['result']) && $options['result'] == true) {

				return $request;

			}elseif(isset($options['class']) && is_string($options['class'])){

				$result = $request->fetchAll(PDO::FETCH_CLASS, $options['class']);

				if (isset($options['one']) && $options['one'] == true) {
					return $result[0];
				}else{
					return $result;
				}

			}else{
				if (isset($options['one']) && $options['one'] == true) {
					$fetched = $request->fetchAll(PDO::FETCH_OBJ);
					if(isset($fetched[0]) && $fetched != null){
						return $fetched[0];
					}else{
						return false;
					}
				}else{
					return $request->fetchAll(PDO::FETCH_OBJ);
				}
			}

		}
	}

}?>
