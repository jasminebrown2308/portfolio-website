let cvData = {"years": [
	{"year": 2021, "events": [
		{"month": 7, "endMonth": "", "endYear": "", "category": ["technical", "work"],
		"title": "📱&emsp;Started as an app developer intern at Otium Circle",
		"description": "Despite having no prior app development experience, I learnt to develop mobile apps for iOS and Android and developed new features for the startup's app, including a magazine to drive community engagement and provide entertainment within the app."},
		{"month": 7, "endMonth": "", "endYear": "", "category": ["technical", "work"],
		"title": "👩‍💻&emsp;Became a web assistant at Warwick SU",
		"description": "As a member of the Communications & Marketing team, my role entails adding pages, events and news articles to the SU website, updating existing content and creating email templates"},
		{"month": 6, "endMonth": "", "endYear": "", "category": ["technical", "extra"],
		"title": "💻&emsp;Joined WarwickTECH",
		"description": "Became an Associate at WarwichTECH, a student-led angel fund and tech hub at the University of Warwick."},
	]},
	{"year": 2020, "events": [
		{"month": 1, "endMonth": 11, "endYear": 2020, "category": ["work"],
		"title": "📐&emsp;Started Maths tutoring",
		"description": "I was a GCSE Maths (and sometimes Science) tutor, which involved planning and preparing lessons, explaining topics in a simplified way, and giving advice for exam and revision techniques."},
		{"month": 9, "endMonth": "", "endYear": "", "category": ["education"],
		"title": "🎓&emsp;Joined the University of Warwick",
		"description": "Began my first year at Warwick."},
		{"month": 9, "endMonth": "", "endYear": "", "category": ["work"],
		"title": "🥤&emsp;Started working at the Mixing Jug",
		"description": "Became an Events Catering Assistant at a smoothie and coffee bar, where I was part of a small team serving high volumes of customers at busy events - I took orders and payments then prepared and served healthy smoothies, coffees and snacks."}
	]},
	{"year": 2019, "events": [
		{"month": 9, "endMonth": 8, "endYear": 2018, "category": ["education"],
		"title": "☕️&emsp;Started working at Mote Park Café",
		"description": "While I was in sixth form, I had a weekend and summer holiday job as a Café Assistant at Mote Park, which involved preparing and serving food and drinks, taking orders and payments on the tills, and keeping the café clean, tidy and stocked up. In December 2019, I also helped at Bedgebury Café at the Christmas at Bedgebury festive event."},
		{"month": 7, "endMonth": 7, "endYear": 2019, "category": ["technical"],
		"title": "🔥&emsp;Work placement at Firemind",
		"description": "I worked alongside a designer and web developer to create simple web components such as animated forms and navigation bars using HTML, CSS and basic JavaScript." }
	]},
	{"year": 2018, "events": [
		{"month": 9, "endMonth": 8, "endYear": 2020, "category": ["education"],
		"title": "📘&emsp;Started A Levels",
		"description": "I took A Levels in Maths, Physics, Computer Science and Further Maths, plus an EPQ on the topic 'How can machine learning be applied to reduce crime?'. I achieved grades A*A*A*A and an A* in my EPQ."},
		{"month": 10, "endMonth": 4, "endYear": 2019, "category": ["technical"],
		"title": "🐆&emsp;Work placement at Cougar Automation",
		"description": "This was a 6-month work experience placement every Wednesday afternoon where I worked on the SCADA user interface for a water treatment plant and helped to set up Profibus networks as well as helping with various tasks around the office."}
	]},
	{"year": 2017, "events": [
		{"month": 10, "endMonth": 4, "endYear": 2019, "category": ["work"],
		"title": "🎂&emsp;Started working at Tiny Town",
		"description": "My first job was working at a children's play centre, where I led children's birthday parties as well as serving customers in the coffee shop and reception."}
	]},
	{"year": 2016, "events": [
		{"month": 10, "endMonth": 6, "endYear": 2017, "category": ["extra"],
		"title": "📖&emsp;Volunteered at Madginford Library",
		"description": "I volunteered at my local library as part of my Duke of Edinburgh's Award, where I ran an after-school activity club for primary school children."}
	]},
	{"year": 2015, "events": [
		{"month": 9, "endMonth": 8, "endYear": 2018, "category": ["education"],
		"title": "📗&emsp;Started GCSEs",
		"description": "For my GCSEs, I took Maths (9), Biology (9), Chemistry (9), Physics (9), English Language (8), English Literature (7), Computer Science (9), French (9), Geography (9), Textiles Technology (A*) and Level 2 Further Maths (A^)."}
	]},
	{"year": 2013, "events": [
		{"month": 9, "endMonth": 3, "endYear": 2020, "category": ["education"],
		"title": "📕&emsp;Joined Invicta Grammar School",
		"description": "I joined my secondary school, where I stayed for 7 years (including sixth form). During my time at Invicta, I was involved in many clubs and activities including music, debating and peer mentoring as well as completing my Bronze and Silver Duke of Edinburgh's awards."}
	]},
	{"year": 2011, "events": [
		{"month": 9, "endMonth": 0, "endYear": 0, "category": ["extra"],
		"title": "🎷&emsp;Started learning saxophone",
		"description": "In Year 5, I started learning to play the alto saxophone. I continued having lessons for over 7 years until I reached Grade 8, and then kept playing in my school orchestra and Big Band where I performed at many school concerts and other events."},
	]},
	{"year": 2009, "events": [
		{"month": 9, "endMonth": 7, "endYear": 2017, "category": ["extra"],
		"title": "👯‍♀️&emsp;Joined Directions Performing Arts",
		"description": "I started learning Ballet, Tap and Modern (and, later on, Pointe) at Directions. This included performing in shows at the Hazlitt Theatre plus many local fayres and other events. I also achieved Grade 5 Tap, Ballet and Modern with Distinctions."}
	]}
]};

