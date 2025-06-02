import { type FooterBranding, type FooterLinks, type FooterLinksColumn } from "../types/configDataTypes";

const footerBranding: FooterBranding = {
    logo: "logos/logo.png",
    name: "Shine One Software",
    description: "Shine One Software est une entreprise de développement de logiciels qui spécialise dans la création de solutions logicielles personnalisées pour les entreprises.",
};

const footerLinksColumn: FooterLinksColumn[] = [
    {
        title: "Commun",
        links: [
            {
                text: "Accueil",
                link: "/",
            },
            {
                text: "Solutions",
                link: "/features",
            },
            {
                text: "Contact",
                link: "/contact",
            },
            {
                text: "À propos",
                link: "/about",
            }
        ],
    },
    {
        title: "Sections",
        links: [
            {
                text: "Fonctionnalités",
                link: "/features",
            },
            {
                text: "Prix",
                link: "/pricing",
            },
            {
                text: "FAQ",
                link: "/testimonials-faq",
            },
            {
                text: "Blogue",
                link: "/blog",
            },
        ],
    },
    {
        title: "Légal",
        links: [
            {
                text: "Politique de confidentialité",
                link: "/privacy-policy",
            },
            {
                text: "Conditions d'utilisation",
                link: "/terms",
            },
        ],
    }
];

export { footerBranding, footerLinksColumn };