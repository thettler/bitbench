import type {Actions} from './$types';
import {fail} from "@sveltejs/kit";
import * as fs from "fs";
import {parse} from 'csv/sync';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email');

        if (!email) {
            return fail(422, {errors: {email: ['The email field is required!']}});
        }

        if (!email.toString().match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            return fail(422, {errors: {email: ['No valid email provided!']}});
        }

        if (emailExists(email.toString())) {
            return {success: true};
        }

        const csv = `${email},${new Date().toISOString()}\n`;
        fs.appendFileSync('./storage/emails.csv', csv);

        return {success: true};
    }
} satisfies Actions;


function emailExists(email: string): boolean {
    const data = fs.readFileSync('./storage/emails.csv', 'utf8');
    const rawRecords = parse(data);

    for (const row of rawRecords) {
        if (row[0] === email) {
            return true;
        }
    }

    return false
}
