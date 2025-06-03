import type { Icon } from "astro-icon/components";
import type { ComponentProps } from "react";

// Icon packs available in the project
type TablerIcon =
	| "tabler/calendar-check"
	| "tabler/star"
	| "tabler/address-book"
	| "tabler/user"
	| "tabler/lock-square"
	| "tabler/script"
	| "tabler/edit-circle"
	| "tabler/category"
	| "tabler/pencil"
	| "tabler/chevron-down"
	| "tabler/check"
	| "tabler/minus"
	| "tabler/moon-stars"
	| "tabler/sun"
	| "tabler/cloud"
	| "tabler/wand"
	| "tabler/api-app"
	| "tabler/heart"
	| "tabler/layout-grid"
	| "tabler/brand-twitter"
	| "tabler/bulb"
	| "tabler/alert-triangle"
	| "tabler/flame"
	| "tabler/info-circle";

type AmplifyIcon =
	| "amplify/amplify-logo"
	| "amplify/brands/dropbox"
	| "amplify/brands/docker"
	| "amplify/brands/shopify"
	| "amplify/brands/react"
	| "amplify/brands/slack"
	| "amplify/brands/zapier"
	| "amplify/brands/intercom"
	| "amplify/brands/kickstarter"
	| "amplify/brands/mailchimp"
	| "amplify/brands/typescript"
	| "amplify/brands/android"
	| "amplify/brands/apple"
	| "amplify/brands/figma"
	| "amplify/brands/wordpress"
	| "amplify/brands/wix"
	| "amplify/brands/windows";

type LogosIcon =
	| "logos/astro"
	| "logos/dribbble"
	| "logos/sanity"
	| "logos/contentfull"
	| "logos/github"
	| "logos/notion"
	| "logos/shopify"
	| "logos/webflow";

// Combined icon type
export type IconName = TablerIcon | AmplifyIcon | LogosIcon;

// site data types
export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	contact: {
		address1: string;
		address2: string;
		phone: string;
		email: string;
	};
	author: {
		name: string;
		email: string;
		twitter: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

export interface FooterLinks {
	text: string;
	link: string;
}

export interface FooterLinksColumn {
	title: string;
	links: FooterLinks[];
}

export interface FooterBranding {
	logo: string;
	name: string;
	description: string;
}

// --------------------------------------------------------
// nav data types
export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
	icon?: string; // adds an icon to the left of the text
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export interface navMegaDropdownColumn {
	title: string;
	items: navLinkItem[];
}

export interface navMegaDropdownItem {
	text: string;
	megaMenuColumns: navMegaDropdownColumn[];
}

export type navItem = navLinkItem | navDropdownItem | navMegaDropdownItem;

// --------------------------------------------------------
// faq data types
export interface faqPageItem {
	title: string;
	faqItems: FaqItem[];
}

export interface FaqItem {
	question: string; // this is the question of the accordion
	answer: string; // these are the details seen after expanding the accordion
}

// --------------------------------------------------------
// contact data types
export interface contactFormItem {
	title: string;
	subtitle: string;
	description: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	reason: string;
	submitButtonText: string;
}

// --------------------------------------------------------
// testimonial data types
export interface TestimonialItem {
	avatar: ImageMetadata; // an imported image
	name: string;
	title: string;
	testimonial: string;
}

// --------------------------------------------------------
// feature data types
export interface FeatureCardItem {
	title: string;
	text: string;
	icon?: ComponentProps<typeof Icon>["name"];
}

export interface FeaturePageItem {
	featuresCardsSection: {
		heading: string;
		title: string;
		subtitle: string;
		items: FeatureCardItem[];
	};
}

export interface FeatureIntegrationsSection {
	heading: string;
	title: string;
	subtitle?: string;
}

export interface ProcessCardItem {
	title: string;
	text: string;
}

export interface FeatureSideImageItem {
	badge: string;
	title: string;
	description: string;
	href: string;
	buttonText: string;
}

// --------------------------------------------------------
// team data types
export interface teamMember {
	image: ImageMetadata; // an imported image
	name: string;
	title: string;
	bio: string;
}

// --------------------------------------------------------
// cta data types
export interface CtaItem {
	title: string;
	description: string;
	buttonText: string;
}

// --------------------------------------------------------
// feature steps data types
export interface FeatureItem {
	title: string;
	description: string;

}

export interface FeatureStepItem {
	title: string;
	steps: FeatureItem[];
	buttonText: string;
}

// --------------------------------------------------------
// site settings types
export interface SiteSettingsProps {
	useViewTransitions?: boolean;
	useAnimations?: boolean;
}
