/*
Pour le système de pages : 
*/
$(document).ready(doWork); // Quand tout est chargé
window.onhashchange = doWork; // Quand on modifie url#...

var content = $('.content');

function doWork(){
	content.html('Chargement ...');
	if (page.getTarget() == "home") {
		
	}else if (page.getTarget() == "videos") {

		AR.GET('api?res=videos', function(data){
			$('.content').clear();
			try{
				view.createVideoList(JSON.parse(data));
			}catch(error){
				$('.content').html(error.message);
			}
		});

	}else if (page.getTarget() == "projets") {

		AR.GET('api?res=projects', function(data){
			$('.content').clear();
			try{
				view.createProjectList(JSON.parse(data));
			}catch(error){
				$('.content').html(error.message);
			}
		});

	}else if(page.getTarget() == "project"){
		
	}else{
		content.html('Erreur : cette page n\'existe pas');
	}
}


