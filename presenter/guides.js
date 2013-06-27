$(document).ready(function() {
	// Creates the main index page
	
	content = "";
	content += '<div data-role="header">';
	content += '<h1>AUDIO GUIDE INDEX</h1>';
	content += '</div>';

	content += '<div data-role="content">';
	for (guide in guides) {
		content += '<a href="#guide_' + guide + '_0" data-role="button" data-icon="arrow-r" data-iconpos="right" data-transition="flip">' + guides[guide].title + '</a>';
		content += '<a href="#main" data-role="button" data-icon="home" data-iconpos="right" data-transition="flip">Back to Home</a>';
	}
	content += '</div>';

	$("#guide_index").html(content);
	
	content = "";
	for (guide in guides) {
		for (slide in guides[guide].slides) {
			console.log('guide_' + guide + '_' + slide);
			content += '<div data-role="page" data-theme="b" id="guide_' + guide + '_' + slide + '">';
			content += '<div data-role="header">';
			content += '<h1>' + guides[guide].slides[slide].title + '</h1>';
			content += '</div>';

			content += '<div data-role="content">';
			content += '<p align="center">';
			content += '<img src="images/' + guides[guide].slides[slide].image + '">';
			content += '<br/>';
			content += '<audio controls="controls">';
			content += '<source src="audiofiles/' + guides[guide].slides[slide].audiofile +'" type="audio/mp3" />';
			content += '</audio>';
			content += '</p>';
			content += '<a href="#guide_index" data-role="button" data-icon="arrow-r" data-iconpos="right" data-transition="flip">Audio Guide Index</a>';
			content += '<a href="#main" data-role="button" data-icon="home" data-iconpos="right" data-transition="flip">Back to Home</a>';
			content += '</div>';
			content += '</div>';
		}
	}

	$("#guide_index").after(content);
	


	
});



