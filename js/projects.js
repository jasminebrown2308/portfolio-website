const allProjects = [
  {
    id: "mentoring-system",
    title: "Mentoring System",
    subtitle: "Web Application",
    type: "web-project",
    dates: "January - March 2022",
    image: "1-dashboard.png",
    technologies: ["React", "CSS", "Python", "Flask", "PostgreSQL"],
    description:
      "As part of my Software Engineering module in my second year, I worked on an industrial group project to design and develop a mentoring system. " +
      "My role was primarily leading the front-end implementation, which was created using ReactJS. I also assisted with parts of the back-end, particularly ensuring that the data from the Flask API matched what the front-end was expecting to receive. " +
      "The final system had various features, including: registering as a mentor or mentee; selecting from compatible mentors; arranging and signing up to larger-group workshop sessions; updating availability in a calendar; formulating plans of action; and viewing and updating profiles.",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Website",
    type: "web-project",
    dates: "June 2021 - present",
    image: "1-homepage.png",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
    description:
      "I created this website to showcase my projects and experience. The website has been coded completely from scratch, as I wanted to use the project as an opportunity to improve my web design and development skills.",
  },
  {
    id: "hello-demo",
    title: "Mobile App Demo",
    subtitle: "iOS & Android Application",
    type: "app-project",
    dates: "June 2021",
    image: "1-select-language.png",
    technologies: ["Swift", "Kotlin", "SwiftUI"],
    description:
      "This was a project that I created to teach myself app development. There are two versions: an iOS app, coded in Swift (using SwiftUI), and an Android app, written in Kotlin. " +
      "The objectives that I started with were to have two identical versions of the same app, for it to take user input and display it on the next screen, and for it to work in both portrait and landscape modes. " +
      "Ultimately, the apps are very simple: they ask for your name and language, then say hello to you in that language. However, it taught me a lot about the principles of mobile development!",
  },
  {
    id: "your-chores",
    title: "Chore Allocation System",
    subtitle: "Web Application",
    type: "web-project",
    dates: "February - March 2021",
    image: "5-assigned-chores.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"],
    description:
      "This was my first major web project. It was a coursework assignment for a university module, and I received a grade of 100%. " +
      "The web application that I created allocates chores fairly between housemates. " +
      "The allocation algorithm accounts for frequency of tasks, previously completed chores by each housemate, and the effort required for each task." +
      "I also added several bonus features, including a rating system and leaderboard to encourage tasks to be completed to a good standard.",
  },
  {
    id: "social-scheduling",
    title: "Social Scheduling Application",
    subtitle: "Python Prototype",
    type: "app-project",
    dates: "September 2019 - March 2020",
    image: "9-join-availability.png",
    technologies: ["Python", "MySQL", "Kivy"],
    description:
      "I created a mobile app to help find the best times for a group of people to meet up. The app contained functionality such as creating events, selecting possible dates and times, inviting friends, and analysing the best choices based on availability. " +
      "It even offered features such as allowing users to add a poll when creating an event (e.g. when organising a meal, you could collect votes on which restaurant to go to). " +
      "The app was coded in Python, using Kivy as a framework for the UI, and MySQL for the database.",
  },
  //   {
  //     id: "tappyography",
  //     title: "[In Progress] AI Tap Choreography System",
  //     subtitle: "Web Application",
  //     type: "web-project",
  //     dates: "June 2022 - March 2023",
  //     description: "",
  //   },
];

var projectN = 0;

$(function () {
  createProjects();
});

function createProjects() {
  let projectObjs = [];

  allProjects.forEach(function (project, index) {
    currentProject =
      '<div class="project" id="proj' +
      index +
      '">' +
      '<div class="proj-img-container">' +
      '<img class="proj-img" src="' +
      getImageSrc(project) +
      '" /></div>' +
      '<h3 class="proj-title">' +
      project.title +
      "</h3>" +
      '<h4 class="proj-subtitle">' +
      project.subtitle +
      "</h4>";
    projectObjs.push(currentProject);
  });

  $("#projects-carousel-container").append(projectObjs);

  $("#projects-background").on("click", function (e) {
    if (e.target == this) {
      closeProject();
    }
  });

  setProjectPositions(0);
}

function setProjectPositions(projectNum) {
  const prev1Num = getPrev(projectNum);
  const next1Num = getNext(projectNum);
  const prev2Num = getPrev(prev1Num);
  const next2Num = getNext(next1Num);

  const main = $("#proj" + projectNum);
  const prev1 = $("#proj" + prev1Num);
  const prev2 = $("#proj" + prev2Num);
  const next1 = $("#proj" + next1Num);
  const next2 = $("#proj" + next2Num);

  main.css({ opacity: 1, "z-index": 2, transform: "translateX(-50%) " }).attr({
    class: "project main",
    onclick: "expandProject(" + projectNum + ")",
  });

  prev1
    .css({
      opacity: 0.5,
      "z-index": 1,
      transform: "translateX(-60%) scale(0.95) ",
    })
    .attr({
      class: "project prev1",
      onclick: "setProjectPositions(" + prev1Num + ")",
    });

  prev2
    .css({
      opacity: 0.25,
      "z-index": 0,
      transform: "translateX(-70%) scale(0.9)",
    })
    .attr({
      class: "project prev2",
      onclick: "setProjectPositions(" + prev2Num + ")",
    });
  next1
    .css({
      opacity: 0.5,
      "z-index": 1,
      transform: "translateX(-40%) scale(0.95)",
    })
    .attr({
      class: "project next1",
      onclick: "setProjectPositions(" + next1Num + ")",
    });
  next2
    .css({
      opacity: 0.25,
      "z-index": 0,
      transform: "translateX(-30%) scale(0.9)",
    })
    .attr({
      class: "project next2",
      onclick: "setProjectPositions(" + next2Num + ")",
    });
  if (allProjects.length > 5) {
    visibleProjects = [projectNum, prev1Num, prev2Num, next1Num, next2Num];
    allProjects
      .map((proj, index) => index)
      .filter((x) => !visibleProjects.includes(x))
      .forEach(function (i) {
        $("#proj" + i).css({
          opacity: 0,
          transform: "translateX(-50%) scale(0.9)",
        });
      });
  }

  setModalDetails(projectNum);
}

function setModalDetails(projectNum) {
  const proj = allProjects[projectNum];
  $("#projects-modal .proj-title").text(proj.title);
  $("#projects-modal .proj-subtitle").text(proj.subtitle);
  $("#projects-modal .proj-description").text(proj.description);
  $("#projects-modal .proj-tags").empty();
  for (const tag in proj.technologies) {
    $("#projects-modal .proj-tags").append(
      "<li>" + proj.technologies[tag] + "</li>"
    );
  }
}

function expandProject(projectNum) {
  console.log(allProjects[projectNum].id);
  $("#projects-background").css({ opacity: 1, "z-index": 3 });
}

function closeProject() {
  $("#projects-background").css({ opacity: 0, "z-index": -1 });
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
    return allProjects.length - 1;
  }
  return projectNum;
}
