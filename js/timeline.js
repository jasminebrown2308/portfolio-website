let cvData = {"years": [
	{"year": 2009, "months": [
		{"month": 9, "monthName": "September", "monthEvents": [
			{"title": "Joined Directions Performing Arts", "endMonth": "July", "endYear": "2017", "category": ["extra"],
			"description": "I started learning Ballet, Tap and Modern (and, later on, Pointe) at Directions. This included performing in shows at the Hazlitt Theatre plus many local fayres and other events. I also achieved Grade 5 Tap, Ballet and Modern (with Distinctions)."}
		]}
	]},
	{"year": 2011, "months": [
		{"month": 9, "monthName": "September", "monthEvents": [
			{"title": "Started learning saxophone", "endMonth": "", "endYear": "", "category": ["extra"],
			"description": "Started learning to play the alto saxophone. I continued having lessons for over 7 years until I reached Grade 8, and then kept playing in my school orchestra and Big Band where I performed at many school concerts and other events."},
		]}
	]},
	{"year": 2013, "months": [
		{"month": 9, "monthName": "September", "monthEvents": [
			{"title": "Joined Invicta Grammar School", "endMonth": "March", "endYear": "2020", "category": ["education"],
			"description": "I joined my secondary school, where I stayed for 7 years (including sixth form). During my time at Invicta, I was involved in many clubs and activities including music, debating and peer mentoring as well as completing my Bronze and Silver Duke of Edinburgh's awards."}
		]}
	]},
	{"year": 2015, "months": [
		{"month": 9, "monthName": "September", "monthEvents": [
			{"title": "Started GCSEs", "endMonth": "August", "endYear": "2018", "category": ["education"],
			"description": ""}
		]}]}
]};


$( function() {
	for (let y = 0; y < cvData.years.length; y++) {
		let yearData = cvData.years[y];
		let year = yearData.year;
		let padding = yearData.months.length * 10 - 5;
		$("#year" + year).css("padding", padding + "px 5px");

		for (let m = 0; m < yearData.months.length; m++) {
			let monthData = yearData.months[m];
			console.log(monthData);
			padding += (monthData.monthEvents.length - 1) * 10;
			$("#year" + year) = 
		}

		$("#year" + yearData.year).css("padding", padding + "px 5px");
	}
})