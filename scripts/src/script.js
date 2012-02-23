$(document).ready(function() {
  $("#start").click(function() {
	var one = $("#1").val();
	var two = $("#2").val();
	var spot1 = new Spotter("twitter.search", 
					{q:one, period:10, lang:"en"},
					{buffer:true, bufferTimeout:750}
					);
	var spot2 = new Spotter("twitter.search", 
					{q:two, period:10, lang:"en"},
					{buffer:true, bufferTimeout:750}
					);
	var oneCount = 0;
	var twoCount = 0;
	spot1.register(function(tweet) {
		var profile_image = "<img src='"+tweet.profile_image_url+"'/>";
		var twit = $("<p>'"+profile_image+tweet.text+"'</p>");
		twit.hide();
		$("#tweets1").prepend(twit);
		twit.slideDown();
		oneCount = oneCount + 1;
		$("#tweets1 p:gt(4)").fadeOut(200, function() {
	    		$("#tweets1 p:gt(4)").remove();
		});		
		var objectToRemove = $("#oneCo p:last-child");
		objectToRemove.remove();
		$("#oneCo").append("<p>'"+oneCount+"'</p>");
	});
	spot2.register(function(tweet) {
		var profile_image = "<img src='"+tweet.profile_image_url+"'/>";
		var twit = $("<p>'"+profile_image+tweet.text+"'</p>");
		twit.hide();
		$("#tweets2").prepend(twit);
		twit.slideDown();
		twoCount = twoCount + 1;
		$("#tweets2 p:gt(4)").fadeOut(200, function() {
	   		$("#tweets2 p:gt(4)").remove();
		});
		var objectToRemove = $("#twoCo p:last-child");
		objectToRemove.remove();
		$("#twoCo").append("<p>'"+twoCount+"'</p>");
	});
	spot1.start();
	spot2.start();	 
  });
});
