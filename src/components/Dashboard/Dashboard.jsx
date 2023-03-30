import { useState } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Modal from 'components/Modal/Modal';

import { Container, MainTitle, SubTitle } from './Dashboard.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <Button type="button" onClick={toggleModal}>
        Add contact
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={toggleModal} />
        </Modal>
      )}

      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Dashboard;
