import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactsItem.module.css";

export class ContactsItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li className={styles.item}>
        <button
          className={styles.button}
          type="Submit"
          onClick={() => onDeleteContact(id)}
        >
          x
        </button>
        <div className={styles.wrapper}>
          {/* <span className={styles.decoration}></span> */}
          <p className={styles.text}>{name}: </p>
          <p className={styles.number}>{number}</p>
        </div>
      </li>
    );
  }
}
