$(function() {
	$('#tags').selectize({
		delimiter: ',',
		persist: true,
		create: function(input) {
			return {
				value: input,
				text: input
			}
		}
	});
});