let allProjects = [
	// {
	// 	"id": "tap-choreography",
	// 	"title": "Tap Choreography System",
	// 	"subtitle": "Web Application",
	// 	"type": "web-project",
	// 	"dates": "June 2022 - March 2023",
	// 	"description": ""
	// },
	{
		"id": "mentoring-system",
		"title": "Mentoring System",
		"subtitle": "Web Application",
		"type": "web-project",
		"dates": "January - March 2022",
		"image": "1-dashboard.png",
		"technologies": ["React", "Flask", "PostgreSQL", "Python", "JavaScript", "CSS"],
	},
	{
		"id": "personal-portfolio",
		"title": "Personal Portfolio",
		"subtitle": "Website",
		"type": "web-project",
		"dates": "June 2021 - present",
		"image": "1-homepage.png",
		"technologies": ["HTML", "CSS", "JavaScript"]
	},
	{
		"id": "hello-demo",
		"title": "Mobile App Demo",
		"subtitle": "iOS & Android Application",
		"type": "app-project",
		"dates": "June 2021",
		"image": "1-select-language.png",
		"technologies": ["Swift", "Kotlin", "SwiftUI"]
	},
	{
		"id": "your-chores",
		"title": "Chore Allocation System",
		"subtitle": "Web Application",
		"type": "web-project",
		"dates": "February - March 2021",
		"image": "5-assigned-chores.png",
		"technologies": ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"]
	},
	{
		"id": "social-scheduling",
		"title": "Social Scheduling Application",
		"subtitle": "Python Prototype",
		"type": "app-project",
		"dates": "September 2019 - March 2020",
		"image": "9-join-availability.png",
		"description": "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
	}
];

// $( function() {
// 	for (var i = 0; i < allProjects.length; i++) {
// 		let currentProject = allProjects[i];
// 		let id = currentProject.id;
// 		console.log("<div class='project " + currentProject.type + "' id='" + id + ">");
// 		$("#projects-container").append("<div class='project " + currentProject.type + "' id='" + id + "'>");
// 		let container = id;
// 		if (currentProject.type == "app-project" && currentProject.image) {
// 			$("#" + id).append("<div class='right' id='" + id + "-container'>");
// 			container += "-container";
// 		}
// 		$("#" + container).append("<h3>" + currentProject.title + "</h3>");
// 		$("#" + container).append("<h4>" + currentProject.subtitle + "</h4>");
// 		if (currentProject.image) {
// 			$("#" + id).append("<img src='images/" + id + "/" + currentProject.image + "'>");
// 		}
// 	}
	
// 	$(".project").click(function() {
// 		let projectID = this.id;
// 		console.log(projectID);
// 	});
// })

var projectN = 0;
var projectNext;
var projectPrev;
setPrevNext();

$(function() {
	fillProjects();
	
	$(".project").click(function() {
		let projectID = this.id;
		console.log(projectID);
	});
});

function fillProjects() {
	let mainProject = allProjects[projectN];
	$("#proj-main-img").attr("src", getImageSrc(mainProject));
	$("#proj-main-title").text(mainProject.title);
	$("#proj-main-subtitle").text(mainProject.subtitle);
	$("#proj-next-img").attr("src", getImageSrc(allProjects[projectNext]));
}

function getImageSrc(project) {
	return "images/" + project.id + "/" + project.image;
}

function nextProject() {
	projectN = checkUpperBound(projectN+1);
	setPrevNext();
}

function prevProject() {
	projectN = checkLowerBound(projectN-1);
	setPrevNext();
}

function checkUpperBound(projectNum) {
	if (projectNum >= allProjects.length) {
		return 0;
	}
	return projectNum;
}

function checkLowerBound(projectNum) {
	if (projectNum < 0) {
		return allProjects.length-1;
	}
	return projectNum;
}

function setPrevNext() {
	projectNext = checkUpperBound(projectN+1);
	projectPrev = checkLowerBound(projectN-1);

	fillProjects();
}

