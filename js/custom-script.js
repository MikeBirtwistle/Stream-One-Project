$(document).ready(function() {
	
	/* Script to fix bootstrap collapsing nav bar error. Nav bar now closes after a link is clicked. */
	
	$(document).on('click', '.navbar-collapse.in', function(e) {
		if( $(e.target).is('a') ) {
		$(this).collapse('hide');
		}
	});

});