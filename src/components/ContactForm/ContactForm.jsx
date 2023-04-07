import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { Form, Label, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target }) => {
    const {name, number} = target.form.elements;
    setName(name.value);
    setNumber(number.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isMatch = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isMatch) {
      alert(`${name} is already in contacts list!`);
      return;
    }


    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="">
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="">
        Phone:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}