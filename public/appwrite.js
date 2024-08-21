import { Client, Account } from 'https://cdn.jsdelivr.net/npm/appwrite@9.0.0/build/browser/index.js';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c54a810015372c4474');

const account = new Account(client);

export { client, account };
