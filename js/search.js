$(function() {
	// searches through states
	$('#states_query').fastLiveFilter('#states_list');

	$('#states_query').keydown(function() {
		setTimeout(function(){
			var tabindex = 2;
			$("#states_list li").each(function(index) {
				var name = $(this).text().toLowerCase();
				name = name.replace(" ", "_");

				if ($(this).css("opacity") == "0" && $("#map #"+name).css("opacity") != "0") {
					// console.log(index + ": " + name);
					$("#map #"+name).css("opacity", "0");
					$("#webpages #"+name+"_page").attr('tabindex', -1);
				}
				if ($(this).css("opacity") != "0") {
					// console.log(index + ": " + name);
					$("#map #"+name).css("opacity", "1");
					$("#webpages #"+name+"_page").attr('tabindex', tabindex++);
				}
			});
		}, 10);
	});

	$('#webpages a').focus(function() {
		var name = this.id;
		name = name.slice(0, -5);
		$("#map #" + name + "_highlight").css("display", "block");
		// console.log("Focused on " + name);
	});
	$('#webpages a').blur(function() {
		var name = this.id;
		name = name.slice(0, -5);
		$("#map #" + name + "_highlight").css("display", "none");
		// console.log("Focused off " + name);
	});
});
