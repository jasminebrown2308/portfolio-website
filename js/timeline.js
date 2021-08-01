let allData = {"years": [
	{"year": 2021, "events": [
		{"month": 7, "endMonth": "", "endYear": "", "category": ["workexp", "jobs"],
		"title": "📱&emsp;Started as an app developer intern at Otium Circle",
		"description": "Despite having no prior app development experience, I learnt to develop mobile apps for iOS and Android and developed new features for the startup's app, including a magazine to drive community engagement and provide entertainment within the app."},
		{"month": 7, "endMonth": "", "endYear": "", "category": ["workexp", "jobs"],
		"title": "👩‍💻&emsp;Became a web assistant at Warwick Students' Union",
		"description": "As a member of the Communications & Marketing team, my role entails adding pages, events and news articles to the SU website, updating existing content and creating email templates."},
		{"month": 6, "endMonth": "", "endYear": "", "category": ["extra", "workexp"],
		"title": "💻&emsp;Joined WarwickTECH",
		"description": "Became an Associate at WarwichTECH, a student-led angel fund and tech hub at the University of Warwick."},
	]},
	{"year": 2020, "events": [
		{"month": 1, "endMonth": 11, "endYear": 2020, "category": ["jobs"],
		"title": "📐&emsp;Started Maths tutoring",
		"description": "I was a GCSE Maths (and sometimes Science) tutor, which involved planning and preparing lessons, explaining topics in a simplified way, and giving advice for exam and revision techniques."},
		{"month": 9, "endMonth": "", "endYear": "", "category": ["education"],
		"title": "🎓&emsp;Joined the University of Warwick",
		"description": "Began my first year at Warwick, studying BSc Computer Science."},
		{"month": 9, "endMonth": "", "endYear": "", "category": ["jobs"],
		"title": "🥤&emsp;Started working at the Mixing Jug",
		"description": "Became an Events Catering Assistant at a smoothie and coffee bar, where I was part of a small team serving high volumes of customers at busy events."}
	]},
	{"year": 2019, "events": [
		{"month": 9, "endMonth": 8, "endYear": 2018, "category": ["jobs"],
		"title": "☕️&emsp;Began working at Mote Park Café",
		"description": "While I was in sixth form, I had a weekend and summer job as a Café Assistant at Mote Park, which involved preparing and serving food and drinks, working on the tills, and keeping the café clean, tidy and stocked up. As part of the role, in December 2019 I also helped with catering for the Christmas at Bedgebury event at Bedgebury Café."},
		{"month": 7, "endMonth": 7, "endYear": 2019, "category": ["workexp"],
		"title": "🔥&emsp;Work placement at Firemind",
		"description": "I worked alongside a designer and web developer to create simple web components such as animated forms and navigation bars using HTML, CSS and basic JavaScript." }
	]},
	{"year": 2018, "events": [
		{"month": 9, "endMonth": 8, "endYear": 2020, "category": ["education"],
		"title": "📘&emsp;Started A Levels",
		"description": "I took A Levels in Maths, Physics, Computer Science and Further Maths, plus an EPQ on the topic 'How can machine learning be applied to reduce crime?'. I achieved grades A*A*A*A and an A* in my EPQ."},
		{"month": 10, "endMonth": 4, "endYear": 2019, "category": ["workexp"],
		"title": "🐆&emsp;Work placement at Cougar Automation",
		"description": "This was a 6-month work experience placement every Wednesday afternoon where I worked on the SCADA user interface for a water treatment plant and helped to set up Profibus networks as well as helping with various tasks around the office."}
	]},
	{"year": 2017, "events": [
		{"month": 10, "endMonth": 4, "endYear": 2019, "category": ["jobs"],
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
		"description": "Joined my secondary school, where I stayed for 7 years (including sixth form). During my time at Invicta, I was involved in many clubs and activities including music, debating and peer mentoring as well as completing my Bronze and Silver Duke of Edinburgh's awards."}
	]},
	{"year": 2011, "events": [
		{"month": 9, "endMonth": "", "endYear": "", "category": ["extra"],
		"title": "🎷&emsp;Started learning saxophone",
		"description": "In Year 5, I started learning to play the alto saxophone. I continued having lessons for over 7 years until I reached Grade 8, and then kept playing in my school orchestra and Big Band where I performed at many school concerts and other events."},
	]},
	{"year": 2009, "events": [
		{"month": 9, "endMonth": 7, "endYear": 2017, "category": ["extra"],
		"title": "👯‍♀️&emsp;Joined Directions Performing Arts",
		"description": "Started learning Ballet, Tap and Modern (and, later on, Pointe) at Directions. This included performing in shows at the Hazlitt Theatre plus many local fayres and other events. I also achieved Grade 5 Tap, Ballet and Modern with Distinctions."}
	]}
]};
let selectedData = allData;

