function buildContact() {
 var group = ContactsApp.getContactGroup("System Group: My Contacts");
 group.addContact(ContactsApp.createContact('Navdeep2', 'Singh2', 'navdeep2@mangoblogger.com'));
 var contact = ContactsApp.findByEmailAddress('navdeep2@mangoblogger.com');
 contact.setWorkPhone('29805049021');
 }
