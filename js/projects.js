let allProjects = [
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
	},
	{
		"id": "tappyography",
		"title": "[In Progress] AI Tap Choreography System",
		"subtitle": "Web Application",
		"type": "web-project",
		"dates": "June 2022 - March 2023",
		"description": ""
	},
];

var projectN = 0;

$(function() {
	createProjects();
});

function createProjects() {
	let mainProject = allProjects[projectN];
	let projectObjs = [];

	allProjects.forEach(function(project, index) {
		currentProject = '<div class="project" id="proj'+index+'">'
			+'<div class="proj-img-container">'
			+'<img class="proj-img" src="'+getImageSrc(project)+'" /></div>'
			+'<h3 class="proj-title">'+project.title+'</h3>'
			+'<h4 class="proj-main-subtitle">'+project.subtitle+'</h4>'
    	projectObjs.push(currentProject);
	})

	$("#projects-container").append(projectObjs);

	setProjectPositions(0);
}

function setProjectPositions(projectNum) {
	const prev1Num = getPrev(projectNum);
	const next1Num = getNext(projectNum);
	const prev2Num = getPrev(prev1Num);
	const next2Num = getNext(next1Num);

	const main = $("#proj"+projectNum);
	const prev1 = $("#proj"+prev1Num);
	const prev2 = $("#proj"+prev2Num);
	const next1 = $("#proj"+next1Num);
	const next2 = $("#proj"+next2Num);

	main.css({
		"width": "50vw",
		"transform": "translateX(-50%)",
		"z-index": 2,
		"opacity": 1,
	}).attr({
		"class": "project main",
		"onclick": "expandProject("+projectNum+")"
	});

	prev1.css({
		"opacity": 0.5,
		"z-index": 1,
		"transform": "translateX(-60%) scale(0.95)",
	}).attr({
		"class": "project prev1",
		"onclick": "setProjectPositions("+prev1Num+")"
	})

	prev2.css({
		"opacity": 0.25,
		"z-index": 0,
		"transform": "translateX(-70%) scale(0.9)",
	}).attr({
		"class": "project prev2",
		"onclick": "setProjectPositions("+prev2Num+")"
	})

	next1.css({
		"opacity": 0.5,
		"z-index": 1,
		"transform": "translateX(-40%) scale(0.95)",
	}).attr({
		"class": "project next1",
		"onclick": "setProjectPositions("+next1Num+")"
	})

	next2.css({
		"opacity": 0.25,
		"z-index": 0,
		"transform": "translateX(-30%) scale(0.9)",
	}).attr({
		"class": "project next2",
		"onclick": "setProjectPositions("+next2Num+")"
	})

	if (allProjects.length > 5) {
		visibleProjects = [projectNum, prev1Num, prev2Num, next1Num, next2Num];
		allProjects.map((proj, index) => index).filter(x => !visibleProjects.includes(x)).forEach(function(i) {
			$("#proj"+i).css({
				"opacity": 0,
				"transform": "translateX(-50%) scale(0.9)"
			});
		});
	}

}

function expandProject(projectNum) {
	console.log(allProjects[projectNum].id);

}

/** Utility functions **/
function getImageSrc(project) {
	return "images/" + project.id + "/" + project.image;
}

function nextProject() {
	projectN = getNext(projectN);
	setProjectPositions(projectN);
}

function prevProject() {
	projectN = getPrev(projectN);
	setProjectPositions(projectN);
}

function getNext(projectNum) {
	projectNum += 1;
	if (projectNum >= allProjects.length) {
		return 0;
	}
	return projectNum;
}

function getPrev(projectNum) {
	projectNum -= 1;
	if (projectNum < 0) {
		return allProjects.length-1;
	}
	return projectNum;
}


