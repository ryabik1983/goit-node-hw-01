const fs = require('fs/promises')
const path = require ('path')
const { randomUUID } = require('crypto')

const readContent = async () => { 
    const content = await fs.readFile(
        path.join(__dirname, './db/contacts.json'),
        'utf8',
    )
    const result = JSON.parse(content)
    return result
}

async function listContacts() {
    return await readContent()
  
}

async function getContactById(contactId) {
    const contacts = await readContent()
    const [contact] = contacts.filter((item) => item.id === contactId)
    return contact
}

async function removeContact(contactId) {
  const contacts = await readContent();
  const deletedContact = await getContactById(contactId);
  const newContacts = contacts.filter((el) => el.id !== contactId);
  await fs.writeFile(
    path.join(__dirname, "./db/contacts.json"),
    JSON.stringify(newContacts, null, 2)
  );
  return deletedContact ? deletedContact : "contact is not exist";
}

async function addContact(name, email, phone) {
    const contacts = await readContent()
    const newContact = { id: randomUUID(), name, email, phone }
    contacts.push(newContact)
    await fs.writeFile(path.join(__dirname, './db/contacts.json'), JSON.stringify(contacts, null, 2))
    return newContact
}

module.exports = { listContacts, getContactById, removeContact, addContact };
