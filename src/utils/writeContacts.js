import { PATH_DB } from '../constants/contacts.js';

import * as fs from 'node:fs/promises';

export default async function writeContacts(data) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
