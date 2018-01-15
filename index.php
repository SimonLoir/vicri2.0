<?php
session_start();
if (!empty($_GET)) {
	$array_keys = array_keys($_GET);
	$query_string_hash = "";
	for ($i=0; $i < sizeof($array_keys); $i++) {
		$query_string_hash .= $array_keys[$i] . "=" . $_GET[$array_keys[$i]];
		if ($i != sizeof($array_keys) -1) {
			$query_string_hash .= ";";
		}
	}
	echo '
	<script>var window_hash = "' .$query_string_hash. '"</script>
	';
}else{
	echo '
	<script>var window_hash = window.location.hash.replace("#", "")</script>
	';
}
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Groupe Vicri</title>
</head>
<body>
    <div class="scms-header">
        <div class="scms-header">
            <span class="scms-header-title desktop">Groupe Vicri</span>
            <span class="scms-header-title mobile">Vicri</span>
            <div class="scms-header-actions">
                <a class="scms-header-actions-link" data-internal="true" href="home">Home</a>
                <a class="scms-header-actions-link" data-internal="true" href="projects">Projets</a>
                <a class="scms-header-actions-link" data-internal="true" href="videos">Vidéos</a>
                <a class="scms-header-actions-link" data-internal="true" href="photos">Photos</a>
                <a class="scms-header-actions-link" data-internal="true" href="others">Autres</a>
                <a class="scms-header-actions-link" href="login">Connexion</a>
                <a class="scms-header-actions-link hidden" href="dashboard.php">Dashboard</a>
                <a class="scms-header-actions-link hidden" data-internal="true" href="logout" id="menu-logout">Déconnexion</a>
            </div>
        </div>
    </div>
	<div class="hamburger none"><span></span><svg x="0" y="0" width="54px" height="54px" viewBox="0 0 54 54"> <circle cx="27" cy="27" r="26"></circle> </svg> </div>
    <div class="scms-content-container dynamic-content">
		<div class="scms-content-block">
			<div class="scms-centred-element">
				On dirait que votre navigateur n'est pas supporté :-(
			</div>
		</div>
	</div>
    <script src="dist/site.bundle.js"></script>
</body>
</html>