/**
 * INDEX PAGE JAVASCRIPT
 */

$(document).ready(function() {

	$("#yourButtonId").click(function() {

		// OBJECT
		var User = {
			id : '',
			name : '',
			email : '',
			phoneNumber : '',
			department : '',
			createdOn : ''
		};
		/*
		 * {userId}= replace with the userId of the account to update
		 * POST URL /UserUpdate/{userId}  
		 */
		
		$.ajax({
			url : "/UserUpdate/0",
			data : JSON.stringify(User),
			type : "POST",
			contentType : "application/json",
			dataType : 'json',
			success : function(result) {
				
			},
			error : function(e) {
				console.log("ERROR: ", e);
			}
		});	

	});

});