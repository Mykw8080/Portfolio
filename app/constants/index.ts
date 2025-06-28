export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Data Visualization",
		icon: "/mobile.webp",
	},
	{
		title: "Data Analytics",
		icon: "/creator.webp",
	},
	{
		title: "Machine Learning",
		icon: "/backend.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "Python",
		icon: "/tech/python.svg",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/github.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "blender",
		icon: "/tech/blender.svg",
	},
];
const experiences = [
	{
		title: "Software Engineer",
		company_name: "Conure ITS",
		icon: "/company/conure.webp",
		iconBg: "#383E56",
		date: "2025 -  Present",
		points: [
			"Frontend Development: Built responsive and high-performance web apps using Angular and React.js, ensuring mobile compatibility and fast load times.",
			"Backend Integration: Developed RESTful APIs using Flask and FastAPI for efficient client-server communication and data management with MongoDB.",
			"Geospatial Visualization: Integrated Mapbox to deliver interactive location-based dashboards for real-time parking and vehicle tracking systems.",
			"3D Model Integration: Implemented interactive 3D models within Mapbox-powered dashboards to enhance spatial awareness and user engagement for real-time tracking systems.",
			"Data Analysis & Visualization: Utilized Python libraries such as Plotly, Seaborn, and Matplotlib to transform raw data into insightful visual dashboards.",
			"Machine Learning Application: Applied Scikit-learn models for data prediction and classification, including preprocessing and evaluation.",
			"Team Collaboration: Worked cross-functionally with offshore teams, product managers, and UX/UI designers to deploy large-scale SaaS applications in KSA and the US.",
		],
	},
	{
		title: "Junior Software Engineer",
		company_name: "Conure ITS",
		icon: "/company/conure.webp",
		iconBg: "#383E56",
		date: "2023 - 2025",
		points: [
			"Self-Taught Expertise: Gained proficiency in React.js, and Angular through independent learning and hands-on projects.",
			"Collaborative Design: Partnered with UX/UI teams and business stakeholders to gather real-world feedback and continuously iterate on user interfaces.",
			"End-to-End Website Development: Designed and developed interactive, user-friendly websites and dashboards using modern frameworks and technologies like WordPress, Angular, and Mapbox.",
			"Data-Driven UX Improvements: Incorporated real-time data visualization with Plotly and Mapbox to enhance user engagement and decision-making.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"I strongly endorse Mohid Warsi for roles in front-end development and Python developer. He delivers innovative solutions and tackles challenges with precision and creativity...",
		name: "Raheel Memon",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/mohammed-mohid/details/recommendations/?detailScreenTabIndex=0",
	},
	{
		id: 2,
		testimonial:
			"As an employer, he fosters a collaborative and growth-focused environment, supporting the team’s success. His great leadership, respectful behavior, and approachable nature...",
		name: "S.M.Ghufran Mehdi",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/mohammed-mohid/details/recommendations/?detailScreenTabIndex=0",
	},
	{
		id: 3,
		testimonial:
			"I wholeheartedly recommend Mohid Warsi for any position in Front-End development, Python Developer and Machine Learning. He consistently produces impactful and effective...",
		name: "Junaid Lodhi",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/mohammed-mohid/details/recommendations/?detailScreenTabIndex=0",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	images: string[];
	video?: string;
	source_code_link?: string;
	deploy_link: string;
	platform: ("Angular" | "Blender" | "Next" | "Tailwind" | "Web" | "Python")[];
}[] = [
		{
			name: "ParkSmart | John Hopkins Aramco Healthcare, KSA",
			description:
				"Built a real-time parking analytics platform using Angular, Mapbox, and MongoDB to visualize sensor data and monitor IoT device health, successfully deployed in Saudi Arabia.",
			tags: [
				{
					name: "Angular",
					color: "red-text-gradient",
				},
				{
					name: "Mapbox",
					color: "green-text-gradient",
				},
				{
					name: "MongoDB",
					color: "blue-text-gradient",
				},
				{
					name: "IoT",
					color: "purple-text-gradient",
				},
				{
					name: "Data Visualization",
					color: "orange-text-gradient",
				},
				{
					name: "SaaS",
					color: "pink-text-gradient",
				},
				{
					name: "Sensor Monitoring",
					color: "blue-text-gradient",
				},
				{
					name: "Real-time Analytics",
					color: "cyan-text-gradient",
				},
				{
					name: "Smart Parking",
					color: "pink-text-gradient",
				  },
			],
			images: ["/projectimg/avm.webp"],
			video: "/projectimg/User-Guidance.mp4",
			source_code_link: "",
			platform: ["Angular"],
			deploy_link: "https://jhah.conurets.com",
		},
		{
			name: "OLIOS | St. Pete Beach, USA",
			description:
				"Developed a real-time vehicle tracking and parking enforcement app using Angular, Mapbox, and LPR technology, deployed across multiple U.S. cities for live monitoring of patrols and permits.",
			tags: [
				{
					name: "Angular",
					color: "red-text-gradient",
				},
				{
					name: "Mapbox",
					color: "green-text-gradient",
				},
				{
					name: "LPR",
					color: "purple-text-gradient",
				},
				{
					name: "Real-time Tracking",
					color: "blue-text-gradient",
				},
				{
					name: "SaaS",
					color: "pink-text-gradient",
				},
				{
					name: "Geolocation",
					color: "cyan-text-gradient",
				},
				{
					name: "Vehicle Monitoring",
					color: "orange-text-gradient",
				},
				{
					name: "Parking Enforcement",
					color: "teal-text-gradient",
				},
				{
					name: "REST API",
					color: "yellow-text-gradient",
				},
				{
					name: "Urban Mobility",
					color: "lime-text-gradient",
				  },
			],
			images: ["/projectimg/OLIOS2.png", "/projectimg/OLIOS.png"],
			source_code_link: "",
			platform: ["Angular"],
			deploy_link: "https://olios-peo.conurets.com/",
		},
		{
			name: "HIVE | 3D Smart Building",
			description:
				"Designed and developed an interactive 3D building model using Angular to visualize real-time analytics from installed IoT sensors, including lighting, bin-wise waste levels, and environmental data within the structure.",
			tags: [
				{
					name: "Angular",
					color: "red-text-gradient",
				},
				{
					name: "3D Visualization",
					color: "green-text-gradient",
				},
				{
					name: "IoT Sensors",
					color: "purple-text-gradient",
				},
				{
					name: "Real-time Data",
					color: "blue-text-gradient",
				},
				{
					name: "HIVE",
					color: "orange-text-gradient",
				},
				{
					name: "WebGL",
					color: "blue-text-gradient",
				},
				{
					name: "Three.js",
					color: "pink-text-gradient",
				},
				{
					name: "Data Analytics",
					color: "teal-text-gradient",
				},
				{
					name: "Smart Building",
					color: "green-text-gradient",
				},
			],
			images: ["/projectimg/hive.png", "/projectimg/hive3.png", "/projectimg/hive2.png"],
			platform: ["Angular","Blender"],
			deploy_link: "#",
		},
		{
			name: "Spotly | Rent a Spot",
			description:
				"Developed a front-end parking rental platform using Next.js, and Tailwind, enabling users to list, rent, and manage parking spots by the hour or day with real-time availability and booking.",
			tags: [
				{
					name: "NextJS",
					color: "blue-text-gradient",
				},
				{
					name: "ReactJS",
					color: "orange-text-gradient",
				},
				{
					name: "Tailwind",
					color: "purple-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
				{
					name: "Express",
					color: "pink-text-gradient",
				},
				{
					name: "Booking System",
					color: "yellow-text-gradient",
				},
				{
					name: "Real-time Availability",
					color: "blue-text-gradient",
				},
				{
					name: "Responsive UI",
					color: "white-text-gradient",
				},
				{
					name: "Parking Rental",
					color: "pink-text-gradient",
				  },
			],
			images: ["/projectimg/spotly.png", "/projectimg/spotly2.png", "/projectimg/spotly3.png"],
			source_code_link: "",
			platform: ["Next", "Tailwind"],
			deploy_link: "#",
		},
		{
			name: "1 JOB | AI-Powered Job Searching",
			description:
				"Developed a responsive job search platform using Next.js and Tailwind CSS, allowing users to browse listings, apply instantly, and receive real-time job alerts directly on their device.",
			tags: [
				{
					name: "NextJS",
					color: "blue-text-gradient",
				},
				{
					name: "ReactJS",
					color: "orange-text-gradient",
				},
				{
					name: "Tailwind",
					color: "purple-text-gradient",
				},
				{
					name: "Postgress",
					color: "green-text-gradient",
				},
				{
					name: "FastAPI",
					color: "pink-text-gradient",
				},
				{
					name: "Python",
					color: "yellow-text-gradient",
				},
				{
					name: "Artifical Intelligence",
					color: "blue-text-gradient",
				},
				{
					name: "Responsive UI",
					color: "white-text-gradient",
				},
				{
					name: "Job Searching",
					color: "pink-text-gradient",
				},
			],
			images: ["/projectimg/1job.png", "/projectimg/1job2.png"],
			source_code_link: "",
			platform: ["Next", "Python"],
			deploy_link: "https://1jobplatform.com",
		},
		{
			name: "Smart Access Gate | Real-Time Validation",
			description:
				"Built a smart access gate system using RFID readers and Milesight people counters to detect and authorize entries. The system grants access only to valid RFID users, while triggering visual alerts (e.g., red lights) for unauthorized entries, ensuring secure and automated gate control.",
			tags: [
				{
					name: "NodeJS",
					color: "green-text-gradient",
				},
				{
					name: "ExpressJS",
					color: "blue-text-gradient",
				},
				{
					name: "RFID Integration",
					color: "orange-text-gradient",
				},
				{
					name: "IoT Devices",
					color: "purple-text-gradient",
				},
				{
					name: "Milesight",
					color: "pink-text-gradient",
				},
				{
					name: "Real-time Alerts",
					color: "red-text-gradient",
				},
				{
					name: "MQTT",
					color: "yellow-text-gradient",
				},
				{
					name: "Camera Sensors",
					color: "white-text-gradient",
				},
				{
					name: "Access Control",
					color: "blue-text-gradient",
				},
			],
			images: ["/projectimg/smg.png", "/projectimg/smg2.png"],
			source_code_link: "",
			platform: ["Angular", "Web"],
			deploy_link: "#",
		},
];

export { services, technologies, experiences, testimonials, projects };
