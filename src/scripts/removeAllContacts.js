import writeContacts from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const clear = {};
  await writeContacts(clear);
  console.log('Видалено все');
};

removeAllContacts();
