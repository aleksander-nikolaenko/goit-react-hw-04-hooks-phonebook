import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          <p className={styles.text}>Name</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Petr Petrov"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
            isRequired
          />
        </label>
        <label htmlFor={this.numberInputId} className={styles.label}>
          <p className={styles.text}>Number</p>
          <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder="+38-033-333-33-33"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={(event) => this.handleChange(event)}
            isRequired
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
