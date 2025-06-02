import { type FooterBranding, type FooterLinks, type FooterLinksColumn } from "../types/configDataTypes";

const footerBranding: FooterBranding = {
    logo: "logos/logo.png",
    name: "Shine One Software",
    description: "Shine One Software is a software development company that specializes in building custom software solutions for businesses.",
};

const footerLinksColumn: FooterLinksColumn[] = [
    {
        title: "Common",
        links: [
            {
                text: "Home",
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
                text: "About",
                link: "/about",
            }
        ],
    },
    {
        title: "Sections",
        links: [
            {
                text: "Features",
                link: "/features",
            },
            {
                text: "Pricing",
                link: "/pricing",
            },
            {
                text: "FAQ",
                link: "/testimonials-faq",
            },
            {
                text: "Blog",
                link: "/blog",
            },
        ],
    },
    {
        title: "Legal",
        links: [
            {
                text: "Privacy Policy",
                link: "/privacy-policy",
            },
            {
                text: "Terms of Use",
                link: "/terms",
            },
        ],
    }
];

export { footerBranding, footerLinksColumn };