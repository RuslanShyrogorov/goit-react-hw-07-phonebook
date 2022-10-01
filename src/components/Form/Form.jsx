import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FormLabel, FormInput } from './Form.styled';
import Button from 'components/Button/Button';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Box
        border="normal"
        p={3}
        mb={5}
        mt={3}
        display="flex"
        flexDirection="column"
        as="form"
        onSubmit={handleSubmit}
      >
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <FormLabel htmlFor="tel">Number</FormLabel>
        <FormInput
          type="tel"
          name="number"
          value={number}
          id="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <Button type="submit" text="Add contact" />
      </Box>
    );
  }
}
