export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/laptop.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a big project using Whisper AI",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "AI Chat bot",
        des: "Explore the wonders of my AI ChatBot.",
        img: "/Ai.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://chatbot-ai-nine-omega.vercel.app",
    },
    // {
    //     id: 2,
    //     title: "Yoom - Video Conferencing App",
    //     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    //     img: "/p2.svg",
    //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    //     link: "https://github.com/adrianhajdin/zoom-clone",
    // },
    // {
    //     id: 3,
    //     title: "AI Image SaaS - Canva Application",
    //     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //     img: "/p3.svg",
    //     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //     link: "https://github.com/adrianhajdin/ai_saas_app",
    // },
    // {
    //     id: 4,
    //     title: "Animated Apple Iphone 3D Website",
    //     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //     img: "/p4.svg",
    //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //     link: "https://github.com/adrianhajdin/iphone",
    // },
];

export const testimonials = [
    {
        quote:
            "JavaScript is the duct tape of the internet. It’s powerful, but you have to use it wisely. A good developer understands when to write less code, not more. Simplicity and maintainability should always come first, no matter how tempting it is to over-engineer a solution.",
        name: "Brendan Eich",
        title: "Creator of JavaScript",
        img:"/brenden.jpg",
    },
    {
        quote:
            "A great developer is not the one who writes the most code, but the one who finds the simplest solution. Performance and efficiency matter, but so does readability. The best code is the one that other developers can understand, modify, and build upon without frustration.",
        name: "Addy Osmani",
        title: "Engineering Manager at Google",
        img:"/addy.jpg",

    },
    {
        quote:
            "Progressive enhancement isn’t just about browsers, it’s about users. Every user deserves a good experience, regardless of the device or network they are on. Building resilient, accessible, and adaptable applications ensures that no one is left behind.",
        name: "Jeremy Keith",
        title: "Web Developer & Author",
        img:"/jeremy.png",

    },
    {
        quote:
            "Design is not just what it looks like and feels like. Design is how it works. A well-designed UI should guide the user effortlessly, making interactions intuitive. The best interfaces feel natural, reducing cognitive load and keeping users engaged without frustration.",
        name: "Steve Jobs",
        title: "Co-founder of Apple",
        img:"/steve2.jpeg",

    },
    {
        quote:
            "Accessibility is not just about disability; it's about making your site usable for everyone. The web should be inclusive by default, ensuring that all users, regardless of ability, can navigate and interact without barriers. Small accessibility improvements can make a huge difference in user experience.",
        name: "Lea Verou",
        title: "CSS Expert & W3C Invited Expert",
        img:"/lea.jpg",

    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend developer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    // {
    //     id: 2,
    //     title: "Mobile App Dev - JSM Tech",
    //     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp2.svg",
    // },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp3.svg",
    // },
    {
        id: 4,
        title: "Database Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/AntarAlmaawiy", // Replace with your GitHub link
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/antar_almaawiy?s=21&t=1D91FdMvtsFnkGNMtBSFvw", // Replace with your Twitter link
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://ca.linkedin.com/in/antar-mohamed-ali-183898230", // Replace with your LinkedIn link
    },
];
