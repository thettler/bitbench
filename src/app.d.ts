// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare module '*?component' {
		const content: ConstructorOfATypedSvelteComponent;
		export default content;
	}

	declare module '*imagetool' {
		const value: string;
		export default value;
	}
}
export {};