$(function() {
	showCVData(allData, false);
});

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

function categorySelect(clicked) {
	selectedData = {"years": []};
	const categories = ["education", "workexp", "jobs", "extra"]
	let selectedCategories = [];
	for (let i = 0; i < 4; i++) {
		if ($("#"+categories[i]+"-checkbox").is(":checked")) { // for each category to show, add all
			selectedCategories.push(categories[i]);
		}
	}
	for (let y = 0; y < allData.years.length; y++) {
		let yearData = allData.years[y];
		let year = yearData.year;
		let yearEvents = [];
		for (let e = 0; e < yearData.events.length; e++) {
			let eventData = yearData.events[e];
			if (eventData.category.filter(value => selectedCategories.includes(value)).length > 0) {
				yearEvents.push(eventData);
			}
		}
		if (yearEvents.length > 0) {
			selectedData.years.push({"year": year, "events": yearEvents});
		}
	}
	$(".year-container").remove();

	showCVData(selectedData, !expand());
}

function showCVData(cvData, showDetails) {
	$("#categories").css("height", $("#cv-download-btn").outerHeight());

	cvData.years.sort(sortDescYear);

	// Iterate through each year in cvData
	for (let y = 0; y < cvData.years.length; y++) {
		let yearData = cvData.years[y];
		let year = yearData.year;
		yearData.events.sort(sortDescMonth);
		$("#years").append("<div class='year-container'><div class='year' id='year"+year+"'><h3>"+year+"</h3></div><div class='content' id='content"+year+"'></div></div>");

		// Iterate through each event in the year
		for (let e = 0; e < yearData.events.length; e++) {
			let eventData = yearData.events[e];
			$("#content"+year).append("<p class='event-title' id='"+year+"_"+e+"'>"+eventData.title+"</p>");
			if (!showDetails) {
				showDescription(year, e, eventData);
			}

			// Toggle whether description is shown when event title is clicked
			$("#"+year+"_"+e).click(function() {
				if ($("#desc"+year+"_"+e).length) { // if description is shown then hide it
					$("#desc"+year+"_"+e).remove();
				}
				else { // if description is hidden then show it
					showDescription(year, e, eventData);
				}
				updateHeight(year);
			});
		}
		updateHeight(year);
	}

	// Animates the change in height
	if (showDetails) {
		for (let y = 0; y < cvData.years.length; y++) {
			let yearData = cvData.years[y];
			for (let e = 0; e < yearData.events.length; e++) {
				let eventData = yearData.events[e];
				showDescription(yearData.year, e, eventData);
			}
			updateHeight(yearData.year);
		}
	} else {
		for (let y = 0; y < cvData.years.length; y++) {
			let yearData = cvData.years[y];
			for (let e = 0; e < yearData.events.length; e++) {
				$("#content"+yearData.year+ " .event-description").remove();
			}
			updateHeight(yearData.year);
		}
	}
}

function showDescription(year, e, eventData) {
	// $("#"+year+"_"+e).after("<p class='event-dates' id='dates"+year+"_"+e+"'>"+eventData.month+" "+year+" - "+endDateText(eventData.endMonth, eventData.endYear)+"</p>");
	$("#"+year+"_"+e).after("<p class='event-description' id='desc"+year+"_"+e+"'>"+eventData.description+"</p>");
}

function updateHeight(year) {
	let height = 10;
	$("#content"+year + " .event-title").each(function() {
		height += $(this).outerHeight() + 10;
	});
	$("#content"+year + " .event-description").each(function() {
		height += $(this).outerHeight() + 15;
	});

	$("#content"+year).css("height", height+"px");
	$("#year"+year).css("height", height+"px");
}

function toggleExpand() {
	$(".year-container").remove();
	if (expand()) {
		showCVData(selectedData, true);
		$("#expand-arrow").removeClass("fa-chevron-down");
		$("#expand-arrow").addClass("fa-chevron-up");
		$("#expand-txt").html("Hide details");
	} else {
		showCVData(selectedData, false);
		$("#expand-arrow").removeClass("fa-chevron-up");
		$("#expand-arrow").addClass("fa-chevron-down");
		$("#expand-txt").html("Expand all");
	}
}

/* Returns true if the button currently displays the option to 'expand all', otherwise returns false ('hide details') */
function expand() {
	if ($("#expand-arrow").hasClass("fa-chevron-down")) {
		return true;
	} else {
		return false;
	}
}

function endDateText(monthNum, year) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if (monthNum == "") return "present";
	return months[monthNum-1] + " " + year;
}
