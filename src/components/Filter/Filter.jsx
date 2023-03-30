import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <Label htmlFor="">
      Find contacts by Name:
      <Input type="text" value={value} onChange={handleFilter}></Input>
    </Label>
  );
};

export default Filter;
