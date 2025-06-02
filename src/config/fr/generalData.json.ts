import { type CtaItem, type FeatureIntegrationsSection, type FeaturePageItem, type FeatureStepItem, type ProcessCardItem, type contactFormItem, type faqPageItem } from "../types/configDataTypes";

const contactData: contactFormItem = {
    title: "Contactez-nous",
    subtitle: "Nous sommes ici pour vous aider",
    description: "Nous sommes ici pour vous aider avec toutes les questions que vous pouvez avoir. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Addresse courriel",
    phone: "Téléphone",
    reason: "Raison de contact",
    submitButtonText: "Envoyer",
};


// note: 1 level of dropdown is supported
const ctaData: CtaItem = {
    title: "Discutons de votre prochain grand projet de développement",
    description:
        "Planifions un appel pour discuter de la manière dont nos services de développement web et logiciel peuvent accélérer votre croissance numérique.",
    buttonText: "Planifier un appel",
};


// replace this data with whatever you want in your FAQ section
const faqData: faqPageItem = {
    title: "Nous sommes là pour vous aider",
    faqItems: [
        {
            question: "Où êtes-vous situés ?",
            answer: "Nous sommes une entreprise Québécoise qui opèrent sur la Rive-Sud de Montréal. Nous avons un bureau situé à St-Hyacinthe.",
        },
        {
            question: "Quels types de services web proposez-vous ?",
            answer: "Nous offrons une gamme complète de services de développement informatique, incluant la création de sites web, le développement d'applications sur mesure, et la maintenance de systèmes existants. Nous nous spécialisons dans les projets personnalisés pour répondre aux besoins spécifiques de nos clients, qu'ils soient des entreprises ou des particuliers.",
        },
        {
            question: "Comment puis-je vous contacter ?",
            answer: "Vous pouvez nous contacter par courriel à info@shine-one-software.com. Nous sommes toujours disponibles pour discuter de vos projets et besoins en développement informatique.",
        },
        {
            question: "Proposez-vous des services d'hébergement ?",
            answer: "Oui, nous offrons des services d'hébergement pour vos applications et sites web. Nous nous assurons que vos solutions sont hébergées de manière sécurisée et performante.",
        },
        {
            question: "Travaillez-vous sur des projets existants ou du code legacy ?",
            answer: "Absolument ! Nous avons l'expertise nécessaire pour travailler sur des projets existants et du code legacy. Nous pouvons moderniser, maintenir ou améliorer vos systèmes actuels tout en préservant leur fonctionnalité essentielle.",
        },
        {
            question: "Pour quels types de clients travaillez-vous ?",
            answer: "Nous travaillons avec une clientèle diversifiée, incluant des entreprises de toutes tailles, des startups, des organisations à but non lucratif et des particuliers. Chaque projet est traité avec la même attention aux détails et le même engagement envers l'excellence.",
        },
        {
            question: "Quel est votre processus de travail ?",
            answer: "Notre processus commence par une consultation approfondie pour comprendre vos besoins. Nous développons ensuite une proposition détaillée, suivie d'une phase de développement itérative avec des points de contrôle réguliers. Nous assurons également un support continu après le déploiement.",
        }
    ],
};

const featuresData: FeaturePageItem = {
    featuresCardsSection: {
        heading: "Solutions",
        title: "Nos solutions",
        subtitle: "Shine One Software est votre partenaire de confiance pour tous vos besoins numériques, nous proposons une large gamme de solutions pour répondre à vos besoins.",
        items: [
            {
                icon: "tabler/api-app",
                title: "Solutions Numériques Stratégiques",
                text: "Au-delà du code, nous concevons des sites web et des logiciels en parfaite adéquation avec vos objectifs commerciaux, garantissant que chaque actif numérique contribue à votre succès.",
            },
            {
                icon: "tabler/brand-html5",
                title: "Développement Web Personnalisé",
                text: "De sites web marketing aux applications web puissantes, nous créons des présences en ligne sur mesure parfaitement adaptées à votre marque et à vos objectifs."
            },
            {
                icon: "tabler/app-window",
                title: "Solutions Logicielles Personnalisées",
                text: "Rationalisez vos opérations, automatisez vos processus et innovez avec des logiciels sur mesure conçus pour résoudre vos défis commerciaux uniques.",
            },
            {
                icon: "tabler/flame",
                title: "Performance & Évolutivité",
                text: "Nous construisons des plateformes rapides comme l'éclair et robustes, conçues pour évoluer avec votre entreprise, gérant l'augmentation du trafic et des données sans effort."
            },
            {
                icon: "tabler/user-cog",
                title: "Développement / Optimisation CRM",
                text: "Améliorez les relations clients et renforcez l'efficacité des ventes grâce à des solutions CRM personnalisées ou l'optimisation de vos systèmes existants, conçues pour s'intégrer parfaitement à votre flux de travail.",
            },
            {
                icon: "tabler/cloud",
                title: "Hébergement Web Sécurisé & Performant",
                text: "Assurez-vous que votre site web est toujours rapide, sécurisé et disponible. Nous proposons des solutions d'hébergement fiables optimisées pour la performance.",
            },
        ],
    }
};

const integrationsData: FeatureIntegrationsSection = {
    heading: "10+ Intégrations",
    title: "Nos intégrations, et bien plus encore",
};

const chooseUsSteps: FeatureStepItem = {
    title: "Pourquoi nous choisir?",
    steps: [
        {
            title: "Une expertise qui propulse votre croissance",
            description: "Bénéficiez de nos connaissances approfondies et de notre expérience éprouvée dans la création de sites web et de solutions logicielles de haute qualité, stratégiquement conçues pour accroître l'engagement des visiteurs et augmenter les conversions.",
        },
        {
            title: "Des résultats tangibles et mesurables",
            description: "Nous ne nous contentons pas de construire – nous optimisons. Nos services sont axés sur la fourniture d'améliorations mesurables en termes de trafic web, d'engagement utilisateur et, en fin de compte, de vos taux de conversion.",
        },
        {
            title: "L'innovation au service de vos résultats",
            description: "Restez à la pointe grâce à notre engagement à utiliser les dernières technologies et des approches créatives.",
        },
    ],
    buttonText: "Commençons",
};

const chartData = {
    websiteVisitors: "Visiteurs",
    conversionRate: "Conversion",
    engagementTime: "Engagement",
    months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
    serviceAdoption: "Travailler avec S1",
    startingPoint: "Point de départ",
    beforeAdoption: "Avant S1",
    afterAdoption: "Après S1",
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
    newUpdates: "Nouvel Article!",
    simplifiedProcess: "Processus simplifié pour obtenir votre projet"
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