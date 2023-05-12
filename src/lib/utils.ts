import {browser} from "$app/environment";

export function formatDate(date: string): string {
    let locale = 'en-EN';
    if (browser) {
        locale = navigator.language || navigator?.userLanguage;
    }

    return new Date(date).toLocaleDateString(locale, {month: 'long', day: 'numeric', year: 'numeric',})
}
