import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <label className={styles.label}>
        <p className={styles.text}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}
