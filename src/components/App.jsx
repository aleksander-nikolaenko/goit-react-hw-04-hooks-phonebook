import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  onFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const hasName = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    hasName
      ? Notify.warning(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  onFilterInput = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contactsList", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    this.setState(() => ({
      contacts: localStorage.getItem("contactsList")
        ? JSON.parse(localStorage.getItem("contactsList"))
        : [],
    }));
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterInput} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
