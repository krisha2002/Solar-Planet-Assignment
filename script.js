document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".projects-btn button");
	const projectContainer = document.querySelector(".project-location");

	const projects = {
		"Electric Safety Audit": [
			{
				location: "Mumbai",
				company: "Parle Agro",
				description: "150 KW Solar Maintenance",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
			{
				location: "Delhi",
				company: "Green Energy Ltd",
				description: "50 KW Safety Check",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
		],
		"Solar EPC": [
			{
				location: "Rajasthan",
				company: "Mahindra Sustain",
				description: "10 MW Solar Installation",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
			{
				location: "Bangalore",
				company: "Eco Solutions",
				description: "500 KW Solar Plant",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
		],
		"Solar Maintenance": [
			{
				location: "Bhandup",
				company: "MCGM Water Treatment Plant",
				description: "2.5 MW Solar Maintenance",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
			{
				location: "Kolkata",
				company: "Sunlight Solutions",
				description: "100 KW Panel Maintenance",
				img: "/img/becdf850f739e7d15103a0beb09eda00.jpeg",
			},
		],
	};

	function load(category) {
		projectContainer.innerHTML = "";
		projects[category].forEach((project) => {
			const projectCard = `
                <div class="project-card">
                    <img src="${project.img}" class="project-img" alt="${project.company}">
                    <h3>${project.location}</h3>
                    <h2>${project.company}</h2>
                    <p>${project.description}</p>
                </div>
            `;
			projectContainer.innerHTML += projectCard;
		});
	}

	tabs.forEach((tab) => {
		tab.addEventListener("click", function (event) {
			event.preventDefault();
			const select = this.textContent;
			load(select);
		});
	});
});
