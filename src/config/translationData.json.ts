/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";
import teamDataEn from "./en/teamData.json";
import pricingDataEn from "./en/pricingData.json";
import navDataFr from "./fr/navData.json";
import siteDataFr from "./fr/siteData.json";
import teamDataFr from "./fr/teamData.json";
import pricingDataFr from "./fr/pricingData.json";
import { footerBranding as footerBrandingEn, footerLinksColumn as footerLinksColumnEn } from "./en/footerData.json";
import { footerBranding as footerBrandingFr, footerLinksColumn as footerLinksColumnFr } from "./fr/footerData.json";
import * as generalDataEn from "./en/generalData.json";
import * as generalDataFr from "./fr/generalData.json";

export const dataTranslations = {
	en: {
		...generalDataEn,
		siteData: siteDataEn,
		navData: navDataEn,
		generalData: generalDataEn,
		footerData: {
			footerBranding: footerBrandingEn,
			footerLinksColumn: footerLinksColumnEn
		},
		pricingData: pricingDataEn,
		teamData: teamDataEn,
	},
	fr: {
		...generalDataFr,
		siteData: siteDataFr,
		navData: navDataFr,
		generalData: generalDataFr,
		footerData: {
			footerBranding: footerBrandingFr,
			footerLinksColumn: footerLinksColumnFr
		},
		pricingData: pricingDataFr,
		teamData: teamDataFr,
	},
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
	en: {
		hero_text: "Amplify your digital presence",
		hero_description:
			"Designs that shine, software that works. Fully leverage your online presence with high-performing, adaptable software designed to grow with your needs.",
		back_to_all_posts: "Back to all posts",
		updated: "Updated",
		contact: "Contact Us",
	},
	fr: {
		hero_text: "Amplifiez votre présence numérique",
		hero_description:
			"Des designs qui brillent, des logiciels qui fonctionnent. Exploitez pleinement votre présence en ligne avec des logiciels performants et adaptables, conçus pour évoluer selon vos exigences.",
		back_to_all_posts: "Retour à tous les articles",
		updated: "Mis à jour",
		contact: "Nous contacter",
	},
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/legal/privacy", the route would be "legal/privacy"
 *
 * This also supports wildcards. For example, "categories/*" would match "categories/1" or "categories/2" etc for that language.
 *
 * Note: This works in conjunction with the localizedCollections object below
 */
export const routeTranslations = {
	en: {
		aboutKey: "about",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		blogKey: "blog",
	},
	fr: {
		aboutKey: "about",
		categoryKey: "categories",
		categoryKey2: "categories",
		categoryKey3: "categories/*",
		blogKey: "blog",
	},
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
	blog: {
		en: "blog",
		fr: "blogue"
	},
	// Add more collections/locales as needed
} as const;
