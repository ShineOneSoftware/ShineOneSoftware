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
		text: "Pricing",
		link: "/pricing",
	},
	{
		text: "About",
		link: "/about",
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "Resources",
		megaMenuColumns: [
			{
				title: "Common",
				items: [
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Contact",
						link: "/contact",
					},
					{
						text: "Privacy Policy",
						link: "/privacy-policy",
					},
					{
						text: "Terms of Use",
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
						text: "Pricing",
						link: "/pricing",
					},
					{
						text: "About",
						link: "/about",
					},
				],
			},
			{
				title: "Blog",
				items: [
					{
						text: "Blog Post 1",
						link: "/blog/tsconfig-paths-setup",
					},
					{
						text: "Blog Post 2",
						link: "/examples/blog-post-2",
					},
					{
						text: "Categories",
						link: "/categories",
					},
					{
						text: "Blog Index 1",
						link: "/blog",
					},
					{
						text: "Blog Index 2",
						link: "/examples/blog-index-2",
					},
				],
			},
		],
	},
];

export default navConfig;
