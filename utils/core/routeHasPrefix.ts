const defaultCountryCodes = ['id', 'en'];
type CountryCode = typeof defaultCountryCodes[number];

export function isPathHasCountryPrefix(url: string): boolean {
    try {
        const { pathname } = new URL(url);
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length === 0) return false;

        return defaultCountryCodes.includes(segments[0].toLowerCase());
    } catch (err) {
        // URL invalid — vibes error detected
        return false;
    }
}