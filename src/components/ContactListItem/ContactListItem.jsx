import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './ContactListItem.styled';

const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {number} <Button onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  contact: PropTypes.object,
};
