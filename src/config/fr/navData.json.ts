/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Solutions",
		link: "/features",
	},
	{
		text: "Tarifs",
		link: "/pricing",
	},
	{
		text: "À Propos",
		link: "/about",
	},
	{
		text: "Blogue",
		link: "/blog",
	},
	{
		text: "Ressources",
		megaMenuColumns: [
			{
				title: "Informations",
				items: [
					{
						text: "Accueil",
						link: "/",
					},
					{
						text: "Contact",
						link: "/contact",
					},
					{
						text: "Politique de confidentialité",
						link: "/privacy-policy",
					},
					{
						text: "Conditions d'utilisation",
						link: "/terms",
					},
				],
			},
			{
				title: "Sections",
				items: [
					{
						text: "Solutions",
						link: "/features",
					},
					{
						text: "Tarifs",
						link: "/pricing",
					},
					{
						text: "À Propos",
						link: "/about",
					},
				],
			},
			{
				title: "Blogue",
				items: [
					{
						text: "Derniers articles",
						link: "/blog",
					},
					{
						text: "Categories",
						link: "/categories",
					},
					{
						text: "Configurer TSConfig Paths",
						link: "/blog/tsconfig-paths-setup",
					},
					{
						text: "Configurer Astro",
						link: "/examples/blog-post-2",
					},
				],
			},
		],
	},
];

export default navConfig;
