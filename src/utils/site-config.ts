/**
 * Konfigurasi kontak Baitul Ilmi — satu sumber kebenaran.
 * Ubah di sini, semua halaman ikut berubah.
 */
export const CONTACT = {
	whatsappNumber: "6281263631063",
	phoneDisplay: "0812-6363-1063",
	serviceArea: "Banda Aceh dan sekitarnya",
	openingHours: "Senin - Sabtu (08.00 - 18.00 WIB)",
} as const;

export function whatsappLink(message?: string): string {
	const base = `https://wa.me/${CONTACT.whatsappNumber}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const SOCIAL_LINKS = {
	facebook: "https://facebook.com",
	instagram: "https://instagram.com",
	tiktok: "https://tiktok.com",
} as const;
