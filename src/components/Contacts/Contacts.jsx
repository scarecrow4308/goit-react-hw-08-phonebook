import { useDispatch, useSelector } from "react-redux";
import {deleteContact, getContacts, removeContact } from '../../redux/contactsSlice';
import { FiltredContacts } from './FiltredContacts/FiltredContacts';
import PropTypes from 'prop-types';
import { Label, Input } from '../components.styled';
import { List } from "./Contacts.styled";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ModalForm } from "components/ModalForm/ModalForm";

export const Contacts = ({ onFilterSearch, filter}) => {
  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [editContact, setEditContact] = useState({});
 

  const onDelete = id => {
    dispatch(removeContact(id));
    const updatedContacts = contactList.filter(
      contact => contact.id !== id
    );

    dispatch(deleteContact(updatedContacts));
  }

  const handleModal = (obj) => {
    setModalIsOpened(s => !s);
    setEditContact(obj);
  }

  const filtredContacts = contactList.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const list = filtredContacts.map(({ name, id, number }) => (
    <FiltredContacts key={id} name={name} id={id} number={number} onDelete={onDelete} onEdit={handleModal} />
  ));

  return (
    <>
      <h2>Contacts</h2>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onFilterSearch}
          value={filter}
        />
      </Label>
      <List>
        {list}
      </List>
            {modalIsOpened && <Modal closeModal={handleModal} modalIsOpened = {modalIsOpened}>
        <ModalForm prevContact={editContact} handleModal={handleModal} />
      </Modal>}
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};
