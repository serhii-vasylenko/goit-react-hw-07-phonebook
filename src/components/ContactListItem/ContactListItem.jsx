import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, Button } from './ContactListItem.styled';

const ContactListItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch();

  return (
    <Item>
      {name}: {phone} <Button onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  contact: PropTypes.object,
};
