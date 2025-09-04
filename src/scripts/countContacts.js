import readContacts from '../utils/readContacts.js';

export const countContacts = async () => {
  const data = (await readContacts()) || [];
  console.log(data.length);
};

countContacts();
