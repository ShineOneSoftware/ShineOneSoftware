import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Shine One Software",
	// Your website's title and description (meta fields)
	title: "Shine One Software - Agence de logiciels",
	description:
		"Nous sommes Shine One Software, nous aidons les entreprises comme la vôtre à donner vie à votre vision web.",

	// used on contact page and footer
	contact: {
		address1: "TODO",
		address2: "TODO",
		phone: "TODO",
		email: "info@shine-one-software.com",
	},

	// Your information for blog post purposes
	author: {
		name: "Shine One Software",
		email: "info@shine-one-software.com",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/s1-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
