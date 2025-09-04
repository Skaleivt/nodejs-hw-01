import { PATH_DB } from '../constants/contacts.js';

import * as fs from 'node:fs/promises';

export default async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const res = JSON.parse(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}
