import { type contactFormItem, type CtaItem, type faqPageItem, type FeatureIntegrationsSection, type FeaturePageItem, type FeatureStepItem, type ProcessCardItem } from "../types/configDataTypes";

const contactData: contactFormItem = {
    title: "Contact Us",
    subtitle: "We're here to help you",
    description: "We're here to help you with any questions you may have. Please fill out the form below and we'll get back to you as soon as possible.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    reason: "Reason for contacting us",
    submitButtonText: "Submit",
};

// note: 1 level of dropdown is supported
const ctaData: CtaItem = {
    title: "Let's discuss your next big development project",
    description:
        "Let's schedule a call to discuss how our web and software development services can accelerate your digital growth.",
    buttonText: "Schedule a call",
};

// replace this data with whatever you want in your FAQ section
const faqData: faqPageItem = {
    title: "We are here to help",
    faqItems: [
        {
            question: "Where are you located?",
            answer: "We are a Quebec-based company operating on the South Shore of Montreal. Our office is located in St-Hyacinthe.",
        },
        {
            question: "What types of web services do you offer?",
            answer: "We offer a complete range of software development services, including website creation, custom application development, and existing system maintenance. We specialize in customized projects to meet the specific needs of our clients, whether they are businesses or individuals.",
        },
        {
            question: "How can I contact you?",
            answer: "You can reach us by email at info@shine-one-software.com. We are always available to discuss your projects and software development needs.",
        },
        {
            question: "Do you provide hosting services?",
            answer: "Yes, we offer hosting services for your applications and websites. We ensure that your solutions are hosted securely and perform optimally.",
        },
        {
            question: "Do you work with existing projects or legacy code?",
            answer: "Absolutely! We have the expertise to work with existing projects and legacy code. We can modernize, maintain, or improve your current systems while preserving their essential functionality.",
        },
        {
            question: "What types of clients do you work with?",
            answer: "We work with a diverse clientele, including businesses of all sizes, startups, non-profit organizations, and individuals. Each project receives the same attention to detail and commitment to excellence.",
        },
        {
            question: "What is your work process?",
            answer: "Our process begins with an in-depth consultation to understand your needs. We then develop a detailed proposal, followed by an iterative development phase with regular checkpoints. We also provide ongoing support after deployment.",
        }
    ],
};

const featuresData: FeaturePageItem = {
    featuresCardsSection: {
        heading: "Solutions",
        title: "Our solutions",
        subtitle: "Shine One Software is your trusted partner for all your digital needs, we offer a wide range of solutions to fit your needs.",
        items: [
            {
                icon: "tabler/api-app",
                title: "Strategic Digital Solutions",
                text: " Beyond just code, we craft websites and software deeply aligned with your business goals, ensuring every digital asset contributes to your success.",
            },
            {
                icon: "tabler/brand-html5",
                title: "Custom Web Development",
                text: "From stunning marketing sites to powerful web applications, we build online presences perfectly tailored to your brand and objectives.",
            },
            {
                icon: "tabler/app-window",
                title: "Bespoke Software Solutions",
                text: "Streamline your operations, automate processes, and innovate with custom software designed to solve your unique business challenges.",
            },
            {
                icon: "tabler/flame",
                title: "Performance & Scalability",
                text: "We build lightning-fast, robust platforms designed to grow with your business, handling increasing traffic and data effortlessly.",
            },
            {
                icon: "tabler/user-cog",
                title: "CRM Development / Optimization",
                text: "Enhance customer relationships and boost sales efficiency with custom CRM solutions or the optimization of your existing systems, built to perfectly fit your workflow.",
            },
            {
                icon: "tabler/cloud",
                title: "Secure & High-Performance Hosting",
                text: "Ensure your website is always fast, secure, and available. We provide reliable hosting solutions optimized for performance.",
            },
        ],
    }
};

const integrationsData: FeatureIntegrationsSection = {
    heading: "10+ Integrations",
    title: "Our integrations, and much more",
};

const chooseUsSteps: FeatureStepItem = {
    title: "Why choose us?",
    steps: [
        {
            title: "Expertise that drives growth",
            description: " Benefit from our deep knowledge and proven experience in building high-quality websites and software solutions that are strategically designed to increase visitor engagement and boost conversions.",
        },
        {
            title: "See tangible results:",
            description: "We don't just build – we optimize. Our services are focused on delivering measurable improvements in website traffic, user engagement, and ultimately, your conversion rates.",
        },
        {
            title: "Innovation that drives results",
            description: "Stay ahead of the curve with our commitment to utilizing the latest technologies and creative approaches.",
        },
    ],
    buttonText: "Get started",
};

const chartData = {
    websiteVisitors: "Visitors",
    conversionRate: "Conversion",
    engagementTime: "Engagement",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    serviceAdoption: "Working with S1",
    startingPoint: "Starting point",
    beforeAdoption: "Before S1",
    afterAdoption: "After S1",
};

const processCardsData: ProcessCardItem[] = [
    {
        title: "Connect all our contacts",
        text: `Sync with your calendar apps and contacts. Google, Outlook, ProtonMail, and more.`,
    },
    {
        title: "Dashboards for all businesses",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`,
    },
    {
        title: "Synced to the cloud",
        text: `Your data is accessible from everywhere, syncing across all your devices.`,
    },
    {
        title: "Your business intelligence, simplified",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum.`,
    },
    {
        title: "Real-time insights at your fingertips",
        text: `Data syncs across your team instantly. Real-time access, with 99.9% uptime.`,
    },
    {
        title: "Connects to popular apps",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`,
    },
];

const stringsData = {
    newUpdates: "Latest Post!",
    simplifiedProcess: "Simplified process to get your project done"
};

export {
    contactData,
    ctaData,
    faqData,
    featuresData,
    integrationsData,
    chooseUsSteps,
    chartData,
    stringsData,
    processCardsData,
};