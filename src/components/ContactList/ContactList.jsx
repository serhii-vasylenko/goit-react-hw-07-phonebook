import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import {fetchContacts} from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();
  const normalizedFilter = useSelector(getFilter).toLowerCase();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length === 0 && isLoading === false && error === null ? (
        <p>Phonebook is empty</p>
      ) : filteredContacts.length === 0 &&
        isLoading === false &&
        error === null ? (
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