// Sort functions - ensures the timeline is ordered no matter what order events are added in
function sortDescYear(obj1, obj2) {
	if (obj1.year > obj2.year) {
		return -1;
	} else if (obj1.year == obj2.year) {
		return 0;
	} else {
		return 1;
	}
}

function sortDescMonth(obj1, obj2) {
	if (obj1.month > obj2.month) {
		return -1;
	} else if (obj1.month == obj2.month) {
		return 0;
	} else {
		return 1;
	}
}

$( function() {
	cvData.years.sort(sortDescYear);
	for (let y = 0; y < cvData.years.length; y++) {
		let yearData = cvData.years[y];
		let year = yearData.year;
		let padding = yearData.events.length * 20 - 15;

		yearData.events.sort(sortDescMonth);

		$("#years").append("<div class='year-container'><div class='year' id='year"+year+"'><h3>"+year+"</h3></div><div class='content' id='content"+year+"'></div></div>");
		$("#year"+year).css("padding", padding+"px 5px");

		for (let e = 0; e < yearData.events.length; e++) {
			let eventData = yearData.events[e];
			console.log(eventData);
			$("#content"+year).append("<p class='event-title' id='"+year+"_"+e+"'>"+eventData.title+"</p>");
			$("#"+year+"_"+e).click(function() {
				if ($("#desc"+year+"_"+e).length) {
					$("#desc"+year+"_"+e).remove();
					$("#year"+year).css("padding", padding+"px 5px");
				} else {
					$(".event-description").remove();
					$("#year"+year).addClass('notransition'); // disable transitions
					for (let i = 0; i < cvData.years.length; i++) { // reset all padding to what it should be
						let padding = cvData.years[i].events.length * 20 - 15;
						$("#year"+cvData.years[i].year).css("padding", padding+"px 5px");
					}

					$("#year"+year)[0].offsetHeight;
					$("#year"+year).removeClass('notransition');
					
					$("#"+year+"_"+e).after("<p class='event-description' id='desc"+year+"_"+e+"'>"+eventData.description+"</p>");

					let padding = $("#year"+year).css("padding-top");
					let newPadding = parseInt(padding.slice(0, -2)); // get numerical value of padding by removing 'px' and converting to an integer
					newPadding += ($("#desc"+year+"_"+e).height() / 2);
					$("#year"+year).css("padding", newPadding+"px 5px");
				}
			});
		}
	}
})