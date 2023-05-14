import { Client, Databases, ID } from 'appwrite';

const client = new Client()
	.setEndpoint('http://localhost:8088/v1') // Your API Endpoint
	.setProject('645c3090d2281740de55');

const databases = new Databases(client);

export { databases, ID };
