<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vicri API Documentation</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		body{
			background: #EEE;
			color:rgba(0,0,0,0.75);
			font-family: sans-serif;
			font-size: 16px;
		}
		.section{
			padding: 15px;
			padding-left:50px; 
		}
		.section>div, .get{
			border-left: 5px solid rgba(0,0,0,0.75);
			transition: 0.3s;
			display: block;
			padding: 15px;
			padding-left: 40px;
		}
		.get{
			padding-left: 10px;
			border-left: 5px solid rgba(42, 67, 173, 0.94);
		}
		.get_title{
			color : rgba(42, 67, 173, 0.94);
		}
	</style>
</head>
<body>
	<h1>API Documentation</h1>
	<h2 class="get_title">GET method</h2>
	<div class="get">
		<div class="section">
			<h3 id="projects">?res=projects</h3>
			<div>
				<span>Output format: JSON</span>
				<p>
					Get all projects
				</p>
				<span>Return => [{id (int), name (string), managers (array), progression (int), pined (int), 	shortDescription (string), user_is_manager (bool)}, {project}, {project}]</span>
			</div>
		</div>
		<div class="section">
			<h3 id="project">?res=project&id={project_id}</h3>
			<div>
				<span>Output format: JSON</span>
				<p>Get the project by its id.</p>
				<span>Return => {id (int) ,name (string) ,managers (array) ,type (string) ,progression (int) ,pined (int) ,description (string) ,shortDescription (string) ,goals (string) ,links (string)} <br /><b>OR</b><br />{"UError"}
				
				</span>
			</div>
		</div>
		<div class="section">
			<h3 id="videos">?res=videos</h3>
			<div>
				<span>Output format: JSON</span>
				<p>Get all videos</p>
				<span>Return => [{id (int) ,url (string) ,provider (string) ,title (string) ,description (string)} , {video}]
				</span>
			</div>
		</div>
		<div class="section">
			<h3 id="user_connection_state">?res=user_connection_state</h3>
			<div>
				<span>Output format: JSON <b>OR</b> String</span>
				<p>Get user connection state</p>
				<span>Return => {name ,firstname ,mail ,pseudo}
				<br /><b>OR</b><br />
				"Empty"
				</span>
			</div>
		</div>
	</div>
</body>
</html>