import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { ID, Query } from 'appwrite';
import { X_APPWRITE_BASE_PATH, X_APPWRITE_KEY, X_APPWRITE_PROJECT } from '$env/static/private';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return fail(422, { errors: { email: ['The email field is required!'] } });
		}

		if (
			!email
				.toString()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			return fail(422, { errors: { email: ['No valid email provided!'] } });
		}

		const emailExistResponse = await fetch(
			X_APPWRITE_BASE_PATH +
				'/databases/newsletter/collections/emails/documents?queries[]=' +
				Query.equal('email', [email.toString()]).toString(),
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': X_APPWRITE_PROJECT,
					'X-Appwrite-Key': X_APPWRITE_KEY
				}
			}
		);

		const json = await emailExistResponse.json();

		if (json.total !== 0) {
			return { success: true };
		}

		await fetch(X_APPWRITE_BASE_PATH + '/databases/newsletter/collections/emails/documents', {
			body: JSON.stringify({
				documentId: ID.unique(),
				data: {
					email,
					created_at: new Date().toISOString()
				}
			}),
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'X-Appwrite-Project': X_APPWRITE_PROJECT,
				'X-Appwrite-Key': X_APPWRITE_KEY
			}
		});

		return { success: true };
	}
} satisfies Actions;
