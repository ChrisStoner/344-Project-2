$(document).ready(function() {
  $("#start").click(function() {
	var spot = new Spotter("twitter.search", 
					{q:"love", period:60, lang:"en"},
					{buffer:true, bufferTimeout:750}
					);
	var loveCount = 0;
	spot.register(function(tweet) {
		var profile_image = "<img src='"+tweet.profile_image_url+"'/>";
		var twit = $("<p>'"+profile_image+tweet.text+"'</p>");
		twit.hide();
		$("#tweets").prepend(twit);
		twit.slideDown();
		loveCount = loveCount + 1;
		var objectToRemove = $("#loveCo p:last-child");
		objectToRemove.remove();
		$("#loveCo").append("<p>'"+loveCount+"'</p>");
	});
	spot.start();	 
  });
});
