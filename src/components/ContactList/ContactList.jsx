import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const normalizedFilter = useSelector(getFilter).toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {contacts.length === 0 ? (
        <p>Phonebook is empty</p>
      ) : filteredContacts.length === 0 ? (
        <p>Contact with name '{normalizedFilter}' not found</p>
      ) : (
        <ul>
          {filteredContacts.map(contact => {
            return <ContactListItem key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
