$(".edit").keyup(function() {
	// this should keep all of the contenteditable spans up to date
	// only edits the ones that aren't currently being edited to keep the cursor from bugging out
	$(".edit").not(this).text($(this).text());
});