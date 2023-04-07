import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	thuythu,
	fffsolution,
	nms,
	maqro,
	maqroWeb,
	maqroPortal,
	webrank,
	rohan,
	stephen,
	oldPortfolio,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
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
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "UX/UI Designer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Wordpress Developer",
		company_name: "Thuy Thu Agency",
		icon: thuythu,
		iconBg: "#E6DEDD",
		date: "Oct 2017 - Oct 2018",
		description: "One of the leading Vietnam company in creating high demand e-commerce websites, branding and content creation. Providing over 500+ successful website projects, 200+ branding projects for customers from multiple industry.",
		points: ["Designing and creating responsive websites in accordance to SEO Standards", "Managing multiple Wordpress projects utilizing website tool-builder"],
	},
	{
		title: "Frontend Developer",
		company_name: "NETA",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Nov 2018 - Apr 2019",
		description: "Start-up company with young and passionate talents, specializing in creating landing pages and website development.",
		points: ["Creating and designing responsive, mobile first landing pages.", "Configuring and improving website technical aspects such as HTML, Tags, Word count in accordance to SEO standards.", "Creating website layouts and templates using Adobe Photoshop and Illustrator"],
	},
	{
		title: "Frontend Developer",
		company_name: "3F Solutions",
		icon: fffsolution,
		iconBg: "#011248",
		date: "Jun 2019 - Sep 2021",
		description:
			"One of the top web development company in Ho Chi Minh and officially partnered with Google. Specializing in Google search engine advertising and website analytics such as website speed, rankings, traffics, keywords, SEO, website competitors. 3F Solutions also provides a wide range of digital tools and web applications to improve productivity, marketing for thousands of clients connecting to their customers across multiple popular social platforms such as Facebook, Tiktok and Youtube.",
		points: [
			"Developing web applications using JavaScript, Nodejs and Js frameworks (React).",
			"Developing RESTful API.",
			"Testing, quality checking and fixing API, web applications.",
			"Maintaining digital tools, applications and solving customer queries. ",
			"Actively participating in designing process for new applications and digital products.",
		],
	},
	{
		title: "Web Developer/UX UI Designer",
		company_name: "New Motion Studio, Parramatta, Sydney",
		icon: nms,
		iconBg: "#191c1e",
		date: "Aug 2022 - Nov 2022",
		description: "Specializing in UX/UI, design, branding, advertising and web development. A full service digital agency, delivering top-tier solutions for companies of all sizes. Please contact me for a recommendation letter from the managing director.",
		points: ["Designing website using CMS Webflow, Figma, Sketch. ", "Strong skillset in SEO, web development and deploying digital products."],
	},
	{
		title: "Fullstack Developer",
		company_name: "Maqro, Sydney",
		icon: maqro,
		iconBg: "#1957c1",
		date: "Jan 2023 - Mar 2023",
		description: "An investment company. Maqro is one of Australia leading investment research, trading and advisory firms. Please contact me for a recommendation letter from the head of operations.",
		points: [
			"Developing and maintaining web applications using Next.js, React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Propose and Performing upgrades from legacy to new code structure, including data caching on client side using Redux/Redux toolkit/RTK Query",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"As a passionate developer, Steve has always worked diligently to help improve our internal processes. Ever since he joined our team in, Steve has made a material contribution to the success of our web development department. Steve is a diligent and hard worker. His work ethic, moral compass and attitude is exemplary. In his work, he always displays exceptional organizational skills, neat and thoughtful code construction and is proactive in communication.",
		name: "Stephen Hanna",
		designation: "Managing Partner",
		company: "Corporate Advantage",
		image: stephen,
	},
	{
		testimonial: "Steve is an exceptional front-end software developer with the technical skills, attention to detail, and collaborative mindset necessary to deliver outstanding results. I wholeheartedly recommend him for any front-end development role.",
		name: "Rohan Jetha",
		designation: "Head of Operations",
		company: "Maqro",
		image: rohan,
	},
];

const projects = [
	{
		name: "Maqro Website",
		description: "Web-based platform that allows users to search for various investment topics and to showcase the best of Maqro investment firm. The project utilized nextjs framework to bring out best user experience and improving SEO thanks to SSR (server side render)",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "strapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: maqroWeb,
		source_code_link: "https://www.maqro.com.au/",
	},
	{
		name: "Maqro portal",
		description:
			"The project involves the development of a web application that empowers users to track the stock market in real time through various paid tiers. This application leverages the capabilities of Redux, Redux Toolkit, and RTK Query to efficiently manage and cache data on the client side, thereby ensuring a seamless user experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "redux/RTK Query",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: maqroPortal,
		source_code_link: "https://portal.maqro.com.au/dashboard",
	},
	{
		name: "Webrank Vietnam",
		description: "Web application that allows users to compare and contrast between different websites based on certain metrics such as values, traffics and so on",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
			},
			{
				name: "Jquery",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: webrank,
		source_code_link: "https://webrank.vn/rank/lazada.vn?&lang=us",
	},
	{
		name: "Old Portfolio",
		description: "Old portfolio that uses GSAP animation library to create cool looking effects",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
			},
			{
				name: "Webflow",
				color: "blue-text-gradient",
			},
			{
				name: "GSAP",
				color: "blue-text-gradient",
			},
			{
				name: "Jquery",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: oldPortfolio,
		source_code_link: "https://steve-hqn-portfolio-v2.webflow.io/",
	},
];

export { services, technologies, experiences, testimonials, projects };
