export interface MediaReference {
	url: string;
	alt?: string;
}

export interface SiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

export const SITE = {
	title: "Baitul Ilmi",
	tagline: "Menghidupkan Ilmu, Menjaga Akhlak",
	description:
		"Baitul Ilmi menyediakan les privat Islam modern di Banda Aceh. Tersedia materi Al-Qur'an, Tajwid, Bahasa Arab, dan Kajian Kitab bersama asatidz berpengalaman.",
	logo: {
		url: "/assets/img/logo.svg",
		alt: "Baitul Ilmi Logo",
	},
	defaultOgImage: "/assets/img/hero_teaching.webp",
};

export function resolveSiteIdentity(settings?: SiteIdentitySettings) {
	return {
		siteTitle: settings?.title || SITE.title,
		siteTagline: settings?.tagline || SITE.tagline,
		siteLogo: settings?.logo?.url ? settings.logo : SITE.logo,
	};
}
