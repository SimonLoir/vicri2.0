<?php 
Class db{

	private $db_name;
	private $db_user;
	private $db_pass;
	private $db_host;
	private $pdo;

	/*
	PRÉ : 
		db_name
		db_user
		db_pass
		db_host
	POST : /		
		
	*/

	public function __construct($db_name, $db_user = "root", $db_pass = "", $db_host = "localhost"){

		$this->db_name = $db_name;
		$this->db_user = $db_user;
		$this->db_pass = $db_pass;
		$this->db_host = $db_host;

	}

	/*
	PRE : /
	POST :
		output = this->pdo
	*/

	private function getPDO(){

		if ($this->pdo === null) {
			$pdo = new \PDO('mysql:host='.$this->db_host.';dbname=' . $this->db_name, $this->db_user , $this->db_pass);
			$this->pdo = $pdo;
		}
		return $this->pdo;

	}

	/*
	PRE : 
		statement [SQL statement] (string)

	POST :
		output  =  object made with class : return = false and class not empty (or "none") 
		   else =  array : return = false and class is empty (or "none")
		   else =  statement : return = true and request didn't fail
		   else =  FALSE : return = true and request failed
	*/

	public function oldquery($statement, $class = 'none', $return = false){

		$request = $this->getPDO()->query($statement);
		
		if ($return == true) {
			
			return $request;

		}

		if ($class == "none") {
			$result = $request->fetchAll(PDO::FETCH_OBJ);
		}else{
			$result = $request->fetchAll(PDO::FETCH_CLASS, $class);
		}

		return $result;

	}

	/*
	In dev
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

				return $request->fetchAll(PDO::FETCH_OBJ);

			}

		}
	}

}?>
