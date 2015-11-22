var serviceName = 'HomeService';

fcSocialApp.factory(serviceName, function($http) {

	// TODO add a rest call to get the events
	var event1 = {
		"headline" : "Event upcoming",
		"description" : "This event is regarding the use of green materials for all" + 
						"the celebrations of Arsenal Bangalore",
		"startdate" : "25th Aug 2015",
		"starttime" : "10:00 AM",
		"enddate" : "25th Aug 2015",
		"endtime" : "11:00 PM"
	};

	var event2 = {
		"headline" : "Be a gunner, be a runner",
		"description" : "This event is a marathon organised by Arsenal Bangalore in parallel " + 
						"to the marathon organised in North London by Arsenal Football Club. " + 
						"In this marathon in London, people run around the emirates 5 rounds. " + 
						"People of all age groups participate.",
		"startdate" : "25th Aug 2015",
		"starttime" : "10:00 AM",
		"enddate" : "25th Aug 2015",
		"endtime" : "11:00 PM"
	};

	var event3 = {
		"headline" : "ARS vs NEW Match Screening",
		"description" : "We will be screening the match live at Dug out. " + 
						"All the gooners around the town, make way to the DUG out this weekend.",
		"startdate" : "25th Aug 2015",
		"starttime" : "10:00 AM",
		"enddate" : "25th Aug 2015",
		"endtime" : "11:00 PM"
	};
	
	var event4 = {
		"headline" : "ARS vs MUN Match Screening",
		"description" : "We will be screening the match live at Dug out. " + 
						"All the gooners around the town, make way to the DUG out this weekend.",
		"startdate" : "25th Aug 2015",
		"starttime" : "10:00 AM",
		"enddate" : "25th Aug 2015",
		"endtime" : "11:00 PM"
	};

	var events = [];
	events.push(event1);
	events.push(event2);
	events.push(event3);
	events.push(event4);

	return {
		getFixtures : function() {
			return $http.get('mock-data/sample-fixtures.json')
			.success(function(data) {
	       		return data;
	   		})
	   		.error(function( data ) {
	   			console.log('Failed to load the JSON');
	   		});
		},

		getEvents : function() {
			return events;
		},

		getFeeds : function() {
			return $http.get('mock-data/sample-feeds.json')
			.success(function(data) {
	       		return data;
	   		})
	   		.error(function( data ) {
	   			console.log('Failed to load the JSON');
	   		});
		}
	};
});